<template>
  <section>
    <Comment
      v-for="comment in comments"
      :key="comment.date"
      :comment="comment"
    />
  </section>
  <NewCommentForm v-if="isLogged" @submit="createComment" />
</template>

<script>
import { mapGetters } from "vuex";
import Comment from "@/components/Comment.vue";
import NewCommentForm from "@/components/NewCommentForm.vue";
import { createComment, getAllComments } from "@/services/commentsRepository";

export default {
  components: {
    Comment,
    NewCommentForm
  },
  data() {
    return {
      comments: []
    };
  },
  async created() {
    this.comments = (await getAllComments()) || [];
  },
  computed: {
    ...mapGetters(["isLogged", "user"])
  },
  methods: {
    async createComment(content) {
      const newComment = await createComment({
        user: this.user,
        content
      });
      this.comments.push(newComment);
    }
  }
};
</script>
