<template>
  <div class="login">
    <p>Login</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginForm from '@/components/LoginForm.vue'; // @ is an alias to /src

@Component({
  components: {
    LoginForm,
  },
})
export default class LoginView extends Vue {}
</script>
