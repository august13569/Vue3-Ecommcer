<template>
  <div class="container">
  <h2 class="display-3">{{ status.title }} Products</h2>
  <div class="position-relative">
    <div class="row flex-nowrap overflow-auto n-sbar"
         ref="productContainer"
         style="scroll-behavior: smooth;"
         >
      <div class="card border-0 mx-auto m-md-1"
           style="max-width: 18rem;"
           v-for="item in filterProducts"
           :key="item.id"
           >
        <a class="n-line" href="#" @click.prevent="intoProduct(item.id)">
          <img :src="`${item.imageUrl}`" class="card-img-top" alt="...">
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
    <div class="position-absolute top-50 start-0 translate-middle d-none d-md-block"
         style="z-index: 1;"
         >
      <button class="btn" type="button" @click="moveLeft">
        <span class="bi bi-arrow-left-circle-fill display-5"></span>
        <span class="visually-hidden">Previous</span>
      </button>
    </div>
    <div class="position-absolute top-50 start-100 translate-middle d-none d-md-block"
         style="z-index: 1;"
         >
      <button class="btn" type="button" @click="moveRight">
        <span class="bi bi-arrow-right-circle-fill display-5"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  // 所有產品資訊、父層狀態
  props: ['allProducts', 'status'],
  methods: {
    // 透過路由，進入被點擊的產品頁面
    intoProduct(id) {
      this.$router.push(`/products/${id}`);
    },
    // 左移
    moveLeft() {
      this.$refs.productContainer.scrollLeft -= 350;
    },
    // 右移
    moveRight() {
      this.$refs.productContainer.scrollLeft += 350;
    },
  },
  computed: {
    // 顯示與當前頁面相符的產品內容，
    // 如果在首頁，從全部商品中隨機挑選。
    // 如果在特定產品，從相關類型中挑選。
    filterProducts() {
      const filteredArr = this.allProducts.filter((item) => (
        item.title !== this.status.name && (this.status.title === 'Latest' || item.category === this.status.type)
      ));
      filteredArr.sort(() => Math.random() - 0.5);
      return filteredArr.slice(0, 16);
    },
  },
};
</script>
