import { createRouter, createWebHistory } from "vue-router";
import HomeCmp from "@/views/HomeCmp.vue";
const routes = [
  {
    name:"HomePage",
    path: "/",
    component: HomeCmp  // metot 1
  },
  {
    name:"AboutPage",
    path: "/about",
    component: ()=> import ("@/views/AboutCmp.vue")  //metot 2
  },
  {
    name:"DetailsPage",
    path: "/details/:id",
    component: ()=> import ("@/views/DetailsCmp.vue")
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;