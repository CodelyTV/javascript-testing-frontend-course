<template>
  <div>
    <header>
      <Login />
    </header>
    <Comments />
  </div>
</template>

<script>
import Comments from "./components/Comments.vue";
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    Comments,
    Login
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
