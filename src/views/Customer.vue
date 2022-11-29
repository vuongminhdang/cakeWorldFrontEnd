<template>
  <div class="customer">
    <CustomerList :customers="customers" v-model="activeIndex" />
  </div>
</template>

<script>
import CustomerList from "../components/CustomerList.vue";
import CustomerService from "../service/customer.service";

export default {
  components: {
    CustomerList,
  },
  data() {
    return {
      customers: [],
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
  // computed: {
  //   // Chuyển các đối tượng product thành chuỗi để tiện cho tìm kiếm.
  //   productStrings() {
  //     return this.products.map((product) => {
  //       const { name, characteristics, origin, price } = product;
  //       return [name, characteristics, origin, price].join("");
  //     });
  //   },

  //   // Trả về các contact có chứa thông tin cần tìm kiếm.
  //   filteredProducts() {
  //     if (!this.searchText) return this.products;
  //     return this.products.filter((_product, index) =>
  //       this.productStrings[index].includes(this.searchText)
  //     );
  //   },
  //   activeProduct() {
  //     if (this.activeIndex < 0) return null;
  //     return this.filteredProducts[this.activeIndex];
  //   },
  //   // filteredContactsCount() {
  //   //   return this.filteredContacts.length;
  //   // },
  // },
  methods: {
    async retrieveCustomers() {
      try {
        this.customers = await CustomerService.getAll();
      } catch (error) {
        console.log(error);
      }
    },

    refreshList() {
      this.retrieveCustomers();
      this.activeIndex = -1;
    },

    async removeAllCustomers() {
      if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
        try {
          await CustomerService.deleteAll();
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
.page {
  text-align: left;
  max-width: 750px;
}
.mt-2 {
  margin-right: 10px;
}
</style>
