<template>
  <nav class="site-navigation text-right text-md-center" role="navigation">
    <div class="container">
      <ul class="site-menu js-clone-nav d-none d-md-block">
        <li>
          <router-link to="/home">Home</router-link>
        </li>
        <li>
          <router-link to="/product">Product</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderNavigation"
};
</script>

