<template>
  <tr>
    <td>{{ timeout }}</td>
    <td>{{ alamat }}</td>
    <td>{{ total | currency }}</td>
    <td>{{ status }}</td>
    <td>X</td>
  </tr>
</template>

<script>
export default {
  name: "TransactionItem",
  props: {
    timeout: String,
    alamat: String,
    total: Number,
    status: String
  }
};
</script>

<style>
</style>
