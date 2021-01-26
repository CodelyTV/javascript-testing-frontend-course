<template>
  <div>
    <h1>A very interesting title</h1>
    <button @click="toggleContent">
      Toggle content
    </button>
    <transition name="fade">
      <div v-if="showContent">
        <h2>A subtitle</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showContent: true,
    };
  },
  methods: {
    toggleContent() {
      this.showContent = !this.showContent;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
