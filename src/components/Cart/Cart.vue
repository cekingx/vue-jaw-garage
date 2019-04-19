<template>
  <div class="site-section">
    <div class="container">
      <div class="row mb-5">
        <form class="col-md-12" method="post">
          <div class="site-blocks-table">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th class="product-thumbnail">Image</th>
                  <th class="product-name">Product</th>
                  <th class="product-price">Price</th>
                  <th class="product-quantity">Quantity</th>
                  <th class="product-total">Total</th>
                  <th class="product-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                <cart-item
                  v-for="(product, index) in products"
                  :key="product.product"
                  :image="product.image"
                  :product="product.product"
                  :price="product.price"
                  :quantity="product.quantity"
                  :total="product.total"
                  :remove="() => remove(index)"
                />
              </tbody>
            </table>
          </div>
        </form>
      </div>

      <div class="row">
        <div class="col-md-6"/>
        <div class="col-md-6 pl-5">
          <div class="row justify-content-end">
            <div class="col-md-7">
              <div class="row">
                <div class="col-md-12 text-right border-bottom mb-5">
                  <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                </div>
              </div>
              <div class="row mb-5">
                <div class="col-md-6">
                  <span class="text-black">Total</span>
                </div>
                <div class="col-md-6 text-right">
                  <strong class="text-black">${{grandTotal}}</strong>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <button
                    class="btn btn-primary btn-lg py-3 btn-block"
                    onclick="window.location='checkout.html'"
                  >Proceed To Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./Cart__item";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
  components: {
    "cart-item": CartItem
  },
  computed: {
    ...mapGetters({
      products: "getProducts"
    }),
    grandTotal() {
      return this.products.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
    }
  },
  methods: {
    ...mapActions(["removeProduct"]),
    remove(index) {
      this.removeProduct(index);
    }
  }
};
</script>
