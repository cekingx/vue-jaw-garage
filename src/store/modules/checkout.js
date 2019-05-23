const state = {
  address: {
    provinceValue: null,
    provinceOptions: [],
    cityValue: null,
    cityOptions: []
  }
};
const getters = {};
const actions = {
  updateProvinceValueAction({ commit }, value) {
    commit("updateProvinceValue", value);
  },
  updateCityValueAction({ commit }, value) {
    commit("updateCityValue", value);
  },
  setProvinceOptionsAction({ commit }, value) {
    commit("setProvinceOptions", value);
  },
  setCityOptionsAction({ commit }, value) {
    commit("setCityOptions", value);
  }
};
const mutations = {
  updateProvinceValue(state, value) {
    state.address.provinceValue = value;
  },
  updateCityValue(state, value) {
    state.address.cityValue = value;
  },
  setProvinceOptions(state, value) {
    state.address.provinceOptions = value;
  },
  setCityOptions(state, value) {
    state.address.cityOptions = value;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
