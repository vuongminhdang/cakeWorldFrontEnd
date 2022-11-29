<script>
import CustomerService from "../service/customer.service";
export default {
  props: {
    customers: { type: Array, default: [] },
    activeIndex: { type: Number, default: -1 },
  },
  emits: ["update:activeIndex"],
  data() {
    return {
      customers: [],
      activeIndex: -1,
      searchText: "",
    };
  },
  methods: {
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    },
    async removeAllCustomers() {
      if (confirm("Bạn muốn xóa tất cả khách hàng trong danh sách?")) {
        try {
          await CustomerService.deleteAll();
          this.refreshList();
        } catch (error) {
          console.log(error);
        }
      }
    },
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
    goToProductCard() {
      this.$router.push({
        path: "/productcard",
      });
    },
  },
  watch: {
    // Giám sát các thay đổi của biến searchText.
    // Bỏ chọn phần tử đang được chọn trong danh sách.
    searchText() {
      this.activeIndex = -1;
    },
  },

  mounted() {
    this.refreshList();
  },
};
</script>

<template>
  <div class="product">
    <div class="product-button">
      <router-link to="/customeradd">
        <button class="button1">+Thêm khách hàng</button>
      </router-link>
      <button class="button2" @click="removeAllCustomers">
        Xóa tất cả khách hàng
      </button>
    </div>
    <div class="customer">
      <ul class="customer-content">
        <li class="" v-for="(customer, index) in customers" :key="index">
          <div class="customer-item">
            <div class="">Tên khách hàng: {{ customer.name }}</div>
            <div class="">Giới tính: {{ customer.gender }}</div>
            <div class="">Địa chỉ: {{ customer.address }}</div>
            <div class="">Số điện thoại: {{ customer.phone }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.customer-content {
  margin-top: 50px;
  display: flexbox;
  justify-content: center;
  padding: 20px;
  background-color: rgb(188, 225, 236);
  border-radius: 10px;
  list-style: none;
}
.customer-item {
  width: 600px;
  background-color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 300px;
  padding: 10px;
  border-radius: 10px;
}
</style>
