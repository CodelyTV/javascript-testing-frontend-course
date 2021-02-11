import { render as vtlRender } from "@testing-library/vue";
import { createI18n } from "vue-i18n";
import { store } from "../store";
import en from "../i18n/en";

export * from "@testing-library/vue";

export function render(component, { initialState } = {}) {
  return vtlRender(component, {
    store: {
      ...store,
      state: {
        ...store.state,
        ...initialState
      }
    },
    global: {
      plugins: [
        createI18n({
          locale: "en",
          fallbackLocale: "en",
          messages: {
            en
          }
        })
      ]
    }
  });
}
