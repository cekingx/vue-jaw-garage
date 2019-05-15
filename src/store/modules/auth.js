const state = {
  user: {
    isAuthenticated: true
  }
};
const getters = {
  getUserAuthStatus: state => state.user.isAuthenticated
};
const actions = {
  login: context => context.commit("LOGIN"),
  logout: context => context.commit("LOGOUT")
};

const mutations = {
  LOGIN: state => {
    state.user.isAuthenticated = true;
  },
  LOGOUT: state => {
    state.user.isAuthenticated = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

// TODO: State
