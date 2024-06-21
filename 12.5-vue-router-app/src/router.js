import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: ()=> import("@/components/Homepage.vue")
  },
  {
    name: "FormPage",
    path: "/new",
    component: ()=> import("@/components/Formpage.vue")
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router;