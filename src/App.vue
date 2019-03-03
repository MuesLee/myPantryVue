<template>
  <v-app>
    <v-toolbar app>
      <v-flex xs12>
        <v-img :src="require('./assets/logo.png')" class="my-3" contain height="50"></v-img>
      </v-flex>
    </v-toolbar>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      //
    };
  },
};
</script>
