import AddJob from "@/views/AddJob.vue";
import Home from "@/views/Home.vue";
import Job from "@/views/Job.vue";
import Jobs from "@/views/Jobs.vue";

import NotFound from "@/views/NotFound.vue";

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
    {
      path: "/jobs/:id",
      name: "job",
      component: Job,
    },
    {
      path: "/job/add",
      name: "add-job",
      component: AddJob,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
