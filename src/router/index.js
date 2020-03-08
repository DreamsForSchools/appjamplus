import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/who",
    component: () => import("../views/WhoPage.vue")
  },
  {
    path: "/why",
    component: () => import("../views/WhyPage.vue")
  },
  {
    path: "/apps",
    component: () => import("../views/AppsPage.vue")
  },
  {
    path: "/news",
    component: () => import("../views/NewsPage.vue")
  },
  {
    path: "/report/:id",
    component: () => import("../views/ReportPage.vue")
  },
  {
    path: "/resources",
    component: () => import("../views/ResourcesPage.vue")
  },
  {
    path: "/contact",
    component: () => import("../views/ContactPage.vue")
  },
  {
    path: "/mentor",
    component: () => import("../views/MentorPage.vue")
  },
  {
    path: "/host",
    component: () => import("../views/HostPage.vue")
  },
  {
    path: "/partner",
    component: () => import("../views/PartnerPage.vue")
  },
  {
    path: "/volunteer",
    component: () => import("../views/VolunteerPage.vue")
  },
  {
    path: "/",
    component: () => import("../views/HomePage.vue")
  },
  {
    path: "*",
    redirect: "/"
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;
