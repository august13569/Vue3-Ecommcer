<template>
  <div class="toast-container fixed-top start-50 translate-middle-x"
       style="z-index: 1050; top: 10%;"
       >
    <ToastFrame v-for="(msg, key) in messages" :key="key" :msg="msg"></ToastFrame>
  </div>
</template>

<script>
import ToastFrame from '@/components/ToastFrame.vue';

export default {
  components: { ToastFrame },
  data() {
    return {
      messages: [],
    };
  },
  // 接收來自外層的訊息
  mounted() {
    this.$emitter.on('push-message', (message) => {
      const { style = 'primary', title } = message;
      this.messages.push({ style, title });
    });
  },
};
</script>
