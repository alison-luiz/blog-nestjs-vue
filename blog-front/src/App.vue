<template>
  <v-app>
    <v-app-bar app color="primary" dark v-if="!isAuthRoutes">
      <div class="d-flex align-center">
        Blog
      </div>

      <v-spacer></v-spacer>

      <create-post />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import CreatePost from './modules/post/components/CreatePost.vue';

export default {
  name: 'App',

  components: {
    CreatePost,
  },

  data: () => ({
    //
  }),
  computed: {
    isAuthRoutes() {
      const authRoutes = ['register', 'login'];
      return authRoutes.includes(this.$route.name);
    },
  },
};
</script>
