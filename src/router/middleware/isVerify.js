export default function isVerify({ next, store }) {
  if (!store.getters.isVerify) {
    return next({
      name: "dashboard",
    });
  }

  return next();
}
