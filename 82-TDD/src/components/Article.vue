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
      pollingInterval: null,
    };
  },
  async created() {
    const [article, comments] = await Promise.all([
      getArticle(this.postId),
      getAllComments(this.postId),
    ]);

    this.article = article;
    this.comments = comments;
    this.pollingInterval = setInterval(() => {
      getAllComments(this.postId).then(comments => {
        this.comments = comments;
      });
    }, 5000);
  },
  beforeUnmount() {
    clearInterval(this.pollingInterval);
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
