export default function auth({ next, store, nextMiddleware }) {
    console.log('store.getters :>> ', store.getters.GET_USER);
  if (!store.getters.GET_USER) {
    return next({
      name: "login",
    });
  }
  return nextMiddleware();
}
