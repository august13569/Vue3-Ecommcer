<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg sticky-top bg-white shadow">
    <div class="container">
      <!-- Toggle Button -->
      <button class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Logo -->
      <router-link to="/" class="navbar-brand">
        <h1 class="visually-hidden">BRITE</h1>
        <img class="logo" src="~@/assets/img/BRITE Logo.png" alt="BRITE">
      </router-link>
      <!-- Sidebar -->
      <div class="offcanvas offcanvas-start"
           tabindex="-1"
           id="offcanvasNavbar"
           aria-labelledby="offcanvasNavbarLabel"
           data-bs-dismiss="offcanvas"
           >
        <!-- Sidebar Header -->
        <div class="offcanvas-header d-flex justify-content-end d-lg-none">
          <button class="btn-close text-reset"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"></button>
        </div>
        <!-- Sidebar Body -->
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
            <li class="nav-item px-2">
              <router-link to="/about" class="nav-link link-secondary">About</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/products" class="nav-link link-secondary">Products</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/faq" class="nav-link link-secondary">FAQ</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/contact" class="nav-link link-secondary">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- Login & Shopping Cart -->
      <div class="d-flex">
        <router-link to="/login" class="fs-3 px-1">
          <i class="bi bi-person-fill text-secondary"></i>
        </router-link>
        <div class="position-relative align-self-center">
          <router-link to="/cart" class="fs-5 px-1">
            <i class="bi bi-bag-fill text-secondary"></i>
          </router-link>
          <span class="position-absolute top-0 start-100 translate-middle
                       badge rounded-pill bg-danger"
                v-if="carts.length > 0"
                       >
                       {{ cartNum }}
            <span class="visually-hidden">unread messages</span>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
      isSidebarOpen: false,
    };
  },
  methods: {
    // 取得購物車資訊
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url)
        .then((res) => {
          this.carts = res.data.data.carts;
        })
        .catch((err) => {
          this.$emitter.emit('push-message', {
            style: 'danger',
            title: 'Something went wrong, please try again.',
          });
        });
    },
    // 監聽Sidebar是否開啟並傳送給父層
    observeSidebar() {
      const observerInstance = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
          if (mutation.target.getAttribute('role') === 'dialog') {
            this.isSidebarOpen = true;
            this.$emit('sidebar-status', true);
          } else {
            this.isSidebarOpen = false;
            this.$emit('sidebar-status', false);
          }
        });
      });
      observerInstance.observe(document.getElementById('offcanvasNavbar'), {
        attributes: true,
        attributeFilter: ['role'],
      });
    },
  },
  computed: {
    // 顯示購物車品項數量
    cartNum() {
      return this.carts.length;
    },
  },
  // 接收由外層傳來的購物車數量
  mounted() {
    this.$emitter.on('update-cart', (newCartNum) => {
      this.carts = newCartNum;
    });
    this.observeSidebar();
  },
  created() {
    this.getCart();
  },
};
</script>
