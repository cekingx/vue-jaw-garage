<template>
  <div>
    <div class="row mx-0">
      <div class="btn-group col-12 px-0" role="group" aria-label="Basic example">
        <button
          type="button"
          class="btn btn-primary col-4"
          @click="() => setProvider(jne.provider, jne.tarif)"
        >JNE</button>
        <button
          type="button"
          class="btn btn-primary col-4"
          @click="() => setProvider(jdt.provider, jdt.tarif)"
        >TIKI</button>
        <button
          type="button"
          class="btn btn-primary col-4"
          @click="() => setProvider(pos.provider, pos.tarif)"
        >POS</button>
      </div>
      <table class="table site-block-order-table" v-if="provider != null">
        <thead>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td>{{provider}}</td>
            <td align="right">{{tarif | currency}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Courier",
  data() {
    return {
      provider: null,
      tarif: null,
      jne: {
        provider: "JNE",
        tarif: 30000
      },
      jdt: {
        provider: "j&T",
        tarif: 29000
      },
      pos: {
        provider: "POS",
        tarif: 30000
      }
    };
  },
  methods: {
    setProvider(provider, tarif) {
      (this.provider = provider), (this.tarif = tarif);
    }
  }
};
</script>

<style>
</style>
