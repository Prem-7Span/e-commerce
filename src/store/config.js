import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", () => {
  const productList = ref([]);

  const fetchProductList = () => {
    try {
      // Axios get call
      //  Append response to productList
    } catch (error) {
      // catch call
    }
  };
  return;
});
