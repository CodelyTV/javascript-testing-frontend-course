<template>
  <article class="card">
    <a :href="`/${course.slug}`" :aria-label="course.title">
      <img class="card-img" :src="`/cursos/${course.img}`" alt="" />
      <div class="card-info">
        <h3>{{ course.title }}</h3>
        <strong>{{ course.date }}</strong>
        <p class="card-lead">
          {{ course.description }}
        </p>
      </div>
    </a>
  </article>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  min-height: 10rem;
  background: #fff;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}
.card a {
  color: #333;
  text-decoration: none;
}
.card:hover,
.card:focus {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  transform: translateY(-0.5rem);
}
.card:focus {
  outline: 5px solid var(--primary-color);
}
.card-img {
  width: 100%;
}
.card-info {
  padding: 0 1rem 1rem;
}
</style>
