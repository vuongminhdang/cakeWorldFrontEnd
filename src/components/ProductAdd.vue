<template>
  <div class="page">
    <div class="title">Thêm sản phẩm</div>
    <ProductForm :product="product" @submit:product="createdProduct" />
  </div>
</template>

<script>
import CakeService from "@/service/cake.service.js";
import ProductForm from "../components/ProductForm.vue";
export default {
  data() {
    return {
      product: {
        name: "",
        description: "",
        price: "",
      },
      message: "",
    };
  },
  components: {
    ProductForm,
  },
  methods: {
    async createdProduct(data) {
      try {
        await CakeService.create(data);
        this.message = "Đã tạo sản phẩm thành công";
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
