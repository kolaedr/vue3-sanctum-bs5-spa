const helper = {
  namespace: true,

  state: {
    sidebarIsOpen: true,
  },
  getters: {
    isOpen: (store) => store.helper.sidebarIsOpen,
  },
  mutations: {
    sideBarToggle: (store) => (store.sidebarIsOpen = !store.sidebarIsOpen),
  },
  actions: {},
  modules: {},
};

export default helper;
