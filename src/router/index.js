import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/CharacterView"),
  },
  {
    path: "/:characterID",
    name: "detail",
    component: () => import("../views/DetailView"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
