<!-- <script>
export default {
  props: {
    product: { type: Object, required: true },
  },
};
</script>

<template>
  <div>
    <div>
      <strong>Tên:</strong>
      {{ product.name }}
      <strong>Xuất xứ:</strong>
      {{ product.origin }}
    </div>
  </div>
</template> -->
<template>
  <div class="product-card">
    <div class="product-card-item">
      <h1>THÔNG TIN BÁNH</h1>
      <ProductForm :product="product" @submit:product="createdProduct" />
    </div>
  </div>
</template>

<script>
import CakeService from "../service/cake.service";
import ProductForm from "./ProductForm.vue";
export default {
  name: "productcard",
  props: {
    id: { type: String, required: true },
  },
  components: { ProductForm },
  /*data() {
    return {
      product: null,
    };
  },*/
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
  methods: {
    async getProducts(id) {
      try {
        this.product = CakeService.get(id);
      } catch (error) {
        alert("Cannot get products!");
        console.log(error);
      }
    },
  },
  created() {
    this.getProducts(this.id);
  },
  mouted() {
    alert(CakeService.get(id));
  },
};
</script>

<style>
.product-card {
  display: flex;
  margin-top: 50px;
  justify-content: center;
}
.product-card-item {
  color: white;
}
</style>
