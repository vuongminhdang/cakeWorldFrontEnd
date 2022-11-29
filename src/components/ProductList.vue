<script>
import CakeService from "../service/cake.service";
export default {
  props: {
    products: { type: Array, default: [] },
    activeIndex: { type: Number, default: -1 },
  },
  emits: ["update:activeIndex"],
  data() {
    return {
      products: [],
      activeIndex: -1,
      searchText: "",
    };
  },
  methods: {
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    },
    async removeAllProducts() {
      if (confirm("Bạn muốn xóa tất cả sản phẩm?")) {
        try {
          await CakeService.deleteAll();
          this.refreshList();
        } catch (error) {
          console.log(error);
        }
      }
    },
    async retrieveProducts() {
      try {
        this.products = await CakeService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    refreshList() {
      this.retrieveProducts();
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
  computed: {
    // Chuyển các đối tượng product thành chuỗi để tiện cho tìm kiếm.
    productStrings() {
      return this.products.map((product) => {
        const { name, characteristics, origin, price } = product;
        return [name, characteristics, origin, price].join("");
      });
    },

    // Trả về các contact có chứa thông tin cần tìm kiếm.
    filteredProducts() {
      if (!this.searchText) return this.products;
      return this.products.filter((_product, index) =>
        this.productStrings[index].includes(this.searchText)
      );
    },
    activeProduct() {
      if (this.activeIndex < 0) return null;
      return this.filteredProducts[this.activeIndex];
    },
    // filteredContactsCount() {
    //   return this.filteredContacts.length;
    // },
  },
  mounted() {
    this.refreshList();
  },
};
</script>

<template>
  <div class="product">
    <div class="product-button">
      <router-link to="/productadd">
        <button class="button1">+Thêm sản phẩm</button>
      </router-link>
      <button class="button2" @click="removeAllProducts">
        Xóa tất cả sản phẩm
      </button>
    </div>
    <div class="product-content">
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(product, index) in products"
          :key="index"
        >
          <router-link
            :to="{
              name: 'productcard',
              params: { id: filteredProducts[index]._id },
            }"
          >
            <div class="product-item">
              <div class="name">
                {{ product.name }}
              </div>
              <div class="description">Mô tả: {{ product.description }}</div>

              <div class="price">Giá bán: {{ product.price }}</div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.product {
  margin-top: 80px;
  overflow: hidden;
}

.product-search,
.product-button {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.product-button .button1 {
  padding: 12px;
  background-color: rgb(15, 214, 41);
  border: none;
  border-radius: 5px;
  font-size: medium;
}
.product-button .button2 {
  padding: 12px;
  background-color: rgb(233, 8, 8);
  border: none;
  border-radius: 5px;
  font-size: medium;
}
.product-button :hover {
  opacity: 0.8;
}
.product-search input {
  width: 40%;
  padding: 8px;
}
.product-search button {
  width: 80px;
  padding: 8px;
}
.product-button button {
  padding: 8px;
  margin: 10px;
}
.list-group {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
  grid-auto-rows: auto;
  list-style: none;
}
.list-group a {
  text-decoration: none;
}
.list-group-item {
  font-size: 30px;
  text-transform: none;
}

.product-item {
  display: flexbox;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
  height: 280px;
  background-image: linear-gradient(rgb(172, 114, 49), rgb(194, 159, 120));
  background-size: 23 0px 280px;
  color: rgb(255, 255, 255);
  margin: 15px;
  border-radius: 10px;
}

.product-item .name {
  margin-top: 20px;
  font-size: 32px;
  font-weight: bold;
}
.product-item .description,
.price {
  margin-top: 20px;
  font-size: 20px;
}
</style>
