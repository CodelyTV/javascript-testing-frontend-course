<template>
  <article>
    <h1 class="title">{{ article.title }}</h1>
    <img src="https://picsum.photos/800/400" alt="" class="img" />
    <p class="content">{{ article.body }}</p>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 2rem;
  text-transform: capitalize;
}
.img {
  max-width: 100%;
}
.content {
  font-size: 1.2rem;
  margin-bottom: 3rem;
}
</style>
