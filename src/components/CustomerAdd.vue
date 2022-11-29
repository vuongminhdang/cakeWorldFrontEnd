<template>
  <div class="page">
    <div class="title">Thêm khách hàng</div>
    <CustomerForm :customer="customer" @submit:customer="createdCustomer" />
  </div>
</template>

<script>
import CustomerService from "../service/customer.service";
import CustomerForm from "../components/CustomerForm.vue";
export default {
  data() {
    return {
      customer: {
        name: "",
        gender: "",
        address: "",
        phone: "",
      },
      message: "",
    };
  },
  components: {
    CustomerForm,
  },
  methods: {
    async createdCustomer(data) {
      try {
        await CustomerService.create(data);
        this.message = "Thêm khách hàng thành công";
        alert(this.message);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.title {
  display: flex;
  justify-content: center;
  font-size: 50px;
  color: white;
  margin-top: 50px;
}
</style>
