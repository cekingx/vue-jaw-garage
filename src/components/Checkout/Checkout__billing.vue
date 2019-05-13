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
        <div class="col-md-6">
          <label for="c_state_country" class="text-black">
            State / Country
            <span class="text-danger">*</span>
          </label>
          <input type="text" class="form-control" id="c_state_country" name="c_state_country">
        </div>
        <div class="col-md-6">
          <label for="c_postal_zip" class="text-black">
            Posta / Zip
            <span class="text-danger">*</span>
          </label>
          <input type="text" class="form-control" id="c_postal_zip" name="c_postal_zip">
        </div>
      </div>

      <div class="form-group row mb-5">
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
          <input
            type="text"
            class="form-control"
            id="c_phone"
            name="c_phone"
            placeholder="Phone Number"
          >
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
export default {
  name: "Checkout Billing"
};
</script>

<style>
</style>
