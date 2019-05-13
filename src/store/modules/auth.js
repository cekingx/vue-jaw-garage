const state = {
  user: {
    isAuthenticated: true
  }
};
const getters = {
  getUserAuthStatus: state => state.user.isAuthenticated
};
const actions = {};
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};

// TODO: State
