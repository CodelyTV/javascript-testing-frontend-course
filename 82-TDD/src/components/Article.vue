<template>
  <section class="article">
    <ArticleContent v-if="article" :article="article" />
  </section>
</template>

<script>
import { getArticle } from "@/services/articlesRepository";
import ArticleContent from "@/components/ArticleContent";

export default {
  components: {
    ArticleContent,
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
    };
  },
  async created() {
    this.article = await getArticle(this.postId);
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
