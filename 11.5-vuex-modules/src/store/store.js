import { createStore } from "vuex";

// aynı şekilde import adı da önemli değil sadece modules value kısmı ile eşleşmeli.
import product from "./modules/product.js";
import customer from "./modules/customer.js";

const store = createStore({
  state: {
    fname:"talha"
  },
  modules: {
    // yine key value şeklinde 
    urun: product,
    musteri: customer
  },
  getters: {
    _getName: state => state.fname
  },
  mutations: {
    setName(state, name) {
      state.fname = name;
    }
  }
})

export default store;