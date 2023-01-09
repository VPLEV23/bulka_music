import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/SignUp.vue";
import CreatePlaylist from "@/views/playlist/CreatePlaylist.vue";
import PlaylistsDetails from "@/views/playlist/PlaylistDetails.vue";
// route guard
import { projectAuth } from "../firebase/config";

const reqAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "Login" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: reqAuth,
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
  {
    path: "/playlists/create",
    name: "CreatePlaylist",
    component: CreatePlaylist,
    beforeEnter: reqAuth,
  },
  {
    path: "/playlists/:id",
    name: "PlaylistsDetails",
    component: PlaylistsDetails,
    beforeEnter: reqAuth,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
