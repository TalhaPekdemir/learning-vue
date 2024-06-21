export default {
  // modüller arasında isim çakışmlarını engellemek için.
  namespaced: true,
  state: {
    name: "cName",
    id: 1,
    categories:["VIP"]
  },
  // normalde _getName olarak çağırılırken namespaced true olduğunda
  // store.js içinde yeniden isimlendirilmemişse
  // customer/_getName şeklinde çağırılır.
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