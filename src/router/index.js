import { createWebHistory, createRouter } from "vue-router";
import Product from "../views/Product.vue";
import Home from "../views/Home.vue";
import Customer from "../views/Customer.vue";
import CustomerAdd from "../components/CustomerAdd.vue";
import ProductAdd from "../components/ProductAdd.vue";
import ProductCard from "../components/ProductEdit.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/products",
    name: "product",
    component: Product,
  },
  {
    path: "/products2",
    name: "product2",
    component: Product,
  },
  {
    path: "/customers",
    name: "customer",
    component: Customer,
  },
  {
    path: "/customers2",
    name: "customer2",
    component: Customer,
  },
  {
    path: "/customeradd",
    name: "customeradd",
    component: CustomerAdd,
  },
  {
    path: "/productadd",
    name: "productadd",
    component: ProductAdd,
  },
  {
    path: "/productcard/:id",
    name: "productcard",
    component: ProductCard,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
