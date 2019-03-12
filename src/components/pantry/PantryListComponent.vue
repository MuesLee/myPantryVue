<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list>
          <v-list-group v-for="item in items" :key="item.id" v-model="item.active">
            <template v-slot:activator>
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <v-img :src="buildImageSrcPath(item.imageName)"/>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile v-for="subItem in item.items" :key="subItem.id" avatar>
              <v-list-tile-avatar>
                <v-img :src="buildImageSrcPath(subItem.iconName)"/>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

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
        new Item(1, "Gurke", 1, Unit.PIECE, "cucumber.png")
      ]),

      new ItemStack(2, "Mehl", 2000, Unit.GRAM, "flour.png", [
        new Item(2, "Mehl", 1500, Unit.GRAM, "flour.png"),
        new Item(3, "Mehl", 500, Unit.GRAM, "flour.png")
      ])
    ];
  }

  buildImageSrcPath(imageName: string) {
    return require(`@/assets/food/${imageName}`);
  }
}
</script>
