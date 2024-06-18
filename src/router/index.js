import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegistrationView from "../views/RegistrationView.vue";
import LoginView from "../views/LoginView.vue";
import CartView from "../views/CartView.vue";
import Aboutview from "../views/Aboutview.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },

    {
      path: "/registration",
      name: "Registration",
      component: RegistrationView,
    },

    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },

    {
      path: "/cart",
      name: "Cart",
      component: CartView,
    },
    {
      path: "/about",
      name: "About",
      component: Aboutview,
    },

    // {
    //   path: "/cart/:id",
    //   name: "Cart",
    //   component: CartView,
    // }
  ],
  
});

export default router;
