<template>
  <Loading :active="isLoading"></Loading>
  <ToastMessages />
  <DeleteModal @delete-item="removeCartItem"></DeleteModal>
  <FrontNavbar />
  <StepsBar class="my-4" :title="stepsTitle" v-if="cart && cart.carts && cart.carts.length > 0">
  </StepsBar>
  <!-- Shopping Cart List -->
  <div class="container">
    <div class="row" style="min-height: 75vh">
      <div class="col" v-if="cart && cart.carts && cart.carts.length > 0">
        <div class="table-responsive border rounded mb-3 n-sbar">
          <table class="table align-middle text-center mb-0">
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Color</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id">
                  <td>
                    <img :src="`${item.product.imageUrl}`" class="rounded" alt="..."
                         style="max-width: 5rem;">
                  </td>
                  <td>{{ item.product.title }}</td>
                  <td>{{ item.product.unit }}</td>
                  <td>${{ $filters.currency(item.product.price) }}</td>
                  <td>
                    <label for="buyqant" class="d-inline-flex">
                      <button class="btn"
                              type="button"
                              @click="updateQuantity('minus', item)"
                              :disabled="item.id === status.loadingItem"
                              >
                        <i class="bi bi-dash-circle-fill link-primary fs-4"></i>
                      </button>
                      <input class="q-input"
                             type="number"
                             name="buyqant"
                             id="buyqant"
                             value="0"
                             min="1"
                             v-model.number="item.qty"
                             :disabled="item.id === status.loadingItem"
                             >
                      <button class="btn"
                              type="button"
                              @click="updateQuantity('plus', item)"
                              :disabled="item.id === status.loadingItem"
                              >
                        <i class="bi bi-plus-circle-fill link-primary fs-4"></i>
                      </button>
                    </label>
                    <br/>
                    <span class="text-danger" v-if="item.qty === item.product.is_enabled">
                      maximum
                    </span>
                  </td>
                  <td>${{ $filters.currency(item.product.price * item.qty) }}</td>
                  <td>
                    <button type="button" class="btn"
                            :disabled="status.loadingItem === item.id"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteModal"
                            @click="this.delItemId = item.id"
                            >
                      <i class="bi bi-trash link-danger fs-5"></i>
                    </button>
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot class="border-white">
              <tr>
                <th colspan="4">
                  <input type="text"
                         class="form-control"
                         aria-label="text"
                         v-model="coupon_code"
                         placeholder="Please enter coupon code"
                         >
                </th>
                <td colspan="1">
                  <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                    Apply
                  </button>
                </td>
                <td :class="{ 'text-decoration-line-through': cart.total !== cart.final_total }">
                  Total: ${{ $filters.currency(cart.total) }}
                </td>
                <td class="fw-bold text-primary" v-if="cart.total !== cart.final_total">
                  Discount: ${{ $filters.currency(cart.final_total) }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <!-- Proceed Buttons -->
        <div class="d-flex justify-content-around mb-3">
          <router-link to="/products">
            <button class="btn btn-secondary" type="button">Back to Shopping</button>
          </router-link>
          <router-link to="/order">
            <button class="btn btn-primary text-white" type="button">Next Step</button>
          </router-link>
        </div>
      </div>
      <!-- Show When Shopping Cart Empty -->
      <div class="col text-center" v-else>
        <img class="img-fluid" src="~@/assets/img/empty-cart.png" alt="empty cart">
        <p class="fs-5 mb-1">Your shopping cart is empty</p>
        <p class="fs-5">Let's fill it up</p>
        <router-link to="/products" role="button"
                     class="btn btn-primary btn-lg text-white mb-5">
                     Go shopping now
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
import ToastMessages from '@/components/ToastMessages.vue';
import DeleteModal from '@/components/DeleteModal.vue';

export default {
  components: {
    FrontNavbar,
    FrontFooter,
    StepsBar,
    ToastMessages,
    DeleteModal,
  },
  data() {
    return {
      stepsTitle: 'Cart',
      status: {
        loadingItem: '',
      },
      isLoading: false,
      cart: {},
      delItemId: '',
    };
  },
  methods: {
    // 取得購物車資訊
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.cart = res.data.data;
          this.isLoading = false;
        })
        .catch((err) => {
          this.$emitter.emit('push-message', {
            style: 'danger',
            title: 'Something went wrong, please try again.',
          });
        });
    },
    // 新增該品項數量
    updateQuantity(action, item) {
      this.status.loadingItem = item.id;
      const matchItems = this.cart.carts.filter((order) => order.id === item.id);
      matchItems.forEach((product) => {
        if (action === 'plus' && product.qty < product.product.is_enabled) {
          product.qty += 1;
          this.updateCart(item);
        } else if (action === 'minus' && product.qty > 1) {
          product.qty -= 1;
          this.updateCart(item);
        } else {
          this.status.loadingItem = '';
        }
      });
    },
    // 更新購物車資訊
    updateCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.$http.put(url, { data: cart })
        .then((res) => {
          this.status.loadingItem = '';
          this.getCart();
        })
        .catch((err) => {
          this.$emitter.emit('push-message', {
            style: 'danger',
            title: 'Something went wrong, please try again.',
          });
        });
    },
    // 刪除該購物車品項
    removeCartItem() {
      this.status.loadingItem = this.delItemId;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${this.delItemId}`;
      this.$http.delete(url)
        .then((res) => {
          this.getCart();
          this.updateCartNum();
          this.$emitter.emit('push-message', {
            style: 'primary',
            title: 'The item has been removed.',
          });
        })
        .catch((err) => {
          this.$emitter.emit('push-message', {
            style: 'danger',
            title: 'Something went wrong, please try again.',
          });
        });
    },
    // 更新購物車數量(Navbar Icon)
    updateCartNum() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url)
        .then((res) => {
          const newCartNum = res.data.data.carts;
          this.$emitter.emit('update-cart', newCartNum);
        })
        .catch((err) => {
          this.$emitter.emit('push-message', {
            style: 'danger',
            title: 'Something went wrong, please try again.',
          });
        });
    },
    // 套用優惠碼
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(url, { data: coupon })
        .then((res) => {
          if (res.data.success) {
            this.getCart();
            this.$emitter.emit('push-message', {
              style: 'primary',
              title: 'The coupon has applied.',
            });
          } else {
            this.$emitter.emit('push-message', {
              style: 'danger',
              title: 'The coupon is wrong or expired.',
            });
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
    this.getCart();
  },
};
</script>
