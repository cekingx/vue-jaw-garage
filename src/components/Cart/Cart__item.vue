<template>
  <tr>
    <td class="product-thumbnail">
      <img :src="image" alt="Image" class="img-fluid">
    </td>
    <td class="product-name">
      <h2 class="h5 text-black">{{product}}</h2>
    </td>
    <td>
      <strong class="text-black">{{price | currency}}</strong>
    </td>
    <td>
      <div class="input-group mb-3" style="max-width: 120px;">
        <div class="input-group-prepend">
          <button class="btn btn-outline-primary js-btn-minus" type="button" @click="minus">&minus;</button>
        </div>
        <input
          type="text"
          class="form-control text-center"
          :value="quantity"
          readonly
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        >
        <div class="input-group-append">
          <button class="btn btn-outline-primary js-btn-plus" type="button" @click="plus">&plus;</button>
        </div>
      </div>
    </td>
    <td>
      <strong class="text-black">{{price*quantity | currency}}</strong>
    </td>
    <td>
      <a href="#" @click="remove" class="btn btn-primary btn-sm">X</a>
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CartItem",
  props: {
    image: String,
    product: String,
    price: Number,
    minus: Function,
    quantity: Number,
    plus: Function,
    remove: Function
  }
};
</script>
