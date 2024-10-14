import AddJob from "@/views/AddJob.vue";
import EditJob from "@/views/EditJob.vue";
import Home from "@/views/Home.vue";
import Job from "@/views/Job.vue";
import Jobs from "@/views/Jobs.vue";
import Login from "@/views/Login.vue";

import NotFound from "@/views/NotFound.vue";
import SignUp from "@/views/SignUp.vue";

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
      path: "/jobs/add",
      name: "add-job",
      component: AddJob,
    },
    {
      path: "/job/edit/:id",
      name: "edit-job",
      component: EditJob,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
  ],
});

export default router;
