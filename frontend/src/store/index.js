import {createStore} from 'vuex';

const store = createStore({
  state: {
    user_info: {},
    login: false,
  },
  getters: {

  },
  mutations: {
    setUserInfo(state, payload) {
      state.user_info = payload;
    }
  },
  actions: {

  }
});

export default store;