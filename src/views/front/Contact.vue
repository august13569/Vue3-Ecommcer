<template>
<ToastMessages />
<FrontNavbar />
<!-- Banner -->
<header class="header-4 d-flex align-items-center justify-content-center mb-5">
  <div class="text-white text-center w-100"
         style="background-image: radial-gradient(circle, rgba(0, 0, 0, 0.5) 0%,
                                rgba(0, 0, 0, 0) 100%);">
      <h2 class="display-1">Contact</h2>
    </div>
</header>
<!-- Our Contact Info -->
<div class="container">
  <ul class="list-group list-group-horizontal
             flex-column flex-md-row justify-content-md-around mb-5"
             >
    <li class="list-group-item text-center border-0">
      <i class="bi bi-telephone-fill display-3"></i>
      <h3>Phone</h3>
      <p>Phone: 02-6666-5200</p>
      <p>Fax: 02-6666-5220</p>
    </li>
    <li class="list-group-item text-center border-0">
      <i class="bi bi-geo-alt-fill display-3"></i>
      <h3>Location</h3>
      <p>11775 EAST 45TH AVENUE.</p>
      <p>DENVER, CO 80239</p>
    </li>
    <li class="list-group-item text-center border-0">
      <i class="bi bi-envelope-fill display-3"></i>
      <h3>Email</h3>
      <p>support@brite.com</p>
    </li>
  </ul>
  <h3 class="display-5 text-center mb-5">Send Us Message</h3>
  <!-- Customers' Contact Info -->
  <Form class="row g-3" v-slot="{ errors }" @submit="sendMessgae" ref="form">
    <div class="col-md-6">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <Field id="name" name="name" type="text" class="form-control"
               :class="{ 'is-invalid': errors['name'] }"
               placeholder="Please enter your name" rules="required"
               v-model="form.user.name"></Field>
        <ErrorMessage name="name" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <Field id="email" name="email" type="email" class="form-control"
               :class="{ 'is-invalid': errors['email'] }"
               placeholder="Please enter your email" rules="email|required"
               v-model="form.user.email"></Field>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="tel" class="form-label">Phone</label>
        <Field id="tel" name="phone" type="tel" class="form-control"
               :class="{ 'is-invalid': errors['phone'] }"
               placeholder="Please enter your phone" rules="required"
               v-model="form.user.tel"></Field>
        <ErrorMessage name="phone" class="invalid-feedback"></ErrorMessage>
      </div>
    </div>
    <div class="col-md-6">
      <label for="message" class="form-label">Message</label>
        <Field style="height: 80%; max-height: 80%;"
               id="message" name="message" as="textarea" class="form-control"
               :class="{ 'is-invalid': errors['message'] }"
               v-model="form.user.message"
               placeholder="Please enter the message"
               rules="required"
               >
        </Field>
        <ErrorMessage name="message" class="invalid-feedback"></ErrorMessage>
    </div>
    <div class="col-12 text-center mt-5">
      <button class="btn btn-primary btn-lg text-white mb-5" type="submit">Submit</button>
    </div>
  </Form>
</div>
<FrontFooter />
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue';
import FrontFooter from '@/components/FrontFooter.vue';
import ToastMessages from '@/components/ToastMessages.vue';
import { Field, Form } from 'vee-validate';

export default {
  components: {
    FrontNavbar,
    FrontFooter,
    Field,
    Form,
    ToastMessages,
  },
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          message: '',
        },
      },
    };
  },
  methods: {
    sendMessgae() {
      // 沒有接收留言的API，所以這裡僅供模擬
      this.$refs.form.resetForm();
      this.$emitter.emit('push-message', {
        style: 'primary',
        title: 'The message has been sent.',
      });
    },
  },
};
</script>
