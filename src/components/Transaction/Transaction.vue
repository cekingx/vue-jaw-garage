<template>
  <div class="site-section">
    <div class="container">
      <div class="row mb-5">
        <form class="col-md-12" method="post">
          <div class="site-blocks-table">
            <table class="table table-bordered">
              <thead>
                <th>Timeout</th>
                <th>Address</th>
                <th>Total</th>
                <th>Status</th>
                <th>Remove</th>
              </thead>
              <tbody>
                <tr>
                  <td>-</td>
                  <td>Sidan Kelod, Gianyar, Bali</td>
                  <td>{{ 50000 | currency }}</td>
                  <td>Success</td>
                  <td>
                    <a href class="btn btn-info btn-sm">X</a>
                  </td>
                </tr>
                <!-- <tr>
                  <td>
                    <count-down :time="2 * 24 * 60 * 60 * 1000">
                      <template
                        slot-scope="props"
                      >Time Remaining：{{ props.days }} days, {{ props.hours }} hours, {{ props.minutes }} minutes, {{ props.seconds }} seconds.</template>
                    </count-down>
                  </td>
                  <td>Bukit Jimbaran, Badung, Bali</td>
                  <td>{{100000 | currency}}</td>
                  <td>Unverified</td>
                  <td @click="batal">
                    <a href class="btn btn-danger btn-sm">X</a>
                  </td>
                </tr>-->
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VueCountdown from "@chenfengyuan/vue-countdown";
import TransactionItem from "./Transaction__item";

export default {
  name: "Transaction",
  components: {
    "transaction-item": TransactionItem,
    "count-down": VueCountdown
  },
  data() {
    return {
      waktu: Date(25 - 5 - 2019)
    };
  },
  methods: {
    batal() {
      alert("Transaksi yang dibatalkan tidak bisa diubah lagi");
    }
  }
};
</script>

<style>
</style>
