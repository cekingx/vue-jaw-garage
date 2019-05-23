<template>
  <div class="col-md-6 mb-5 mb-md-0">
    <h2 class="h3 mb-3 text-black">Billing Details</h2>
    <div class="p-3 p-lg-5 border">
      <div class="form-group row">
        <div class="col-md-6">
          <label for="c_fname" class="text-black">
            First Name
            <span class="text-danger">*</span>
          </label>
          <input type="text" class="form-control" id="c_fname" name="c_fname">
        </div>
        <div class="col-md-6">
          <label for="c_lname" class="text-black">
            Last Name
            <span class="text-danger">*</span>
          </label>
          <input type="text" class="form-control" id="c_lname" name="c_lname">
        </div>
      </div>

      <div class="form-group row">
        <div class="col-md-12">
          <label for="c_companyname" class="text-black">Company Name</label>
          <input type="text" class="form-control" id="c_companyname" name="c_companyname">
        </div>
      </div>

      <div class="form-group row">
        <div class="col-md-6">
          <label for="c_email_address" class="text-black">
            Email Address
            <span class="text-danger">*</span>
          </label>
          <input type="text" class="form-control" id="c_email_address" name="c_email_address">
        </div>
        <div class="col-md-6">
          <label for="c_phone" class="text-black">
            Phone
            <span class="text-danger">*</span>
          </label>
          <input type="text" class="form-control" id="c_phone" name="c_phone">
        </div>
      </div>

      <div class="form-group row">
        <div class="col-md-12">
          <label for="c_address" class="text-black">
            Address
            <span class="text-danger">*</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="c_address"
            name="c_address"
            placeholder="Street address"
          >
        </div>
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Apartment, suite, unit etc. (optional)"
        >
      </div>

      <div class="form-group row">
        <div class="col-md-12">
          <label class="text-black">
            Province
            <span class="text-danger">*</span>
          </label>
          <multiselect
            deselect-label="Can't remove this value"
            :track-by="'province_id'"
            :label="'province'"
            placeholder="Select one"
            :value="provinceValue"
            :options="provinceOptions"
            :searchable="false"
            :allow-empty="false"
            @input="updateProvinceValueAction"
          >
            <template slot="singleLabel" slot-scope="{ option }">
              <strong>{{ option.province }}</strong>
            </template>
          </multiselect>
        </div>
      </div>

      <div class="form-group row">
        <div class="col-md-12">
          <label class="text-black">
            City
            <span class="text-danger">*</span>
          </label>
          <multiselect
            deselect-label="Can't remove this value"
            :track-by="'city_id'"
            :label="'city_name'"
            placeholder="Select one"
            :value="cityValue"
            :options="cityOptions"
            :searchable="false"
            :allow-empty="false"
            @input="updateCityValueAction"
          >
            <template slot="singleLabel" slot-scope="{ option }">
              <strong>{{ option.city_name }}</strong>
            </template>
          </multiselect>
        </div>
      </div>

      <div class="form-group">
        <label for="c_order_notes" class="text-black">Order Notes</label>
        <textarea
          name="c_order_notes"
          id="c_order_notes"
          cols="30"
          rows="5"
          class="form-control"
          placeholder="Write your notes here..."
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import Axios from "axios";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "CheckoutBilling",
  components: {
    Multiselect
  },
  computed: {
    ...mapState({
      // provinceValueName: state => state.checkout.provinceValue.province,
      // provinceValueID: state => state.checkout.provinceValue.province_id,
      provinceValue: state => state.checkout.address.provinceValue,
      provinceOptions: state => state.checkout.address.provinceOptions,
      cityValue: state => state.checkout.address.cityValue,
      cityOptions: state => state.checkout.address.cityOptions
    })
  },
  watch: {
    provinceValue: function(value) {
      Axios.post("http://127.0.0.1:8000/api/get-city", {
        province_id: this.provinceValue.province_id
      })
        .then(response => {
          console.log(response);
          this.setCityOptionsAction(response.data.rajaongkir.results);
        })
        .catch(error => {
          alert("error from set city" + error);
        });
    }
  },
  methods: {
    ...mapActions([
      "updateProvinceValueAction",
      "setProvinceOptionsAction",
      "updateCityValueAction",
      "setCityOptionsAction"
    ]),
    logg: value => {
      console.log(value);
    }
  },
  created() {
    Axios.get("http://127.0.0.1:8000/api/get-province")
      .then(response => {
        console.log(response);
        this.setProvinceOptionsAction(response.data.rajaongkir.results);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
</style>
