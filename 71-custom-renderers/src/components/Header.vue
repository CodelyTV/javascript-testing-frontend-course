<template>
  <header>
    <h1>{{ $t("header.title") }}</h1>
    <Login />
  </header>
</template>

<script>
import Login from "@/components/Login";

export default {
  components: {
    Login
  }
};
</script>

<style lang="scss" scoped></style>
