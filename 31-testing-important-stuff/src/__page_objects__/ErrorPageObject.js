import { nextTick } from "vue";

export default class ErrorPageObject {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  text() {
    return this.wrapper.text();
  }

  async wait() {
    await nextTick();
  }

  hasErrorMessage() {
    return this.wrapper.find('[data-test-id="message"]').exists();
  }

  clickToggleButton() {
    this.wrapper.find(['data-test-id="toggle-message"]').trigger("click");
  }
}
