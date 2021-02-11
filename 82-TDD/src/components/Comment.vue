<template>
  <section class="comment">
    <div class="comment__info">
      <em>
        <strong>{{ comment.username }}</strong> said:
      </em>
    </div>
    <h3>{{ comment.title }}</h3>
    <p>{{ comment.body }}</p>
  </section>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.comment {
  margin: 1rem auto;
  padding: 1rem;
  border-top: 1px solid #ddd;
  text-align: left;
}
.comment:last-child {
  border-bottom: 1px solid #ddd;
}
</style>
