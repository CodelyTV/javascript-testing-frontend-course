<template>
  <v-app>
    <v-main>
      <StateForm />
    </v-main>
  </v-app>
</template>

<script>
import StateForm from "./components/StateForm.vue";

export default {
  name: "App",
  components: {
    StateForm,
  },
};
</script>
