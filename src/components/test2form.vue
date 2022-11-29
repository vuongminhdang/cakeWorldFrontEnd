<template>
  <form
    @submit.prevent="submitCustomer"
    class="my-20 flex flex-col items-center bg-white text-black p-20 rounded-md"
  >
    <span class="text-5xl font-bold uppercase text-red-500">{{ title }}</span>

    <div class="w-full">
      <!-- CUSTOMER'S NAME -->
      <div class="my-10">
        <label
          for="hoten"
          class="uppercase flex-inline flex-col text-3xl font-bold hover:cursor-pointer text-red-500"
          >tên khách hàng</label
        >
        <input
          required
          id="hoten"
          type="text"
          class="border-b-2 border-red-100 w-full mt-5 focus:border-red-300 text-2xl"
          v-model="customerLocal.name"
        />
      </div>

      <!-- CUSTOMER'S ADDRESS -->
      <div class="my-10">
        <label
          for="price"
          class="uppercase flex-inline flex-col text-3xl font-bold hover:cursor-pointer text-red-500"
          >địa chỉ</label
        >
        <input
          id="price"
          type="number"
          class="border-b-2 border-red-100 w-full mt-5 focus:border-red-300 text-2xl"
          v-model="customerLocal.address"
        />
      </div>

      <!-- CUSTOMER'S PHONE -->
      <div class="my-10 flex flex-col">
        <label class="uppercase text-3xl font-bold mb-10 text-red-500"
          >số điện thoại</label
        >

        <input
          id="soluong"
          type="number"
          class="border-b-2 border-red-100 w-full mt-5 focus:border-red-300 text-2xl"
          v-model="customerLocal.phone"
        />
      </div>

      <!-- CUSTOMER'S FOOD -->
      <div class="my-10 flex flex-col">
        <label class="uppercase text-3xl font-bold mb-10 text-red-500"
          >đặt món</label
        >

        <input
          required
          id="soluong"
          type="text"
          class="border-b-2 border-red-100 w-full mt-5 focus:border-red-300 text-2xl"
          v-model="customerLocal.food"
        />
      </div>

      <!-- CUSTOMER'S DESC -->
      <div class="my-10 flex flex-col">
        <label class="uppercase text-3xl font-bold mb-10 text-red-500"
          >ghi chú</label
        >

        <input
          id="soluong"
          type="text"
          class="border-b-2 border-red-100 w-full mt-5 focus:border-red-300 text-2xl"
          v-model="customerLocal.desc"
        />
      </div>
    </div>

    <div class="flex w-full">
      <button
        type="submit"
        class="uppercase bg-green-500 p-6 text-xl font-bold text-center hover:bg-green-400 rounded-xl shadow-md shadow-green-300 transition-all duration-75 w-30 hover:scale-95 text-white mr-5"
      >
        xác nhận
      </button>
      <button
        type="reset"
        class="uppercase bg-red-500 p-6 text-xl font-bold text-center hover:bg-red-400 rounded-xl shadow-md shadow-red-300 hover:scale-95 transition-all duration-75 w-30 text-white"
        v-if="customerLocal._id"
        @click="deleteCustomer"
      >
        Xóa
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Form",
  emits: ["submit:customer", "delete:customer"],
  props: {
    customer: {
      type: Object,
      required: true,
    },
    title: String,
  },
  data() {
    return {
      customerLocal: this.customer,
    };
  },
  methods: {
    submitCustomer() {
      this.$emit("submit:customer", this.customerLocal);

      this.$router.push({
        path: "/customer",
      });
    },
    deleteCustomer() {
      this.$emit("delete:customer", this.customerLocal.id);
    },
  },
};
</script>

<style></style>
