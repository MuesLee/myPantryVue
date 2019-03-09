<template>
    <v-bottom-nav
      :value=true
      absolute
      :mandatory=true
      color="transparent"
    >
      <v-btn
        color="primary"
        flat
        @click="routeTo('shoppingList')"
      >
        <span>Einkaufen</span>
        <v-icon>shopping_basket</v-icon>
      </v-btn>

      <v-btn
        color="primary"
        flat
         @click="routeTo('home')"
      >
        <span>Übersicht</span>
        <v-icon>view_agenda</v-icon>
      </v-btn>

      <v-btn
        color="primary"
        flat
        @click="routeTo('pantry')"
      >
        <span>Vorrat</span>
        <v-icon>home</v-icon>
      </v-btn>

    </v-bottom-nav>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import router from '@/router';

@Component({
  components: {},
  methods: { routeTo: target => router.push(target) },
  data () {
      return {
      }
    }
})
export default class PantryBottomNavbar extends Vue {}
</script>