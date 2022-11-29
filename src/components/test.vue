
      <template>
        <form
          @submit.prevent="submitBill"
          class="flex flex-col items-center bg-white text-black p-10"
        >
          <span class="text-5xl font-bold uppercase text-red-500">{{
            title
          }}</span>
          <div class="w-full">
            <div class="my-10">
              <label
                for="hoten"
                class="uppercase flex-inline flex-col text-2xl font-bold hover:cursor-pointer text-red-500"
                >họ tên khách hàng</label
              >
              <input
                required
                id="hoten"
                type="text"
                class="border-b-2 border-red-100 w-full mt-5 focus:border-red-300 text-xl"
              />
            </div>
            <div class="my-10">
              <label
                for="sdt"
                class="uppercase flex-inline flex-col text-2xl font-bold hover:cursor-pointer text-red-500"
                >số điện thoại</label
              >
              <input
                required
                id="sdt"
                type="tel"
                class="border-b-2 border-red-100 w-full mt-5 focus:border-red-300 text-xl"
              />
            </div>
            <div class="my-10">
              <label
                for="diachi"
                class="uppercase flex-inline flex-col text-2xl font-bold hover:cursor-pointer text-red-500"
                >địa chỉ</label
              >
              <input
                required
                id="diachi"
                type="text"
                class="border-b-2 border-red-100 w-full mt-5 focus:border-red-300 text-xl"
              />
            </div>
            <div class="my-10 flex flex-col items-start">
              <label class="uppercase text-2xl font-bold mb-10 text-red-500"
                >Món ăn</label
              >
              <div class="flex gap-10">
                <div class="flex items-center">
                  <input
                    id="phodacbiet"
                    type="checkbox"
                    class="hover:cursor-pointer"
                  />
                  <label
                    for="phodacbiet"
                    class="ml-2 font-thin text-2xl uppercase hover:cursor-pointer hover:text-red-500"
                    >phở đặc biệt</label
                  >
                </div>
                <div class="flex items-center">
                  <input
                    id="phoga"
                    type="checkbox"
                    class="hover:cursor-pointer"
                  />
                  <label
                    for="phoga"
                    class="ml-2 font-thin text-2xl uppercase hover:cursor-pointer hover:text-red-500"
                    >phở gà</label
                  >
                </div>
                <div class="flex items-center">
                  <input
                    id="phobo"
                    type="checkbox"
                    class="hover:cursor-pointer"
                  />
                  <label
                    for="phobo"
                    class="ml-2 font-thin text-2xl uppercase hover:cursor-pointer hover:text-red-500"
                    >phở bò</label
                  >
                </div>
                <div class="flex items-center">
                  <input
                    id="phohaisan"
                    type="checkbox"
                    class="hover:cursor-pointer"
                  />
                  <label
                    for="phohaisan"
                    class="ml-2 font-thin text-2xl uppercase hover:cursor-pointer hover:text-red-500"
                    >phở hải sản</label
                  >
                </div>
                <div class="flex items-center">
                  <input
                    id="phochay"
                    type="checkbox"
                    class="hover:cursor-pointer"
                  />
                  <label
                    for="phochay"
                    class="ml-2 font-thin text-2xl uppercase hover:cursor-pointer hover:text-red-500"
                    >phở chay</label
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="flex w-full">
            <button
              type="submit"
              class="uppercase bg-green-500 p-6 text-2xl font-bold text-center hover:bg-green-400 rounded-xl shadow-md shadow-green-300 transition-all duration-75 w-30 hover:scale-95 text-white mr-5"
            >
              xác nhận
            </button>
            <button
              type="reset"
              class="uppercase bg-red-500 p-6 text-2xl font-bold text-center hover:bg-red-400 rounded-xl shadow-md shadow-red-300 hover:scale-95 transition-all duration-75 w-30 text-white"
              @click="deleteBill"
            >
              Xóa
            </button>
          </div>
        </form>
      </template>

      <script>
        export default {
          name: "Form",
          emits: ["submit:bill", "delete:bill"],
          props: {
            bill: {
              type: Object,
              required: true,
            },
            title: String,
          },
          data() {
            return {
              billLocal: this.bill,
            };
          },
          methods: {
            submitBill() {
              this.$emit("submit:bill", this.billLocal);
              this.$router.push({
                path: "/purchase",
              });
            },
            deleteBill() {
              this.$emit("delete:bill", this.billLocal.id);
            },
          },
        };
      </script>

      <style></style>
    </span>
  </form>
