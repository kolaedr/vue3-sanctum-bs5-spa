export default [
  {
    path: "/login",
    name: "LoginPage",
    component: () =>
      import(/* webpackChunkName: "auth" */ "@/views/Auth/Login.vue"),
    meta: {
      navbar: false,
    },
  },
  {
    path: "/registration",
    name: "RegistrationPage",
    component: () =>
      import(/* webpackChunkName: "auth" */ "@/views/Auth/Registration.vue"),
    meta: {
      navbar: false,
    },
  },
];
