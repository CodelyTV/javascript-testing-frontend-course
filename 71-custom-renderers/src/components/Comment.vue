<template>
  <article class="comment">
    <div class="comment__info">
      <img
        class="comment__avatar"
        :src="comment.user.avatar"
        :alt="comment.user.name"
      />

      {{ date }} —&nbsp;
      <em>
        <strong>{{ comment.user.name }}</strong> said:
      </em>
    </div>
    {{ comment.content }}
  </article>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  computed: {
    date() {
      return new Date(this.comment.date).toDateString();
    }
  }
};
</script>

<style scoped>
.comment {
  max-width: 30rem;
  margin: 1rem auto;
  padding: 1rem 0;
  border-top: 1px solid #ddd;
  text-align: left;
}
.comment:last-child {
  border-bottom: 1px solid #ddd;
}
.comment__info {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.comment__avatar {
  max-width: 2.5rem;
  margin-right: 1rem;
  border-radius: 50%;
}
</style>
