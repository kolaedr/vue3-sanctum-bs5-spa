import Home from "@/views/Home.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: () => {
      // the function receives the target route as the argument
      // we return a redirect path/location here.
      return { path: "login" };
    },
    meta: {
      navbar: true,
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    meta: {
      navbar: true,
    },
  },
  {
    path: "/support",
    name: "Support",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Support.vue"),
    meta: {
      navbar: true,
    },
  },
];
