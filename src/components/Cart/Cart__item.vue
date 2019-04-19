<template>
  <tr>
    <td class="product-thumbnail">
      <img :src="image" alt="Image" class="img-fluid">
    </td>
    <td class="product-name">
      <h2 class="h5 text-black">{{product}}</h2>
    </td>
    <td>
      <strong class="text-black">${{price}}</strong>
    </td>
    <td>
      <div class="input-group mb-3" style="max-width: 120px;">
        <div class="input-group-prepend">
          <button class="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
        </div>
        <input
          type="text"
          class="form-control text-center"
          :value="quantity"
          placeholder
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        >
        <div class="input-group-append">
          <button class="btn btn-outline-primary js-btn-plus" type="button">&plus;</button>
        </div>
      </div>
    </td>
    <td>
      <strong class="text-black">${{price*quantity}}</strong>
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
    quantity: Number,
    remove: Function
  }
};
</script>
