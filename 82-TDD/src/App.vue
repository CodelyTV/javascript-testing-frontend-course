<template>
  <ArticleView />
</template>

<script>
import ArticleView from "./views/ArticleView.vue";

export default {
  name: "App",
  components: {
    ArticleView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
