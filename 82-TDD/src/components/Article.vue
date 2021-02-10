<template>
  <section class="article">
    <ArticleContent v-if="article" :article="article" />
    <Comments v-if="comments" :comments="comments" />
  </section>
</template>

<script>
import { getArticle } from "@/services/articlesRepository";
import { getAllComments } from "@/services/commentsRepository";
import ArticleContent from "@/components/ArticleContent";
import Comments from "@/components/Comments";

export default {
  components: {
    ArticleContent,
    Comments,
  },
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      article: null,
      comments: null,
    };
  },
  async created() {
    this.article = await getArticle(this.postId);
    this.comments = await getAllComments(this.postId);
  },
};
</script>

<style scoped>
.article {
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem;
}
</style>
