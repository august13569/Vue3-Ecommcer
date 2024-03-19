<template>
  <Loading :active="isLoading"></Loading>
  <ToastMessages />
  <FrontNavbar />
  <div class="container">
    <!-- The Product Information -->
    <div class="row">
      <div class="col-md-6 mb-3">
        <img :src="product.imageUrl" :alt="`${product.title}`" class="w-100 h-100">
      </div>
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h2 class="mb-3">{{ product.title }}</h2>
        <ul>
          <li class="mb-1">Type: {{ product.category }}</li>
          <li class="mb-1">Available: {{ product.is_enabled }}</li>
          <li class="mb-1">Color: {{ product.unit }}</li>
        </ul>
        <div class="d-flex">
          <p class="text-primary fs-3 px-2">${{ $filters.currency(product.price) }}</p>
          <p class="text-secondary text-decoration-line-through fs-5 px-2 pt-md-2"
             v-if="product.price !== product.origin_price"
             >
            ${{ $filters.currency(product.origin_price) }}
          </p>
        </div>
        <span class="text-danger" v-if="this.quantity === this.product.is_enabled">
          You've reached the maximum quantity available for this item
        </span>
        <div class="mb-3">
          <label for="buyqant">Quantity:</label>
          <button class="btn" type="button" @click="updateQuantity('minus')">
            <i class="bi bi-dash-circle-fill link-primary fs-4"></i>
          </button>
          <input class="q-input"
                 type="number"
                 name="buyqant"
                 id="buyqant"
                 value="1"
                 min="1"
                 v-model.number="quantity"
                 >
          <button class="btn" type="button" @click="updateQuantity('plus')">
            <i class="bi bi-plus-circle-fill link-primary fs-4"></i>
          </button>
        </div>
        <div class="mb-5">
          <button type="button" class="btn btn-danger position-relative"
                  :disabled="this.status.loadingItem === product.id"
                  @click="addToCart(product.id)"
                  >
                  <div class="position-absolute top-50 start-50 translate-middle">
                    <div class="spinner-border spinner-border-sm text-white"
                         role="status"
                         v-if="this.status.loadingItem === product.id"
                         >
                    </div>
                  </div>
                  <span :class="{'text-danger': this.status.loadingItem === product.id}">
                    <i class="bi bi-cart-fill pe-2"></i>Add to Cart
                  </span>
                  </button>
        </div>
      </div>
      <!-- The Product Introduction -->
      <div class="col-12 mb-5">
        <ul class="nav nav-underline mb-3" id="pills-tab" role="tablist">
          <li class="nav-item pe-1" role="presentation">
            <button class="nav-link fs-5 active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    >Content</button>
          </li>
          <li class="nav-item px-2" role="presentation">
            <button class="nav-link fs-5"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                    >Description</button>
          </li>
          <li class="nav-item px-2" role="presentation">
            <button class="nav-link fs-5"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                    >Information</button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active"
               id="pills-home"
               role="tabpanel"
               aria-labelledby="pills-home-tab"
               tabindex="0"
               >
               {{ product.content }}
                </div>
          <div class="tab-pane fade"
               id="pills-profile"
               role="tabpanel"
               aria-labelledby="pills-profile-tab"
               tabindex="0"
               >
               {{ product.description }}
                </div>
          <div class="tab-pane fade"
               id="pills-contact"
               role="tabpanel"
               aria-labelledby="pills-contact-tab"
               tabindex="0"
               >
               We offer warranty and return services
               to ensure a hassle-free shopping experience for you.
               All products come with a warranty period,
               which varies depending on the type of product.
               Please refer to the individual product pages for detailed information.
               If you are unsatisfied with your purchase or need to initiate a return,
               please contact us within a specified period after purchase.
               We are committed to providing you with return and refund services promptly.
               For detailed return policies, please refer to our website
               or contact our customer service department.
               We strive to ensure your shopping satisfaction
               and provide the best possible post-sales support.
                </div>
        </div>
      </div>
      <div class="col-12 mb-5">
        <div class="card-group">
          <div class="card border-0 justify-content-center align-items-center mx-3">
            <div class="ratio ratio-1x1 rounded-circle overflow-hidden"
                 style="max-width: 20rem;">
              <img src="~@/assets/img/led light buld.jpg"
                   class="card-img-top" alt="led light buld">
            </div>
            <div class="card-body text-center mb-3">
              <h3 class="card-title">LED Light Buld</h3>
              <p class="card-text">
                You can use LED light bulbs and save up to 85% on electricity and extend lifespan.
              </p>
            </div>
          </div>
          <div class="card border-0 justify-content-center align-items-center mx-3">
            <div class="ratio ratio-1x1 rounded-circle overflow-hidden"
                 style="max-width: 20rem;">
              <img src="~@/assets/img/low co2.jpg"
                   class="card-img-top" alt="low co2">
            </div>
            <div class="card-body text-center mb-3">
              <h3 class="card-title">Carbon Neutral</h3>
              <p class="card-text">
                Our products are all compliant with carbon neutrality standards.
              </p>
            </div>
          </div>
          <div class="card border-0 justify-content-center align-items-center mx-3">
            <div class="ratio ratio-1x1 rounded-circle overflow-hidden"
                 style="max-width: 20rem;">
              <img src="~@/assets/img/eu logo.jpg"
                   class="card-img-top" alt="eu logo"
                   style="object-fit: cover; object-position: center;">
            </div>
            <div class="card-body text-center mb-3">
              <h3 class="card-title">EU Certification</h3>
              <p class="card-text">
                Our products have been certified by the EU across multiple standards & regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Related Products -->
      <section>
      <ProductList :allProducts="allProducts" :status="pageInfo"></ProductList>
      </section>
    </div>
  </div>
  <FrontFooter />
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue';
import FrontFooter from '@/components/FrontFooter.vue';
import ProductList from '@/components/HorizontalProductList.vue';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  components: {
    FrontNavbar,
    FrontFooter,
    ProductList,
    ToastMessages,
  },
  data() {
    return {
      pageInfo: {
        title: 'Related',
        type: '',
        name: '',
      },
      allProducts: [],
      product: {},
      id: '',
      quantity: 1,
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    // 取得所有產品
    getAllProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.allProducts = res.data.products;
          this.isLoading = false;
        })
        .catch((err) => {
          this.$emitter.emit('push-message', {
            style: 'danger',
            title: 'Something went wrong, please try again.',
          });
        });
    },
    // 取得特定產品
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product;
            this.pageInfo.type = this.product.category;
            this.pageInfo.name = this.product.title;
          }
          this.isLoading = false;
        })
        .catch((err) => {
          this.$emitter.emit('push-message', {
            style: 'danger',
            title: 'Something went wrong, please try again.',
          });
        });
    },
    // 增減產品數量
    updateQuantity(action) {
      if (action === 'plus' && this.quantity < this.product.is_enabled) {
        this.quantity += 1;
      } else if (action === 'minus' && this.quantity > 1) {
        this.quantity -= 1;
      }
    },
    // 加入購物車
    addToCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: this.quantity,
      };
      this.$http.post(url, { data: cart })
        .then((res) => {
          this.updateCartNum();
          this.$emitter.emit('push-message', {
            style: 'primary',
            title: 'The item has added to shopping cart.',
          });
          this.status.loadingItem = '';
        })
        .catch((err) => {
          this.$emitter.emit('push-message', {
            style: 'danger',
            title: 'Something went wrong, please try again.',
          });
        });
    },
    // 更新購物車品項數量
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
  },
  created() {
    this.id = this.$route.params.productId;
    this.getAllProducts();
    this.getProduct();
    // 監聽路由並更新至相應的頁面
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.id = toParams.productId;
        this.getProduct();
      },
    );
  },
};
</script>
