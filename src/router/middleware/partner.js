export default function partner({ next, store }) {
  if (!store.getters.isPartner) {
    return next({
      name: "dashboard",
    });
  }
  // else if(!store.getters.getAuth){
  //     return next({
  //         name: 'login'
  //      })
  // }

  return next();
}
