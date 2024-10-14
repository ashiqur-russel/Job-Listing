import { createStore } from "vuex";

export default createStore({
  modules: {
    auth: {
      namespaced: true,
      state() {
        return {
          name: "hello",
        };
      },
      mutations: {},
      actions: {},
      getters: {},
    },
  },
});
