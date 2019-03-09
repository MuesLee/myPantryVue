<template>
  <v-toolbar app class="text-xs-center" color="secondary">
    <v-flex xs12>
      <v-avatar :size="50" color="secondary"> 
        <router-link to="home">
          <v-img :src="require('@/assets/logo.png')" class="my-3" contain height="50" width="50"/>
        </router-link>
      </v-avatar>
    </v-flex>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
  methods: {}
})
export default class PantryToolbar extends Vue {}
</script>
