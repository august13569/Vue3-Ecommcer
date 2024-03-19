<template>
  <div class="modal fade"
       id="deleteModal"
       tabindex="-1"
       aria-labelledby="deleteModalLabel"
       aria-hidden="true"
       >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteModalLabel">Delete Item</h5>
          <button type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  >
                </button>
        </div>
        <div class="modal-body">
          Do you want to delete the item?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                  @click="confirmDelete()"
                  >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 傳送確定刪除給父層
    confirmDelete() {
      this.$emit('delete-item');
    },
  },
};
</script>
