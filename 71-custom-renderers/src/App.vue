<template>
  <div>
    <Header />
    <Comments />
  </div>
</template>

<script>
import Comments from "./components/Comments.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Comments,
    Header
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
