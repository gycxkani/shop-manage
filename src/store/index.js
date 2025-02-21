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
  mutations: {
    clearUserInfo(state) {
      state.userName = "";
      state.userPassword = "";
    },
    registUserInfo(state, { name, password }) {
      state.userName = name;
      state.userPassword = password;
    },
  },
  actions: {},
  modules: {},
});

export default store;
