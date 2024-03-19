<template>
  <Loading :active="isLoading"></Loading>
  <FrontNavbar />
  <StepsBar class="my-4" :title="stepsTitle" v-if="!order.is_paid"></StepsBar>
  <div class="container">
    <!-- Order Info -->
    <div class="my-5 row justify-content-center" style="min-height: 75vh">
      <form class="col-md-6" @submit.prevent="payOrder" v-if="!order.is_paid">
        <table class="table align-middle text-center">
          <thead>
          <th>Product</th>
          <th>Quantity</th>
          <th>Color</th>
          <th>Price</th>
          </thead>
          <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }}</td>
            <td>{{ item.product.unit }}</td>
            <td>{{ item.final_total }}</td>
          </tr>
          </tbody>
          <tfoot>
          <tr>
            <td colspan="2"></td>
            <td class="text-primary">Total</td>
            <td class="text-primary">{{ order.total }}</td>
          </tr>
          </tfoot>
        </table>
        <table class="table">
          <tbody>
          <tr>
            <th width="100">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>Note</th>
            <td>{{ order.message }}</td>
          </tr>
          <tr>
            <th>Statement</th>
            <td>
              <span class="text-danger" v-if="!order.is_paid">Unpay</span>
              <span class="text-primary" v-else>Paied</span>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="text-end" v-if="order.is_paid === false">
          <button class="btn btn-danger" type="sumit">Confirm</button>
        </div>
      </form>
      <!-- Paied Order -->
      <div class="col text-center" v-else>
        <img class="img-fluid mb-3" src="~@/assets/img/Thank You.jpg" alt="Thank You">
        <p class="mb-0">Order Number: <span class="text-primary">{{ orderId }}</span></p>
        <span class="badge rounded-pill bg-primary px-3 py-2 mb-3">Paied</span>
        <p class="fs-5 mb-1">Thank you for your purchase</p>
        <p class="fs-5">There are more products are available for you</p>
        <router-link to="/products" role="button"
                     class="btn btn-primary btn-lg text-white mb-5">
                     Let's find out
        </router-link>
      </div>
    </div>
  </div>
  <FrontFooter />
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue';
import FrontFooter from '@/components/FrontFooter.vue';
import StepsBar from '@/components/StepsBar.vue';

export default {
  components: {
    FrontNavbar,
    FrontFooter,
    StepsBar,
  },
  data() {
    return {
      stepsTitle: 'Checkout',
      order: {
        user: {},
      },
      orderId: '',
      isLoading: false,
    };
  },
  methods: {
    // 取得訂單資訊
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order;
          }
        })
        .catch((err) => {
          this.$emitter.emit('push-message', {
            style: 'danger',
            title: 'Something went wrong, please try again.',
          });
        });
    },
    // 確認支付訂單
    payOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(url)
        .then((res) => {
          if (res.data.success) {
            this.getOrder();
          }
        })
        .catch((err) => {
          this.$emitter.emit('push-message', {
            style: 'danger',
            title: 'Something went wrong, please try again.',
          });
        });
    },
  },
  created() {
    // 從路由參數中取得訂單ID
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
