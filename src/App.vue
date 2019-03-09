<template>
  <v-app>
    <PantryToolbar/>
    <v-content>
        <router-view></router-view>
    </v-content>
    <PantryBottomNavbar/>
  </v-app>
</template>

<script lang="ts">
import PantryToolbar from '@/components/PantryToolbar.vue';
import PantryBottomNavbar from '@/components/PantryBottomNavbar.vue';

export default {
  name: 'myPantry',
  components: {
    PantryToolbar, PantryBottomNavbar,
  },
  data() {
    return {
      //
    };
  },
};
</script>
