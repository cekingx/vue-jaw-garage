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
import axios from "axios";

export default {
  name: "Product",
  created() {
    axios
      .get("http://127.0.0.1:8000/api/product")
      .then(response => {
        this.requestProduct(response.data);
      })
      .catch(error => {
        alert(error);
      });
  },
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
      addToCart: "addCartItem",
      requestProduct: "product"
    })
  }
};
</script>

<style>
</style>
