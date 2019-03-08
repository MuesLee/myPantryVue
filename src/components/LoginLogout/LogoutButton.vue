<template>
  <div class="login">
    <v-btn @click="logout()">Logout</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from "@/store/index";


@Component({
  components: {
  },
  methods: {
    logout: () => store.dispatch('logoutAction')
  }

})
export default class LogoutButton extends Vue {}


</script>
