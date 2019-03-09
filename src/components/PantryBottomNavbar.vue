<template>
  <v-bottom-nav app
    :active.sync="activeRouteName"
    :value="true"
    :mandatory="true"
    color="secondary"
  >
    <v-btn color="primary" flat @click="routeTo('shoppingList')" value="shoppingList">
      <span>Einkaufen</span>
      <v-icon>shopping_basket</v-icon>
    </v-btn>

    <v-btn color="primary" flat @click="routeTo('home')" value="home">
      <span>Übersicht</span>
      <v-icon>view_agenda</v-icon>
    </v-btn>

    <v-btn color="primary" flat @click="routeTo('pantry')" value="pantry">
      <span>Vorrat</span>
      <v-icon>home</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import router from "@/router";

@Component({
  components: {},
  methods: { routeTo: target => router.push(target) }
})
export default class PantryBottomNavbar extends Vue {
  activeRouteName = "home";

  mounted() {
    router.afterEach((to, from) => {
      this.activeRouteName = !!to.name ? to.name : "home";
    });
  }
}
</script>