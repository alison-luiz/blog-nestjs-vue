<template>
  <v-card class="mt-2">
    <v-card-title>
      {{ post.title }}
    </v-card-title>
    <v-card-text>
      {{ post.description }}
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn
        color="error"
        small
        icon
        @click="handleDeletePost"
      >
      <v-icon small>
        mdi-delete-outline
      </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Post',

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapActions('PostStore', ['deletePost']),

    async handleDeletePost() {
      await this.deletePost(this.post.id);
    },
  },

};
</script>

<style scoped>
</style>
