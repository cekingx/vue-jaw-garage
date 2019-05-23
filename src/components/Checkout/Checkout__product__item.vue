<template>
  <tr>
    <td>
      {{name}}
      <strong class="mx-2">x</strong>
      {{quantity}}
    </td>
    <td align="right">{{price * quantity | currency}}</td>
  </tr>
</template>

<script>
export default {
  name: "CheckoutProductItem",
  props: {
    name: String,
    quantity: Number,
    price: Number
  }
};
</script>

<style>
</style>
