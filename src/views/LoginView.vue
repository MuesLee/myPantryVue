<template>
  <div class="login">
    <LoginForm v-if="!authed" ></LoginForm>
    <LogoutButton v-if="authed" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginForm from '@/components/LoginLogout/LoginForm.vue';
import LogoutButton from '@/components/LoginLogout/LogoutButton.vue';
import store from "@/store";


@Component({
  components: {
    LoginForm, LogoutButton
  },
  computed: {
    authed: () => store.getters.tokenIsValid
  },
})
export default class LoginView extends Vue {}

</script>
