import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";
import { store } from "./store";

createApp(App)
  .use(createStore(store))
  .mount("#app");
