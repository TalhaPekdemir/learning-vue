export default {
  namespaced: true,
  state: {
    name: "pName",
    id: 1,
    categories:["ctg1", "ctg2"]
  },
  getters: {
    _getName: state => state.name,
    _getId: state => state.id,
    _getCategories: state => state.categories,
  },
  mutations: {
    addCategory(state, ctg) {
      state.categories.push(ctg);
    }
  }
}