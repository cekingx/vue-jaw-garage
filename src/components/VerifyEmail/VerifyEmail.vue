<template>
  <div class="site-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <span class="icon-check_circle display-3 text-success"></span>
          <h2 class="display-3 text-black">Email Not Verified</h2>
          <p class="lead mb-5">Please verify your email first</p>
          <p>
            <router-link to="/" class="btn btn-sm btn-primary">Home</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerifyYourEmail"
};
</script>

<style>
</style>
