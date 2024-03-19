<template>
  <div class="toast bg-white" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
    <div class="d-flex">
      <div class="toast-body">
        <i class="me-2 fs-5"
          :class="`text-${msg.style}
                   bi ${msg.style === 'danger' ? 'bi-x-circle' : 'bi-check-circle'}`"
                   >
        </i>
        <strong class="me-auto" :class="`text-${msg.style}`">{{ msg.title }}</strong>
      </div>
      <button class="btn-close me-2 m-auto"
              type="button"
              data-bs-dismiss="toast"
              arial-label="Close"
              ></button>
    </div>
  </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast';

export default {
  name: 'Toast',
  // 接收ToastMessage的訊息
  props: ['msg'],
  mounted() {
    const toastEl = this.$refs.toast;
    const toast = new Toast(toastEl, { delay: 6000 });
    toast.show();
  },
};
</script>
