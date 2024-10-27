import axios from "axios";
import { defineStore } from "pinia";

export const productsStore = defineStore("products-store", {
  state: () => ({
    products: [],
    loading: false,
  }),
  actions: {
    async getProducts() {
      this.loading = true;
      try {
        await axios.get("https://fakestoreapi.com/products").then((res) => {
          this.products = res.data.filter(
            (product) => product.category !== "jewelery"
          );
          console.log(this.products);
        });
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
});
