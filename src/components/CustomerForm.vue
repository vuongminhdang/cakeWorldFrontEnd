<template>
  <form class="all-form" @submit.prevent="submitCustomer">
    <div class="ml10">
      <div class="form-group">
        <label for="name">Tên khách hàng: </label>
        <input
          name="name"
          type="text"
          placeholder="Nhập tên khách hàng"
          v-model="customerLocal.name"
        />
      </div>
      <div class="form-group">
        <label for="email">Giới tính: </label>
        <div class="mr10">
          <input
            name="name"
            type="text"
            placeholder="Nhập giới tính khách hàng"
            v-model="customerLocal.gender"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="email">Địa chỉ:</label>
        <input
          name="name"
          type="text"
          placeholder="Nhập địa chỉ của khách hàng"
          v-model="customerLocal.address"
        />
      </div>
      <div class="form-group">
        <label for="email">Số điện thoại:</label>
        <input
          name="name"
          type="text"
          placeholder="Nhập số điện thoại của khách hàng"
          v-model="customerLocal.phone"
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
  emits: ["submit:customer", "delete:product"],
  props: {
    customer: { type: Object, required: true },
  },
  data() {
    return {
      // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
      // contactLocal để liên kết với các input trên form
      customerLocal: this.customer,
    };
  },
  methods: {
    submitCustomer() {
      this.$emit("submit:customer", this.customerLocal);
      this.$router.push({
        path: "/customers2",
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
  background-image: linear-gradient(rgb(137, 203, 223), rgb(248, 248, 248));
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
