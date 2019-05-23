<template>
  <table class="table site-block-order-table mb-5">
    <thead>
      <th>Product</th>
      <th>Total</th>
    </thead>
    <tbody>
      <checkout-product-item
        v-for="(product, index) in products"
        :key="index"
        :name="product.product"
        :price="product.price"
        :quantity="product.quantity"
      />
      <tr>
        <td class="text-black font-weight-bold">
          <strong>Cart Subtotal</strong>
        </td>
        <td align="right" class="text-black">{{ cartSubTotal | currency }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import CheckoutProductItem from "./Checkout__product__item";
import { mapGetters } from "vuex";

export default {
  name: "ProductCheckout",
  components: {
    "checkout-product-item": CheckoutProductItem
  },
  computed: {
    ...mapGetters({
      products: "getCartItems"
    }),
    cartSubTotal() {
      return this.products.reduce((total, product) => {
        return total + product.quantity * product.price;
      }, 0);
    }
  }
};
</script>

<style>
</style>
