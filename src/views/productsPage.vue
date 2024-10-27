<script setup>
import { onMounted } from "vue";
import { productsStore } from "../stores/products.js";
const store = productsStore();
async function getData() {
  await store.getProducts();
}
getData();
</script>

<template>
  <div class="products-container">
    <v-row v-if="store.loading">
      <v-col cols="3" v-for="num in 6" :key="num">
        <v-skeleton-loader type="image, article"></v-skeleton-loader
      ></v-col>
    </v-row>
    <div v-else>
      <v-lazy>
        <div class="products" v-if="store.products.length">
          <div
            class="product-card"
            v-for="product in store.products"
            :key="product.id"
          >
            <div class="image">
              <img :src="product.image" alt="product-image" />
            </div>
            <v-card-title class="title">
              {{ product.title.slice(0, 14) + "..." }}
            </v-card-title>
            <v-card-text class="price">{{ product.price }}</v-card-text>
            <v-rating
              v-model="product.rating.rate"
              half-increments
              readonly
              color="yellow-darken-3"
              size="small"
              density="compact"
            >
            </v-rating>
          </div>
        </div>
        <div class="data-not-found" v-else>
          <div class="the-msg">
            <v-icon icon="mdi-alert-circle" class="warning-icon"></v-icon>
            <div class="msg">Data Not Found</div>
          </div>
        </div>
      </v-lazy>
    </div>
  </div>
</template>

<style>
.products-container {
  padding: 30px;
}
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}
.product-card {
  background-color: #fff;
  color: #000;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  overflow: hidden;
  padding: 40px 25px;
  transition: 0.3s ease-in-out;
}
.product-card:hover {
  transform: rotate(0.5deg) scale(1.05);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}
.product-card .image {
  text-align: center;
  cursor: pointer;
  margin-bottom: 24px;
}
.product-card .image img {
  width: fit-content;
  height: 200px;
  object-fit: contain;
}
.product-card .title {
  font-size: 24px;
  font-family: cairo;
  margin-bottom: 8px;
  padding: 0;
}
.product-card .price {
  color: #828181;
  font-size: 16px;
  padding: 0;
}
.data-not-found {
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.data-not-found .the-msg {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #fff;
  border-radius: 24px;
  width: 300px;
}
.data-not-found .the-msg .msg {
  color: #515151;
}
.warning-icon {
  width: 30px;
  --v-icon-size-multiplier: 2.5 !important;
  color: rgb(35, 25, 1);
}
@media (max-width: 430px) {
  .products-container {
    padding: 16px;
  }
  .products {
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  .product-card {
    padding: 30px 20px;
  }
  .product-card .image img {
    height: 100px;
    margin-bottom: 16px;
  }
  .product-card .title {
    font-size: 18px;
  }
  .product-card .price {
    color: #828181;
    font-size: 13px;
  }
}
</style>
