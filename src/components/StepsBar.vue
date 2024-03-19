<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 offset-lg-2 col-10 offset-1">
        <div class="position-relative">
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-column w-25 align-items-center">
              <i class="fs-2 text-primary bg-white"
                 :class="`${steps.firstStep}`"></i>
              <span>Cart</span>
            </div>
            <div class="d-flex flex-column w-25 align-items-center">
              <i class="fs-2 bg-white"
                 :class="`${steps.secondStep}`"></i>
              <span>Order</span>
            </div>
            <div class="d-flex flex-column w-25 align-items-center">
              <i class="fs-2 bg-white"
                 :class="`${steps.thirdStep}`"></i>
              <span>Checkout</span>
            </div>
          </div>
          <div class="progress position-absolute translate-middle w-75"
               style="z-index: -1; height: 0.125rem; top: 33%; left: 50%;">
          <div class="progress-bar"
               role="progressbar"
               :style="{ width: progressWidth }"
               aria-valuenow="0"
               aria-valuemin="0"
               aria-valuemax="100"
               ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 接收父層傳來的標題
  props: ['title'],
  data() {
    return {
      steps: {
        firstStep: '',
        secondStep: '',
        thirdStep: '',
      },
    };
  },
  methods: {
    // 呈現與父層標題相應的步驟
    barStatus() {
      switch (this.title) {
        case 'Cart':
          this.steps.firstStep = 'bi bi-1-circle text-primary';
          this.steps.secondStep = 'bi bi-2-circle text-black-50';
          this.steps.thirdStep = 'bi bi-3-circle text-black-50';
          this.progressWidth = '0%';
          break;
        case 'Order':
          this.steps.firstStep = 'bi bi-check-circle-fill text-primary';
          this.steps.secondStep = 'bi bi-2-circle text-primary';
          this.steps.thirdStep = 'bi bi-3-circle text-black-50';
          this.progressWidth = '50%';
          break;
        case 'Checkout':
          this.steps.firstStep = 'bi bi-check-circle-fill text-primary';
          this.steps.secondStep = 'bi bi-check-circle-fill text-primary';
          this.steps.thirdStep = 'bi bi-3-circle text-primary';
          this.progressWidth = '100%';
          break;
        default:
          // Handle default case if needed
          break;
      }
    },
  },
  created() {
    this.barStatus();
  },
};
</script>
