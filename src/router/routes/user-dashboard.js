export default [
  {
    path: "/dashboard",
    name: "UserDashboard",
    component: () =>
      import(/* webpackChunkName: "admin" */ "@/views/Dashboard/UserDashboard.vue"),
    meta: {
      navbar: false,
    },
  },
  // {
  //   path: "/registration",
  //   name: "RegistrationPage",
  //   component: () =>
  //     import(/* webpackChunkName: "admin" */ "@/views/Auth/Registration.vue"),
  //   meta: {
  //     navbar: false,
  //   },
  // },
];
