<template>
  <div class="site-section">
    <div class="container">
      <div class="row">
        <billing-details/>

        <div class="col-md-6">
          <div class="row mb-5">
            <div class="col-md-12">
              <h2 class="h3 mb-3 text-black">Your Order</h2>
              <div class="p-3 p-lg-5 border">
                <product-checkout/>
                <package-courier/>
                <table class="table site-block-order-table mb-5">
                  <tbody>
                    <tr>
                      <td class="text-black font-weight-bold">
                        <strong>Order Total</strong>
                      </td>
                      <td class="text-black font-weight-bold">
                        <strong>$350.00</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="form-group">
                  <button class="btn btn-primary btn-lg py-3 btn-block">Place Order</button>
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
import CheckoutBilling from "./Checkout__billing";
import CheckoutProduct from "./Checkout__product";
import CheckoutCourier from "./Checkout__courier";

export default {
  name: "Checkout",
  components: {
    "billing-details": CheckoutBilling,
    "product-checkout": CheckoutProduct,
    "package-courier": CheckoutCourier
  }
};
</script>

