<template>
  <v-container class="d-flex justify-center align-center fill-height">
    <v-card>
      <v-card-title>
        <h2>Registro</h2>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" @submit.prevent="register">
          <template>
            <v-text-field v-model="form.first_name" label="Nome" required></v-text-field>
            <v-text-field v-model="form.last_name" label="Sobrenome" required></v-text-field>
            <v-text-field v-model="form.email" label="Email" type="email" required></v-text-field>
            <v-text-field
              v-model="form.password"
              label="Senha"
              type="password"
              required
            ></v-text-field>
            <v-text-field
              v-model="form.date_of_birth"
              label="Data de Nascimento"
              type="date"
              required
            ></v-text-field>
            <v-text-field v-model="form.document" label="Documento (CPF)" required></v-text-field>
          </template>

          <v-btn type="submit" color="primary">
            Registrar
          </v-btn>

          <v-btn text @click="goToLogin"> Já tenho uma conta </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import AuthService from '../service';

export default {
  name: 'Register',

  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        date_of_birth: '',
        document: '',
      },
    };
  },

  methods: {
    goToLogin() {
      this.$router.push({ name: 'login' });
    },
    async register() {
      await AuthService.register(this.form).then(() => {
        this.goToLogin();
      });
    },
  },
};
</script>

<style scoped></style>
