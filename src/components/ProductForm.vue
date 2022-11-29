<template>
  <form class="all-form" @submit.prevent="submitProduct">
    <div class="ml10">
      <div class="form-group">
        <label for="name">Tên: </label>
        <input
          name="name"
          type="text"
          placeholder="Nhập tên bánh"
          v-model="productLocal.name"
        />
      </div>
      <div class="form-group">
        <label for="email">Mô tả: </label>
        <div class="mr10">
          <input
            name="name"
            type="text"
            placeholder="Nhập mô tả bánh"
            v-model="productLocal.origin"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="email">Giá bán:</label>
        <input
          name="name"
          type="text"
          placeholder="Nhập giá bán"
          v-model="productLocal.price"
        />
      </div>
      <div class="form-group">
        <button>Lưu</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["submit:product", "delete:product"],
  props: {
    product: { type: Object, required: true },
  },
  data() {
    return {
      // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
      // contactLocal để liên kết với các input trên form
      productLocal: this.product,
    };
  },
  methods: {
    submitProduct() {
      this.$emit("submit:product", this.productLocal);
      this.$router.push({
        path: "/products2",
      });
    },
  },
};
</script>
<style scoped>
.all-form {
  display: flexbox;
  justify-content: center;
}
form {
  padding: 10px 0px 10px;
  background-image: linear-gradient(rgb(204, 179, 125), rgb(248, 248, 248));
  border-radius: 10px;
}

.form-group {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
.form-group input {
  margin-left: 5px;
  padding: 6px;
}
.form-group button {
  width: 100px;
  height: 30px;
  padding: 8px 12px 8px;
}
.ml10 {
  margin-left: 10px;
}
.ml10 input {
  width: 400px;
}
</style>
