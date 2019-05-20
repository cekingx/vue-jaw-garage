import router from "../../router";
import axios from "axios";

const state = {
  user: {
    isAuthenticated: false,
    name: "User"
  }
};
const getters = {
  getUserAuthStatus: state => state.user.isAuthenticated,
  getUserName: state => state.user.name
};
const actions = {
  register: (context, user) => {
    axios
      .post("http://127.0.0.1:8000/api/register", {
        name: user.name,
        email: user.email,
        status: user.status,
        password: user.password,
        c_password: user.c_password
      })
      .then(response => {
        context.commit("REGISTER", response.data.success.name);
        router.push("/");
      })
      .catch(error => {
        alert(error);
      });
  },
  login: (context, user) => {
    axios
      .post("http://127.0.0.1:8000/api/login", {
        email: user.email,
        password: user.password
      })
      .then(response => {
        context.commit("LOGIN", response.data.success.name);
        router.push("/");
      })
      .catch(error => {
        alert(error);
      });
  },
  logout: context => context.commit("LOGOUT")
};

const mutations = {
  LOGIN: (state, name) => {
    state.user.isAuthenticated = true;
    state.user.name = name;
  },
  LOGOUT: state => {
    state.user.isAuthenticated = false;
  },
  REGISTER: (state, name) => {
    state.user.isAuthenticated = true;
    state.user.name = name;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

// TODO: State
