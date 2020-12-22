<template>
  <div role="alert" class="error">
    {{ msg }}
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: "An unknown error occurred. Please try again later.",
    },
  },
};
</script>

<style>
.error {
  color: tomato;
}
</style>
