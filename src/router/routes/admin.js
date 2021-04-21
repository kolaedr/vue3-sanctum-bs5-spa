import admin from "../middleware/admin";

export default [
  {
    path: "/admin",
    name: "AdminDashboard",
    component: () =>
      import(
        /* webpackChunkName: "admin" */ "@/views/Admin/AdminDashboard.vue"
      ),
    meta: {
      navbar: false,
      middleware: [admin],
    },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName: "admin" */ "@/views/Admin/Dashboard.vue"),
      },
    ],
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
