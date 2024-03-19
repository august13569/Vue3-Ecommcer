<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li :class="{ 'disabled': !pages.has_pre}" class="page-item">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="switchPage('Previous')">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page"
         :class="{ 'active': page === pages.current_page }">
        <a class="page-link" href="#" @click.prevent="updatePage(page)">
          {{ page }}
        </a>
      </li>
      <li :class="{ 'disabled': !pages.has_next}" class="page-item">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="switchPage('Next')">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    updatePage(page) {
      this.$emit('emit-pages', page);
    },
    switchPage(pageLink) {
      if (this.pages.has_next && pageLink === 'Next') {
        this.$emit('emit-pages', this.pages.current_page + 1);
      } else if (this.pages.has_pre && pageLink === 'Previous') {
        this.$emit('emit-pages', this.pages.current_page - 1);
      }
    },
  },
};
</script>
