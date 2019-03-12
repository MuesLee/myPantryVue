<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <v-list three-line>
          <v-list-group v-for="item in items" :key="item.id" v-model="item.active">
            <template v-slot:activator>
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <v-img :src="buildImageSrcPath(item.imageName)"/>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{item.amount}} {{item.unit}}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile v-for="subItem in item.items" :key="subItem.id" avatar class="pl-5 subList">
              <v-list-tile-avatar>
                <v-img :src="buildImageSrcPath(subItem.iconName)"/>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.name }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ subItem.amount }} {{subItem.unit}}</v-list-tile-sub-title>
                <v-list-tile-sub-title> noch {{subItem.expiresAt | daysDiffToday}} Tage haltbar</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.subList{
    background: lightgrey
    }

</style>



<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Item from "@/domain/item.ts";
import ItemStack from "@/domain/itemStack.ts";
import Unit from "@/domain/unit.ts";

@Component({
  components: {},
  computed: {}
})
export default class PantryListComponent extends Vue {
  items: ItemStack[];
  constructor() {
    super();
    this.items = [
      new ItemStack(1, "Gurken", 1, Unit.PIECE, "cucumber.png", [
        new Item(1, "Gurke", 1, Unit.PIECE, new Date(), "cucumber.png")
      ]),

      new ItemStack(2, "Mehl", 2000, Unit.GRAM, "flour.png", [
        new Item(2, "Mehl", 1500, Unit.GRAM, new Date(), "flour.png"),
        new Item(3, "Mehl", 500, Unit.GRAM, new Date(), "flour.png")
      ])
    ];
  }

  buildImageSrcPath(imageName: string) {
    return require(`@/assets/food/${imageName}`);
  }
}
</script>
