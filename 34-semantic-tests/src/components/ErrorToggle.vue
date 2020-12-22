<template>
  <div>
    <h1>There's been an error</h1>
    <button id="toggle-message" @click="toggleMessage">
      Toggle more information
    </button>
    <ErrorMessage v-if="open" :msg="msg" />
  </div>
</template>

<script>
import ErrorMessage from "./ErrorMessage";

export default {
  data: () => ({
    open: false,
    msg:
      "Something really bad happened. For more information contact us at hello@example.com",
  }),
  methods: {
    toggleMessage() {
      this.open = !this.open;
    },
  },
  components: {
    ErrorMessage,
  },
};
</script>
