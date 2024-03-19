<template>
  <BackNavbar />
  <div class="container-fluid">
    <router-view></router-view>
  </div>
</template>

<script>
import BackNavbar from '@/components/BackNavbar.vue';

export default {
  components: {
    BackNavbar,
  },
  created() {
    const cookies = document.cookie.split('; ').find((row) => row.startsWith('hexToken='));
    const token = cookies ? cookies.split('=')[1] : null;
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('/login');
        }
      })
      .catch((err) => {
        this.$emitter.emit('push-message', {
          style: 'danger',
          title: 'Something went wrong, please try again.',
        });
      });
  },
};
</script>
