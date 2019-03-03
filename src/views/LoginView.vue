<template>
  <div class="login">
    <LoginForm></LoginForm>
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
