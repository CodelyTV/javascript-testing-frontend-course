<template>
  <section class="dashboard">
    <h1>My Courses</h1>
    <div class="dashboard-courses">
      <CourseCard
        v-for="course in courses"
        :course="course"
        :key="course.slug"
      />
    </div>
  </section>
</template>

<script>
import CoursesRepository from "@/services/CoursesRepository";
import CourseCard from "@/components/CourseCard.vue";

export default {
  components: {
    CourseCard,
  },
  data() {
    return {
      courses: [],
    };
  },
  props: {
    coursesRepo: {
      default: () => new CoursesRepository(),
    },
  },
  async created() {
    this.courses = await this.coursesRepo.searchAll();
  },
};
</script>

<style scoped>
.dashboard {
  max-width: 90rem;
  margin: 0 auto;
  padding: 2rem;
}

.dashboard-courses {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.dashboard-next {
  display: block;
  text-align: center;
  color: #333;
  text-decoration: none;
  border-radius: 0.2rem;
  padding: 0.8rem;
}
.dashboard-next:hover,
.dashboard-next:focus {
  outline: none;
  background: rgba(0, 0, 0, 0.05);
}
</style>
