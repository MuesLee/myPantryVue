<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="loginData.username"
                autocomplete="username"
                prepend-icon="person"
                name="login"
                label="Login"
                type="text"
              ></v-text-field>
              <v-text-field
                v-model="loginData.password"
                autocomplete="current-password"
                id="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-layout align-center justify-center>
              <v-btn color="primary" @click="login(loginData)">Login</v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
        <v-alert v-if="!!error" :value="true" type="error">{{ error }}</v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import LoginData from "@/domain/loginData";
import store from "@/store/index";
import router from "@/router";
import { AccountState } from "@/store/modules/account";

export default {
  data() {
    return {
      loginData: {
        username: "",
        password: ""
      }
    };
  },
  computed: {
    error(): Error | null {
      return (store.state as AccountState).account.error;
    },
    redirect(): any {
      return redirectImpl();
    }
  },
  methods: {
    login: (loginData: LoginData) => {
      loginImpl(loginData);
    }
  }
};

function redirectImpl(): string
{
  console.log('redirect', router.currentRoute.query.redirect[0]);

  return router.currentRoute.query.redirect === undefined || null ? 'home' : (router.currentRoute.query.redirect as string);
}

function loginImpl(loginData: LoginData) {
  store
    .dispatch("loginAction", loginData)
    .then(() => router.push( redirectImpl()))
    .catch(err => handleLoginError(err));
}

function handleLoginError(err: Error) {
  store.commit("error", err);
}
</script>



<style>
</style>
