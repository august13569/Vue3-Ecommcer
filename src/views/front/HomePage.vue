<template>
  <Loading :active="isLoading"></Loading>
  <!-- Pop Ad of Coupon Code -->
  <div class="d-flex w-100 h-100 position-fixed"
       style="background-color: rgba(0, 0, 0, 0.5); z-index: 9999;"
       v-if="showAd"
       @click="closeAd"
       >
    <div class="d-flex m-auto px-4">
      <img class="rounded w-100 h-100" src="~@/assets/img/adpost.jpg" alt="PopAd">
    </div>
  </div>
  <FrontNavbar />
  <!-- Carousel Banner -->
  <header class="mb-3">
    <div id="carouselBanner"
         class="carousel slide position-relative"
         data-bs-ride="carousel"
         touch-action="pan-y"
         >
      <div class="carousel-indicators">
        <button type="button"
                data-bs-target="#carouselBanner"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
                ></button>
        <button type="button"
                data-bs-target="#carouselBanner"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                ></button>
        <button type="button"
                data-bs-target="#carouselBanner"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                ></button>
        <button type="button"
                data-bs-target="#carouselBanner"
                data-bs-slide-to="3"
                aria-label="Slide 4"
                ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="~@/assets/img/carousel/carousel01.jpg" class="d-block w-100" alt="carousel01"
               style="max-height: 672px; object-fit: cover;">
        </div>
        <div class="carousel-item">
          <img src="~@/assets/img/carousel/carousel02.jpg" class="d-block w-100" alt="carousel02"
               style="max-height: 672px; object-fit: cover;">
        </div>
        <div class="carousel-item">
          <img src="~@/assets/img/carousel/carousel03.jpg" class="d-block w-100" alt="carousel03"
               style="max-height: 672px; object-fit: cover;">
        </div>
        <div class="carousel-item">
          <img src="~@/assets/img/carousel/carousel04.jpg" class="d-block w-100" alt="carousel04"
               style="max-height: 672px; object-fit: cover;">
        </div>
      </div>
      <button class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselBanner"
              data-bs-slide="prev"
              >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next"
              type="button"
              data-bs-target="#carouselBanner"
              data-bs-slide="next"
              >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      <div class="position-absolute top-50 start-50 translate-middle rounded-2"
           style="background-color: rgba(255, 255, 255, 0.6);">
        <div class="d-flex flex-column align-items-center p-2">
          <img class="mb-2" src="~@/assets/img/BRITE Logo.png" alt="BRITE" width="200" height="60">
          <h2 class="text-center d-none d-lg-block">Light up the world, Brighter your life.</h2>
          <h2 class="fs-5 text-center d-lg-none">Light up the world, Brighter your life.</h2>
        </div>
      </div>
    </div>
  </header>
  <!-- Latest Product List -->
  <section class="mb-3">
    <ProductList :allProducts="allProducts" :status="pageInfo"></ProductList>
  </section>
  <!-- Introductino of Our Service -->
  <section>
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-6">
          <img class="h-100 w-100" src="~@/assets/img/homepage/freeshipping.jpg" alt="freeshipping"
               data-aos="fade-right" data-aos-duration="1800" data-aos-offset="450"
               >
        </div>
        <div class="col-md-6 align-self-center"
             data-aos="fade-up" data-aos-duration="1800" data-aos-offset="450"
             >
          <h3 class="display-5 my-5">Free Shipping</h3>
          <p class="fs-5 lh-base">
            We offer free shipping on all orders, no minimum purchase required.
            Enjoy the convenience of having your items delivered to your doorstep at no extra cost.
            Whether it's everyday essentials or special treats,
            we've got you covered with complimentary shipping on every order.
            Shop now and experience hassle-free delivery!
          </p>
        </div>
      </div>
      <div class="row flex-md-row-reverse mb-5 overflow-hidden">
        <div class="col-md-6">
          <img class="h-100 w-100" src="~@/assets/img/homepage/consulation.jpg" alt="consulation"
               data-aos="fade-left" data-aos-duration="1800" data-aos-offset="300">
        </div>
        <div class="col-md-6 align-self-center"
             data-aos="fade-up" data-aos-duration="1800" data-aos-offset="300"
             >
          <h2 class="display-5 my-5">Complimentary Consultation</h2>
          <p class="fs-5 lh-base">
            Experience our complimentary consultation service where our expert team assists you
            in selecting the perfect lighting fixtures to complement your indoor ambiance
            or design a unique lighting solution tailored specifically to your needs.
          </p>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-6">
          <img class="h-100 w-100" src="~@/assets/img/homepage/warranty.jpg" alt="warranty"
               data-aos="fade-right" data-aos-duration="1800" data-aos-offset="450">
        </div>
        <div class="col-md-6 align-self-center"
             data-aos="fade-up" data-aos-duration="1800" data-aos-offset="450"
             >
          <h3 class="display-5 my-5">3 Year Warranty</h3>
          <p class="fs-5 lh-base">
            Our lighting fixtures come with a comprehensive 3-year warranty,
            ensuring peace of mind and satisfaction with your purchase.
            We stand behind the quality of our products and are committed
            to providing reliable support should any issues arise during the warranty period.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- Go Shopping Now -->
  <section>
    <div class="container-fluid text-center">
      <h3 class="display-5 my-5">Many products are available for you</h3>
      <div class="row mb-5">
        <div :class="`col-md col-4 p-0 type-${key + 1}`"
             v-for="(item, key) in allProductTypes" :key="key">
          <a class="btn p-0 border-0 w-100 h-100 d-flex flex-column"
             @click="intoSelectedType(item)"
             >
            <p class="text-white mb-0 mt-auto fs-3 py-1"
               style="background-color: rgba(0, 0, 0, 0.5);">{{ item }}</p>
          </a>
        </div>
      </div>
      <router-link to="/products" role="button"
                   class="btn btn-primary btn-lg text-white mb-5">
        Go shopping now
      </router-link>
    </div>
  </section>
  <FrontFooter />
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue';
import FrontFooter from '@/components/FrontFooter.vue';
import ProductList from '@/components/HorizontalProductList.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  components: {
    FrontNavbar,
    FrontFooter,
    ProductList,
  },
  data() {
    return {
      showAd: false,
      isLoading: false,
      allProducts: [],
      allProductTypes: [],
      pageInfo: {
        title: 'Latest',
        type: 'All',
        name: '',
      },
    };
  },
  methods: {
    // 取得所有產品
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.allProducts = res.data.products;
          this.allProductTypes = ['All', ...new Set(this.allProducts.map((product) => product.category))];
          // 啟用AOS動畫效果
          AOS.init({});
          this.isLoading = false;
        })
        .catch((err) => {
          this.$emitter.emit('push-message', {
            style: 'danger',
            title: 'Something went wrong, please try again.',
          });
        });
    },
    // 關閉彈出優惠券廣告
    closeAd() {
      this.showAd = false;
    },
    // 透過路由轉跳到指定類型的產品頁面
    intoSelectedType(type) {
      this.$router.push({
        path: '/products',
        query: { data: type },
      });
    },
  },
  mounted() {
    // 彈出優惠券廣告
    setTimeout(() => {
      this.showAd = true;
    }, 3000);
  },
  created() {
    this.getProducts();
  },
};
</script>
