<template>
<FrontNavbar />
<!-- Banner -->
<header class="header-3 d-flex align-items-center justify-content-center mb-5">
  <div class="text-white text-center w-100"
         style="background-image: radial-gradient(circle, rgba(0, 0, 0, 0.5) 0%,
                                rgba(0, 0, 0, 0) 100%);">
      <h2 class="display-1">FAQ</h2>
    </div>
</header>
<!-- FAQ Section -->
<section class="container mb-5">
  <!-- Purchase Problems -->
  <h3 class="text-primary mb-3">Purchase Problems</h3>
  <div class="accordion mb-3" id="purchaseAccordion">
    <div class="accordion-item">
      <h3 class="accordion-header" id="purchaseHeadingOne">
        <button class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#purchaseCollapseOne"
                aria-expanded="false"
                aria-controls="purchaseCollapseOne"
                >
          <i class="bi bi-question-circle px-2"></i>
          How can I purchase lighting fixtures on your website?
        </button>
      </h3>
      <div id="purchaseCollapseOne"
           class="accordion-collapse collapse"
           aria-labelledby="purchaseHeadingOne"
           data-bs-parent="#purchaseAccordion"
           >
        <div class="accordion-body">
          You can browse products on our website, select the lighting fixtures you like,
          add them to your cart, and then follow the checkout process to complete your order.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-header" id="purchaseHeadingTwo">
        <button class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#purchaseCollapseTwo"
                aria-expanded="false"
                aria-controls="purchaseCollapseTwo"
                >
        <i class="bi bi-question-circle px-2"></i>
        Do you offer wholesale or group purchase discounts?
        </button>
      </h3>
      <div id="purchaseCollapseTwo"
           class="accordion-collapse collapse"
           aria-labelledby="purchaseHeadingTwo"
           data-bs-parent="#purchaseAccordion"
           >
        <div class="accordion-body">
          Yes, we provide wholesale and group purchase discounts.
          Please contact our customer service for more information and custom quotes.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-header" id="purchaseHeadingThree">
        <button class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#purchaseCollapseTree"
                aria-expanded="false"
                aria-controls="purchaseCollapseTree"
                >
        <i class="bi bi-question-circle px-2"></i>
        Can I cancel an already placed order
        </button>
      </h3>
      <div id="purchaseCollapseTree"
           class="accordion-collapse collapse"
           aria-labelledby="purchaseHeadingThree"
           data-bs-parent="#purchaseAccordion"
           >
        <div class="accordion-body">
          If your order has not been shipped yet,
          you can contact our customer service to cancel the order.
          Orders that have already been shipped cannot be canceled.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-header" id="purchaseHeadingFour">
        <button class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#purchaseCollapseFour"
                aria-expanded="false"
                aria-controls="purchaseCollapseFour"
                >
        <i class="bi bi-question-circle px-2"></i>
        Do you offer the option for online custom orders?
        </button>
      </h3>
      <div id="purchaseCollapseFour"
           class="accordion-collapse collapse"
           aria-labelledby="purchaseHeadingFour"
           data-bs-parent="#purchaseAccordion"
           >
        <div class="accordion-body">
          Yes, we offer the option for custom orders.
          If you have specific requirements or size preferences,
          please contact our customer service,
          and we will assist you in creating a customized lighting fixture order.
        </div>
      </div>
    </div>
  </div>
  <!-- Return Policies -->
  <h3 class="text-primary mb-3">Return Policies</h3>
  <div class="accordion mb-3" id="ReturnAccordion">
    <div class="accordion-item">
      <h3 class="accordion-header" id="returnHeadingOne">
        <button class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#returnCollopsOne"
                aria-expanded="false"
                aria-controls="returnCollopsOne"
                >
          <i class="bi bi-question-circle px-2"></i>
          How can I request a return?
        </button>
      </h3>
      <div id="returnCollopsOne"
           class="accordion-collapse collapse"
           aria-labelledby="returnHeadingOne"
           data-bs-parent="#ReturnAccordion"
      >
        <div class="accordion-body">
          If you need to return a product,
          please contact our customer service within 14 days of receiving the item,
          providing the order number and reason.
          We will assist you in handling the return.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-header" id="returnHeadingTwo">
        <button class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#returnCollapseTwo"
                aria-expanded="false"
                aria-controls="returnCollapseTwo"
        >
          <i class="bi bi-question-circle px-2"></i>
          Is there a refund for returns?
        </button>
      </h3>
      <div id="returnCollapseTwo"
           class="accordion-collapse collapse"
           aria-labelledby="returnHeadingTwo"
           data-bs-parent="#ReturnAccordion"
      >
        <div class="accordion-body">
          Yes,
          once we receive the returned item and confirm its condition meets the return criteria,
          we will process a refund. The refund amount will deduct any shipping fees.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-header" id="returnHeadingTree">
        <button class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#returnCollapseThree"
                aria-expanded="false"
                aria-controls="returnCollapseThree"
        >
          <i class="bi bi-question-circle px-2"></i>
          Who bears the return shipping costs?
        </button>
      </h3>
      <div id="returnCollapseThree"
           class="accordion-collapse collapse"
           aria-labelledby="returnHeadingTree"
           data-bs-parent="#ReturnAccordion"
      >
        <div class="accordion-body">
          If it is due to our mistake or a defective product,
          we will cover the return shipping costs.
          In other cases, the customer is responsible for the return shipping fees.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-header" id="returnHeadingFour">
        <button class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#returnCollapseFour"
                aria-expanded="false"
                aria-controls="returnCollapseFour"
        >
          <i class="bi bi-question-circle px-2"></i>
          Do you accept returns for partial items?
        </button>
      </h3>
      <div id="returnCollapseFour"
           class="accordion-collapse collapse"
           aria-labelledby="returnHeadingFour"
           data-bs-parent="#ReturnAccordion"
      >
        <div class="accordion-body">
          Yes, we accept returns for partial items.
          Please specify the items you wish to return in the return request.
        </div>
      </div>
    </div>
  </div>
  <!-- Shippin Service -->
  <h3 class="text-primary mb-3">Shippin Service</h3>
  <div class="accordion mb-3" id="shippingAccordion">
    <div class="accordion-item">
      <h3 class="accordion-header" id="shippingHeadingOne">
        <button class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#shippingCollapseOne"
                aria-expanded="false"
                aria-controls="shippingCollapseOne"
                >
          <i class="bi bi-question-circle px-2"></i>
          How are our lighting fixtures shipped?
        </button>
      </h3>
      <div id="shippingCollapseOne"
           class="accordion-collapse collapse"
           aria-labelledby="shippingHeadingOne"
           data-bs-parent="#shippingAccordion"
      >
        <div class="accordion-body">
          We use reliable logistics partners for shipping
          to ensure the safe delivery of your lighting fixtures.
          The shipping method will be provided during the checkout process.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-header" id="shippingHeadingTwo">
        <button class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#shippingCollapseTwo"
                aria-expanded="false"
                aria-controls="shippingCollapseTwo"
        >
          <i class="bi bi-question-circle px-2"></i>
          Do you offer international shipping?
        </button>
      </h3>
      <div id="shippingCollapseTwo"
           class="accordion-collapse collapse"
           aria-labelledby="shippingHeadingTwo"
           data-bs-parent="#shippingAccordion"
      >
        <div class="accordion-body">
          Yes, we offer international shipping.
          International shipping fees are determined
          based on the destination and the weight of the items.
          Please check the checkout page for detailed information.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-header" id="shippingHeadingThree">
        <button class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#shippingCollapseThree"
                aria-expanded="false"
                aria-controls="shippingCollapseThree"
        >
          <i class="bi bi-question-circle px-2"></i>
          How can I track my order?
        </button>
      </h3>
      <div id="shippingCollapseThree"
           class="accordion-collapse collapse"
           aria-labelledby="shippingHeadingThree"
           data-bs-parent="#shippingAccordion"
      >
        <div class="accordion-body">
          Once your order is shipped,
          you will receive an email with tracking information.
          You can use this information on the logistics company's website to track your order.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-header" id="shippingHeadingFour">
        <button class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#shippingCollapseFour"
                aria-expanded="false"
                aria-controls="shippingCollapseFour"
        >
          <i class="bi bi-question-circle px-2"></i>
          Do you provide express shipping options?
        </button>
      </h3>
      <div id="shippingCollapseFour"
           class="accordion-collapse collapse"
           aria-labelledby="shippingHeadingFour"
           data-bs-parent="#shippingAccordion"
      >
        <div class="accordion-body">
          Yes, we offer express shipping options to expedite the delivery time of your order.
          Refer to the checkout page for detailed shipping fees and delivery times.
        </div>
      </div>
    </div>
  </div>
  <!-- Warranty Related -->
  <h3 class="text-primary mb-3">Warranty Related</h3>
  <div class="accordion mb-3" id="warrantyAccordion">
    <div class="accordion-item">
      <h3 class="accordion-header" id="warrantyHeadingOne">
        <button class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#warrantyCollapseOne"
                aria-expanded="false"
                aria-controls="warrantyCollapseOne"
                >
          <i class="bi bi-question-circle px-2"></i>
          Do your lighting fixtures come with a warranty?
        </button>
      </h3>
      <div id="warrantyCollapseOne"
           class="accordion-collapse collapse"
           aria-labelledby="warrantyHeadingOne"
           data-bs-parent="#warrantyAccordion"
      >
        <div class="accordion-body">
          Yes, all our lighting products come with a limited warranty.
          Detailed warranty terms can be found
          on the product warranty card received after purchase or on our website.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-header" id="warrantyHeadingTwo">
        <button class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#warrantyCollapseTwo"
                aria-expanded="false"
                aria-controls="warrantyCollapseTwo"
        >
          <i class="bi bi-question-circle px-2"></i>
          How can I apply for warranty service?
        </button>
      </h3>
      <div id="warrantyCollapseTwo"
           class="accordion-collapse collapse"
           aria-labelledby="warrantyHeadingTwo"
           data-bs-parent="#warrantyAccordion"
      >
        <div class="accordion-body">
          If you experience issues with your lighting fixture,
          please contact our customer service, provide the order number, and product details.
          We will assist you in processing the warranty claim.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-header" id="warrantyHeadingThree">
        <button class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#warrantyCollapseThree"
                aria-expanded="false"
                aria-controls="warrantyCollapseThree"
        >
          <i class="bi bi-question-circle px-2"></i>
          Does the warranty cover damage caused by user error?
        </button>
      </h3>
      <div id="warrantyCollapseThree"
           class="accordion-collapse collapse"
           aria-labelledby="warrantyHeadingThree"
           data-bs-parent="#warrantyAccordion"
      >
        <div class="accordion-body">
          The warranty only covers issues caused by manufacturing defects
          and does not include damage caused by user error or improper use.
          Please refer to the warranty terms for more information.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-header" id="warrantyHeadingFour">
        <button class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#warrantyCollapseFour"
                aria-expanded="false"
                aria-controls="warrantyCollapseFour"
        >
          <i class="bi bi-question-circle px-2"></i>
          What is the duration of the warranty period?
        </button>
      </h3>
      <div id="warrantyCollapseFour"
           class="accordion-collapse collapse"
           aria-labelledby="warrantyHeadingFour"
           data-bs-parent="#warrantyAccordion"
      >
        <div class="accordion-body">
          The duration of the warranty period varies by product.
          Please refer to the warranty card for your purchased lighting fixture
          or visit our website for details.
        </div>
      </div>
    </div>
  </div>
</section>
  <FrontFooter />
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue';
import FrontFooter from '@/components/FrontFooter.vue';

export default {
  components: {
    FrontNavbar,
    FrontFooter,
  },
};
</script>
