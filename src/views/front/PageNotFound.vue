<template>
  <FrontNavbar />
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <img class="img-fluid" src="~@/assets/img/page not found 404.jpg" alt="page not found">
        <h1 class="h1 mb-1">Page Not Found 404</h1>
        <p class="fs-5">Sorry, we can't find that page!</p>
        <router-link to="/" role="button"
                     class="btn btn-primary btn-lg text-white mb-5">
                     Back to Home Page
        </router-link>
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
};
</script>
