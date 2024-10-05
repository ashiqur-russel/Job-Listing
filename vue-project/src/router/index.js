import Home from "@/views/Home.vue";
import Jobs from "@/views/Jobs.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: Jobs,
    },
  ],
});

export default router;
