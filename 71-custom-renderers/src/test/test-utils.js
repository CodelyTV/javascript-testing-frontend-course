import { render as vtlRender } from "@testing-library/vue";
import { store } from "../store";

export * from "@testing-library/vue";

export function render(component, { initialState } = {}) {
  return vtlRender(component, {
    store: {
      ...store,
      state: {
        ...store.state,
        ...initialState
      }
    }
  });
}
