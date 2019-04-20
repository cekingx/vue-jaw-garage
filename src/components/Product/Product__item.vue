<template>
  <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
    <div class="block-4 text-center border">
      <figure class="block-4-image">
        <img
          :src="image"
          alt="Image placeholder"
          class="img-fluid"
          @click="addToCart"
          style="cursor: pointer;"
        >
      </figure>
      <div class="block-4-text p-4">
        <h3 @click="addToCart" style="cursor: pointer;">{{product}}</h3>
        <p class="mb-0">{{desc}}</p>
        <p class="text-primary font-weight-bold">{{price | currency}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    image: String,
    product: String,
    price: Number,
    desc: String,
    addToCart: Function
  }
};
</script>

<style>
</style>
