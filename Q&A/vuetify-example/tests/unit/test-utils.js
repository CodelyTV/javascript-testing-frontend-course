import { render as vtlRender } from "@testing-library/vue";
import Vue from "vue";
import Vuetify from "vuetify";

export * from "@testing-library/vue";

Vue.use(Vuetify);

export function render(component, options, cb) {
  const root = document.createElement("div");
  root.setAttribute("data-app", "true");

  return vtlRender(
    component,
    {
      container: document.body.appendChild(root),
      vuetify: new Vuetify(),
      ...options,
    },
    cb
  );
}
