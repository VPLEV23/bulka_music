import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/SignUp.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
