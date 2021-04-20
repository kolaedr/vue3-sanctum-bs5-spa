export default function guest({ next, store }) {
  if (store.getters.getAuth) {
    return next({
      name: "dashboard",
    });
  }

  return next();
}
