<template>
    <v-dialog
      v-model="opened"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          elevation="2"
          v-bind="attrs"
          v-on="on"
        >
          Criar Post
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Criar novo post
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="form.title"
                  label="Titulo"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  v-model="form.description"
                  label="Descrição"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="handleCreatePost"
            :disabled="loading"
            :loading="loading"
          >
            Criar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CreatePost',

  data() {
    return {
      opened: false,
      loading: false,
      form: {
        title: '',
        description: '',
      },
    };
  },

  methods: {
    ...mapActions('PostStore', ['createPost']),

    async handleCreatePost() {
      this.loading = true;
      try {
        await this.createPost(this.form);
        this.loading = false;
        this.opened = false;
        this.resetForm();
      } catch (error) {
        this.loading = false;
      }
    },

    resetForm() {
      this.form.title = '';
      this.form.description = '';
    },
  },

};
</script>

<style scoped>
</style>
