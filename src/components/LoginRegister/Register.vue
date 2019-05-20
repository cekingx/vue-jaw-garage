<template>
  <form class="form-signin">
    <div class="text-center mb-4">
      <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
    </div>

    <div class="form-label-group">
      <input
        type="text"
        id="inputNama"
        class="form-control"
        placeholder="Name"
        required
        autofocus
        v-model="name"
      >
      <label for="inputNama">Name</label>
    </div>

    <div class="form-label-group">
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        v-model="email"
      >
      <label for="inputEmail">Email address</label>
    </div>

    <div class="form-label-group">
      <input
        type="text"
        id="inputStatus"
        class="form-control"
        placeholder="Status"
        required
        v-model="status"
      >
      <label for="inputStatus">Status</label>
    </div>

    <div class="form-label-group">
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
        v-model="password"
      >
      <label for="inputPassword">Password</label>
    </div>

    <div class="form-label-group">
      <input
        type="password"
        id="confirmInputPassword"
        class="form-control"
        placeholder="Confirm Password"
        required
        v-model="c_password"
      >
      <label for="confirmInputPassword">Confirm Password</label>
    </div>

    <button class="btn btn-lg btn-danger btn-block" type="submit" @click="sendRequest">Sign Up</button>

    <div class="text-center mt-2">
      <p>or</p>
    </div>

    <router-link to="/login" class="btn btn-lg btn btn-outline-primary btn-block">Sign In</router-link>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      name: "",
      email: "",
      status: "",
      password: "",
      c_password: ""
    };
  },
  methods: {
    sendRequest(e) {
      e.preventDefault();

      // let data = {
      //   name: this.name,
      //   email: this.email,
      //   status: this.status,
      //   password: this.password,
      //   c_password: this.c_password
      // };
      axios
        .post("http://127.0.0.1:8000/api/register", {
          name: this.name,
          email: this.email,
          status: this.status,
          password: this.password,
          c_password: this.c_password
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      // console.log(data);
    }
  }
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > label {
  height: 3.125rem;
  padding: 0.75rem;
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  pointer-events: none;
  cursor: text; /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: 0.25rem;
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 12px;
  color: #777;
}

/* Fallback for Edge
-------------------------------------------------- */
@supports (-ms-ime-align: auto) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
