<template>
  <Loading :active="isLoading"></Loading>
  <FrontNavbar />
  <StepBar :title="stepsTitle"></StepBar>
  <div class="container">
    <!-- Order Form -->
    <div class="my-5 row justify-content-center">
      <Form class="col-md-6"
            v-slot="{ errors }"
            @submit="createOrder"
            >
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field id="email" name="email" type="email" class="form-control"
                   :class="{ 'is-invalid': errors['email'] }"
                   placeholder="Please enter your email" rules="email|required"
                   v-model="form.user.email"></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <Field id="name" name="name" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['name'] }"
                   placeholder="Please enter your name" rules="required"
                   v-model="form.user.name"></Field>
          <ErrorMessage name="name" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">Phone</label>
          <Field id="tel" name="phone" type="tel" class="form-control"
                   :class="{ 'is-invalid': errors['phone'] }"
                   placeholder="Please enter your phone" rules="required"
                   v-model="form.user.tel"></Field>
          <ErrorMessage name="phone" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <Field id="address" name="address" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['address'] }"
                   placeholder="Please enter your address" rules="required"
                   v-model="form.user.address"></Field>
          <ErrorMessage name="address" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">Note</label>
          <textarea name="" id="message" class="form-control" cols="30" rows="10"
                    v-model="form.message"></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-danger" type="sumit">Place Order</button>
        </div>
      </Form>
    </div>
  </div>
  <FrontFooter />
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue';
import FrontFooter from '@/components/FrontFooter.vue';
import StepBar from '@/components/StepsBar.vue';
import { Field, Form } from 'vee-validate';

export default {
  components: {
    FrontNavbar,
    FrontFooter,
    Field,
    Form,
    StepBar,
  },
  data() {
    return {
      isLoading: false,
      stepsTitle: 'Order',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    // 新增訂單
    createOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order })
        .then((res) => {
          this.$router.push(`/checkout/${res.data.orderId}`);
        })
        .catch((err) => {
          this.$emitter.emit('push-message', {
            style: 'danger',
            title: 'Something went wrong, please try again.',
          });
        });
    },
  },
};
</script>
