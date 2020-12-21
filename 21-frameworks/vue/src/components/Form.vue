<template>
  <form @submit.prevent="handleSubmit">
    <label for="title">Title:</label>
    <input id="title" type="text" v-model="title" />

    <label for="content">Content:</label>
    <textarea id="content" v-model="content" />

    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  props: {
    submit: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    handleSubmit(event) {
      this.submit({ title: this.title, content: this.content });
      event.target.reset();
    },
  },
};
</script>
