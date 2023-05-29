<template>
  <v-container class='d-flex justify-center align-center fill-height'>
    <v-card>
      <v-card-title>
        <h2>Login</h2>
      </v-card-title>
      <v-card-text>
        <v-form ref='form' @submit.prevent='handleLogin'>
          <template>
            <v-text-field v-model='form.email' label='Email' type='email' required></v-text-field>
            <v-text-field
              v-model='form.password'
              label='Senha'
              type='password'
              required
            ></v-text-field>
          </template>

          <v-btn type='submit' color='primary' :disabled='loading'>
            <template v-if='loading'>
              <span>Entrando...</span>
              <v-progress-circular indeterminate color='white'></v-progress-circular>
            </template>
            <template v-else>
              <span>Entrar</span>
            </template>
          </v-btn>

          <v-btn text @click='goToRegister'> Criar uma conta </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',

  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      loading: false,
    };
  },

  methods: {
    ...mapActions('AuthStore', ['login']),

    goToRegister() {
      this.$router.push({ name: 'register' });
    },

    async handleLogin() {
      this.loading = true;
      await this.login(this.form)
        .then((response) => {
          setTimeout(() => {
            this.loading = false;
            if (response) {
              if (response.status === 'ok') {
                this.$router.push({ name: 'posts' });
              }
            }
          }, 1500);
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped></style>
