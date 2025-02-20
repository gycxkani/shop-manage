import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      userName: "",
      userPassword: "",
    };
  },
  getters: {
    isLogin: (state) => {
      return state.userName.length > 0;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});

export default store;
