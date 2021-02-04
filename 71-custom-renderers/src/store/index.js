import { login } from "@/services/userRepository";

export const store = {
  state: {
    user: null
  },
  getters: {
    user: state => state.user,
    isLogged: state => !!state.user
  },
  mutations: {
    addUser(state, user) {
      state.user = user;
    },
    removeUser(state) {
      state.user = null;
    }
  },
  actions: {
    async login({ commit }) {
      const user = await login();
      commit("addUser", user);
      return user;
    },
    async logout({ commit }) {
      commit("removeUser");
      return null;
    }
  }
};
