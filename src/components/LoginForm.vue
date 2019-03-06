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
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { mapActions } from "vuex";
import LoginData from "@/domain/loginData";
import store from "@/store/index";

export default {
  data() {
    return {
      loginData: {
        username: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    login: (loginData: LoginData) => {
      loginImpl(loginData);
    }
  }
};

function loginImpl(loginData: LoginData) {
  store.dispatch("loginAction", loginData).catch( err => handleLoginError(err));
  console.log("Login success");
}

function handleLoginError(err: Error)
{
  store.commit('error', err);
  console.log("Login error", err);
}
</script>



<style>
</style>
