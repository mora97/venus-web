<template>
  <div id="pagination">
    <ul class="pagination justify-content-center">
      <li
        class="page-item mr-1"
        v-for="page in pageNum"
        :key="page"
        @click="asyncProductsList(), changePage(page)"
      >
        <router-link class="page-link" :to="{ path: url , query: { page: page } }" exact>{{ page }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    pages: {
      type: Number,
      default: 5
    },
    url: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      pageNum: [],
      beforePage: 1
    };
  },
  methods: {
    ...mapActions(["asyncProductsList"]),
    changePage(page) {
      if (this.pages >= 3) {
        this.pageNum = [];
        if (page <= this.pages - 2) {
          if (page > this.beforePage) {
            for (let i = -1; i <= 1; i++) {
              this.pageNum.push(Number(page) + i);
            }
          } else if (page >= 2) {
            for (let i = 1; i >= -1; i--) {
              this.pageNum.push(Number(page) - i);
            }
          } else if (page == 1) {
            for (let i = 1; i <= 3; i++) {
              this.pageNum.push(i);
            }
          }
        } else {
          for (let i = this.pages - 2; i <= this.pages; i++) {
            this.pageNum.push(i);
          }
        }
      } else {
        for (let i = 1; i <= this.pages; i++) {
          this.pageNum.push(i);
        }
      }
    }
  },
  watch: {
    $route(to, from) {
      this.changePage(this.$route.query.page);
    },
    pages() {
      this.changePage(this.$route.query.page)
    }
  }
};
</script>

<style scoped>
.page-link {
  border-radius: 8px !important;
  border-color: var(--border-color);
}
.router-link-active {
  background: #78e591;
  color: white;
}
</style>