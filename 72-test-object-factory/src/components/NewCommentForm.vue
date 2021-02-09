<template>
  <section>
    <h2>Add a comment</h2>
    <form @submit.prevent="submit" class="form">
      <label class="sr-only" for="comment">Comment</label>
      <textarea id="comment" v-model="content" class="form__textarea" />
      <button class="form__submit">
        Add comment
      </button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["submit"],
  data() {
    return {
      content: ""
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.content);
      this.content = "";
    }
  }
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  margin: 0 auto;
}
.form__textarea {
  margin: 0.5rem 0;
  min-height: 3rem;
}
.form__submit {
  min-height: 1.5rem;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  border: 0;
}
</style>
