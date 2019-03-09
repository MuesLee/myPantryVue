<template>
  <div class="login">
    <router-link to="/">
      <v-btn @click="logout()">Logout</v-btn>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store/index";

@Component({
  components: {},
  methods: {
    logout: () => store.dispatch("logoutAction")
  }
})
export default class LogoutButton extends Vue {}
</script>
