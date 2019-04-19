<template>
  <div
    class="site-blocks-cover"
    :style="{backgroundImage: 'url('+ require('./../../assets/image/jumbotron.jpg') +')'}"
    data-aos="fade"
  >
    <div class="container">
      <div class="row align-items-start align-items-md-center justify-content-end">
        <div class="col-md-5 text-center text-md-left pt-5 pt-md-0">
          <h1 class="mb-4">Finding Your Perfect Bike and Sparepart</h1>
          <div class="intro-text text-center text-md-left">
            <p>
              <a href="#" class="btn btn-sm btn-primary">Shop Now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeJumbotron"
};
</script>
