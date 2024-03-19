<template>
  <Loading :active="isLoading"></Loading>
  <ToastMessages />
  <DeleteModal @delete-item="removeCartItem"></DeleteModal>
  <div class="text-end m-3 mb-0">
    <button class="btn btn-primary text-white"
            type="button"
            @click="openModal(true)"
            >增加一個產品</button>
  </div>
  <div class="table-responsive n-sbar">
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="120">庫存</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category}}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">
            {{ $filters.currency(item.origin_price) }}
          </td>
          <td class="text-right">
            {{ $filters.currency(item.price) }}
          </td>
          <td class="text-right">
            {{ $filters.currency(item.is_enabled) }}
          </td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm"
                      type="button"
                      @click="openModal(false, item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                      @click="this.delItemId = item.id">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <BackPagination :pages="pagination" @emit-pages="getProducts"></BackPagination>
  <ProductModal
    ref="productModal" :product="tempProduct" @update-product="updateProduct">
  </ProductModal>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import ToastMessages from '@/components/ToastMessages.vue';
import BackPagination from '@/components/BackPagination.vue';

export default {
  components: {
    DeleteModal,
    ProductModal,
    ToastMessages,
    BackPagination,
  },
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      delItemId: '',
      isNew: false,
      isLoading: false,
    };
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
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
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          productComponent.hideModal();
          if (res.data.success) {
            this.getProducts();
            this.$emitter.emit('push-message', {
              style: 'primary',
              title: 'The item has been updated',
            });
          } else {
            this.$emitter.emit('push-message', {
              style: 'danger',
              title: 'The item has been failed to update',
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
    removeCartItem() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.delItemId}`;
      this.$http.delete(url)
        .then((res) => {
          this.getProducts();
          this.isLoading = false;
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
  },
  created() {
    this.getProducts();
  },
};
</script>
