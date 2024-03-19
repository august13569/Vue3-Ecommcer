<template>
  <Loading :active="isLoading"></Loading>
  <FrontNavbar @sidebar-status="handleSidebarStatus"></FrontNavbar>
  <!-- Banner -->
  <header class="header-2 d-flex align-items-center justify-content-center mb-5">
    <div class="text-white text-center w-100"
         style="background-image: radial-gradient(circle, rgba(0, 0, 0, 0.5) 0%,
                                rgba(0, 0, 0, 0) 100%);">
      <h2 class="display-1">Products</h2>
    </div>
  </header>
  <!-- Title -->
  <div class="container">
    <h2 class="display-3">
        {{ selectedTitle === 'All' ? selectedTitle + ' Products' : selectedTitle + ' Lamps'}}
    </h2>
  </div>
  <!-- Category -->
  <!-- Show on phone -->
  <div class="sticky-top" style="top: 100px;" v-show="!isSidebarOpen">
    <div class="container mb-3">
      <div class="position-relative d-md-none">
          <div class="d-flex overflow-auto n-sbar">
            <span class="badge rounded-pill mx-1 p-2"
                 :class="selectedTitle === key ? 'bg-primary' : 'bg-secondary'"
                  v-for="(value, key) in productsCategory" :key="key"
                  @click.prevent=selectedCategory(key)
                  >
              <a class="link-light n-line" href="#">
                {{ key === 'All' ? key + ' Products' : key + ' Lamps'}} ({{ value }})
              </a>
            </span>
          </div>
        </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <!-- Show on Tab or Above -->
        <div class="sticky-top" style="top: 140px;" v-show="!isSidebarOpen">
          <div class="list-group d-none d-md-block">
            <a href="#" class="list-group-item list-group-item-action"
               :class="{'active': selectedTitle === key}"
               v-for="(value, key) in productsCategory" :key="key"
               @click.prevent=selectedCategory(key)
               >
               {{ key === 'All' ? key + ' Products' : key + ' Lamps'}} ({{ value }})
            </a>
          </div>
        </div>
      </div>
      <!-- Product List -->
      <div class="col-md-9">
        <div class="d-flex flex-wrap">
          <div class="card border border-white h-border mx-auto m-ss-1"
               style="width: 14rem;"
               v-for="item in products" :key="item.id"
               >
            <a class="n-line" href="#" @click.prevent="intoProduct(item.id)">
              <img :src="`${item.imageUrl}`" class="card-img-top" :alt="`${item.title}`">
              <div class="card-body">
                <h5 class="card-title text-dark">{{ item.title }}</h5>
                <p class="card-text text-secondary">{{ item.category }}</p>
                <div class="d-flex justify-content-between">
                  <p class="card-text text-primary fs-4">${{ $filters.currency(item.price) }}</p>
                  <p class="card-text text-secondary text-decoration-line-through pt-1"
                     v-if="item.price !== item.origin_price"
                     >
                    ${{ $filters.currency(item.origin_price) }}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  data() {
    return {
      isLoading: false,
      allProducts: [],
      products: [],
      productsCategory: {},
      selectedTitle: 'All',
      isSidebarOpen: false,
    };
  },
  methods: {
    // 取得所有產品
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.products = res.data.products;
          this.allProducts = [...this.products];
          this.sumProductsCategory();
          if (this.$route.query.data) {
            this.selectedCategory(this.$route.query.data);
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
    // 透過路由，進入被點擊的產品頁面
    intoProduct(id) {
      this.$router.push(`/products/${id}`);
    },
    // 匯集產品總類
    sumProductsCategory() {
      this.productsCategory = this.products.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
      }, { All: 0 });
      const total = Object.values(this.productsCategory).reduce((sum, count) => sum + count, 0);
      this.productsCategory.All = total;
    },
    // 選取產品類別
    selectedCategory(category) {
      this.selectedTitle = `${category}`;
      if (category === 'All') {
        this.products = [...this.allProducts];
      } else {
        this.products = this.allProducts.filter((product) => product.category === category);
      }
    },
    // 監聽Sidebar動態來隱藏目錄覽，避免目錄擋住Sidebar
    handleSidebarStatus(status) {
      this.isSidebarOpen = status;
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
