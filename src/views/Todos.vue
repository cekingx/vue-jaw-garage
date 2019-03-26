<template>
  <div>
    <h1>Todo</h1>
    <p>{{getStatus}}</p>
    <button v-if="getStatus == false" @click="login">LOGIN</button>
    <button v-else @click="logout">LOGOUT</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  computed: mapGetters(["getStatus"]),
  methods: {
    ...mapActions(["login", "logout"])
  }
};
</script>

<style>
</style>
