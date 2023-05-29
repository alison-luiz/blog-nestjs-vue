<template>
  <v-container>
    <post
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Post from '../components/Post.vue';

export default {
  name: 'Posts',

  components: {
    Post,
  },

  created() {
    this.handleGetPosts();
  },

  computed: {
    ...mapState('PostStore', ['posts']),
  },

  methods: {
    ...mapActions('PostStore', ['getPosts']),

    handleGetPosts() {
      this.getPosts();
    },
  },
};
</script>

<style scoped></style>
