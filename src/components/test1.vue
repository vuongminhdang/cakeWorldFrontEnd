<template>
  <div>
    <ul class="h-[30rem] overflow-y-auto snap-y">
      <li
        v-for="(customer, index) in customers"
        :key="customer._id"
        class="snap-center grid grid-cols-7 mb-10 place-items-center border px-5"
      >
        <!-- STT -->
        <span class="mr-10 text-red-500 font-bold text-xl">{{ index }}</span>

        <!-- ID -->
        <span class="mr-10">{{ customer._id }}</span>

        <!-- NAME -->
        <div class="flex items-center justify-between py-5 w-full px-10 pr-24">
          <div>
            <router-link
              :to="{
                name: 'customer.edit',
                params: {
                  id: filteredCustomers[index]._id,
                },
              }"
            >
              <i
                class="fa-solid fa-pen-to-square text-2xl mr-10 hover:cursor-pointer hover:text-blue-600 text-blue-300 p-2"
              ></i>
            </router-link>
          </div>
          <span
            class="text-2xl font-thin block-inline text-ellipsis overflow-hidden"
            >{{ customer.name }}</span
          >
        </div>

        <!-- ADDRESS -->
        <span class="text-3xl mr-2 text-yellow-300">{{
          customer.address
        }}</span>

        <!-- PHONENUMBER -->
        <span class="text-3xl text-red-300 font-bold">{{
          customer.phone
        }}</span>

        <!-- FOOD -->
        <span class="text-3xl mr-2 text-yellow-300">{{ customer.food }}</span>

        <!-- QUANTITY -->
        <span class="text-3xl text-red-300 font-bold">{{ customer.desc }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CustomerList",
  props: {
    customers: { type: Array, default: [] },
    activeIndex: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {
      searchText: "",
    };
  },
  emits: ["update:activeIndex"],
  watch: {
    // Giám sát các thay đổi của biến searchText.
    // Bỏ chọn phần tử đang được chọn trong danh sách.
    searchText() {
      this.activeIndex = -1;
    },
  },
  methods: {
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    },
  },
  computed: {
    customerStrings() {
      return this.customers.map((customer) => {
        const { name, phone, address, desc, food } = customer;
        return [name, phone, address, desc, food].join("");
      });
    },
    // Trả về các contact có chứa thông tin cần tìm kiếm.
    filteredCustomers() {
      if (!this.searchText) return this.customers;
      return this.customers.filter((_customer, index) =>
        this.customerStrings[index].includes(this.searchText)
      );
    },
    activeCustomer() {
      if (this.activeIndex < 0) return null;
      return this.filteredCustomers[this.activeIndex];
    },
  },
};
</script>

<style></style>
