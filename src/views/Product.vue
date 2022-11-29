<template>
  <ProductList :products="products" v-model="activeIndex" />
</template>

<script>
import ProductList from "../components/ProductList.vue";
import CakeService from "../service/cake.service";

export default {
  components: {
    ProductList,
  },
  data() {
    return {
      products: [],
      activeIndex: -1,
      searchText: "",
    };
  },
  watch: {
    // Giám sát các thay đổi của biến searchText.
    // Bỏ chọn phần tử đang được chọn trong danh sách.
    searchText() {
      this.activeIndex = -1;
    },
  },

  methods: {
    async retrieveContacts() {
      try {
        this.products = await CakeService.getAll();
      } catch (error) {
        console.log(error);
      }
    },

    refreshList() {
      this.retrieveContacts();
      this.activeIndex = -1;
    },

    async removeAllContacts() {
      if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
        try {
          await CakeService.deleteAll();
          this.refreshList();
        } catch (error) {
          console.log(error);
        }
      }
    },
    goToAddContact() {
      this.$router.push({ name: "contact.add" });
    },
  },
  mounted() {
    this.refreshList();
  },
};
</script>

<style scoped>
html {
  background-image: url("../coffeeShop_FrontEnd/src/assets/img/cakes-gc654c4cd4_1920.jpg");
  background-attachment: fixed;
  background-size: 1400px 800px;
}
.page {
  text-align: left;
  max-width: 750px;
}
.mt-2 {
  margin-right: 10px;
}
</style>
