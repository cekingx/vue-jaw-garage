import router from "../../router";
import axios from "axios";

const state = {
  user: {
    token: localStorage.getItem("token") || null,
    isEmailVerified: null,
    name: localStorage.getItem("name") || "User"
  }
};

const getters = {
  getToken: state => state.user.token,
  getUserAuthStatus: state => state.user.isAuthenticated,
  getUserName: state => state.user.name,
  getIsEmailVerified: state => state.user.isEmailVerified
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
        let token = response.data.success.token;
        let name = response.data.success.name;
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        axios.defaults.headers.common["Authorization"] = token;

        context.commit("TOKEN", token);
        context.commit("NAME", name);
        context.commit("VERIFIED", response.data.success.isEmailVerified);
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
        let token = response.data.success.token;
        let name = response.data.success.name;
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        axios.defaults.headers.common["Authorization"] = token;

        context.commit("TOKEN", token);
        context.commit("NAME", name);
        context.commit("VERIFIED", response.data.success.isEmailVerified);
        router.push("/");
      })
      .catch(error => {
        alert(error);
      });
  },
  logout: context => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    delete axios.defaults.headers.common["Authorization"];

    context.commit("VERIFIED", false);
    router.go("/");
  }
};

const mutations = {
  NAME: (state, data) => {
    state.user.name = data;
  },
  VERIFIED: (state, data) => {
    state.user.isEmailVerified = data;
  },
  TOKEN: (state, data) => {
    state.user.token = data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

// TODO: State
