<template>
  <div class="login">
    <LoginForm v-if="!authed" ></LoginForm>
    <v-btn v-if="authed" @click="logout()">Logout</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginForm from '@/components/LoginForm.vue';
import authService from "@/services/AuthService";
import store from "@/store/index";


@Component({
  components: {
    LoginForm,
  },
  computed: {
    authed: () => authService.userIsAuthenticated()
  },
  methods: {
    logout: () => store.dispatch('logoutAction')
  }

})
export default class LoginView extends Vue {}

function userIsAuthed()
{
  return ;
}

</script>
