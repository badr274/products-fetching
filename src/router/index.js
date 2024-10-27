import { createRouter, createWebHistory } from "vue-router";
import productsPage from "../views/productsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "productsPage",
      component: productsPage,
    },
  ],
});

export default router;
