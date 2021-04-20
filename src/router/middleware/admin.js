export default function admin({ next, store }) {
  if (!store.getters.isAdmin) {
    return next({
      name: "Home",
    });
  }
  // else if(!store.getters.getAuth){
  //     return next({
  //         name: 'login'
  //      })
  // }

  return next();
}
