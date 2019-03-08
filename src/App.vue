<template>
  <v-app>
    <PantryToolbar/>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import PantryToolbar from '@/components/PantryToolbar.vue';

export default {
  name: 'App',
  components: {
    PantryToolbar
  },
  data() {
    return {
      //
    };
  },
};
</script>
