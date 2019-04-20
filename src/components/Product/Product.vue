<template>
  <div class="site-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-12">
          <div class="row mb-5">
            <product-item
              v-for="(product, index) in products"
              :key="index"
              :image="product.image"
              :product="product.product"
              :price="product.price"
              :desc="product.desc"
              :addToCart="() => addToCart(product)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./Product__item";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Product",
  components: {
    "product-item": ProductItem
  },
  computed: {
    ...mapGetters({
      products: "getProducts"
    })
  },
  methods: {
    ...mapActions({
      addToCart: "addCartItem"
    })
  }
};
</script>

<style>
</style>
