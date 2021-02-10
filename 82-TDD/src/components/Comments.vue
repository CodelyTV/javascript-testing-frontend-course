<template>
  <section class="comments">
    <h2>Comments</h2>
    <template v-if="comments.length">
      <Comment
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </template>
    <div v-else>There are no comments</div>
  </section>
</template>

<script>
import Comment from "@/components/Comment.vue";

export default {
  components: {
    Comment,
  },
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
