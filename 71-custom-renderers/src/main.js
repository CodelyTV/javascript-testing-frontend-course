import { createApp } from "vue";
import { createStore } from "vuex";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import { store } from "./store";

import en from "./i18n/en";
import es from "./i18n/es";

createApp(App)
  .use(createStore(store))
  .use(
    createI18n({
      locale: "en",
      fallbackLocale: "en",
      messages: {
        en,
        es
      }
    })
  )
  .mount("#app");
