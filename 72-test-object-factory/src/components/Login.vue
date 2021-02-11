<template>
  <div class="login">
    <template v-if="isLogged">
      <img :src="user.avatar" :alt="user.name" class="login__avatar" />
      <button @click="logout">
        Log out
      </button>
    </template>
    <button v-else @click="login">
      Log in
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["isLogged", "user"])
  },
  methods: {
    ...mapActions(["login", "logout"])
  }
};
</script>

<style scoped>
.login {
  min-height: 4rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login__avatar {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #eee;
}
</style>
