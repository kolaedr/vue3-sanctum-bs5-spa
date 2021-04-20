import site from "./site";
import auth from "./auth";
import admin from "./admin";
import dashboard from "./user-dashboard";

export default [...site, ...auth, ...admin, ...dashboard];
