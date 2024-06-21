import { createStore } from "vuex";

const store = createStore({
  state: {
    person: {
      fname: "Talha",
      lname: "Pekdemir",
      age:22
    },
    users: [
      {id:1, username:"Ahmet", isActive:true},
      {id:2, username:"Mehmet", isActive:true},
      {id:3, username:"Ali09", isActive:true},
      {id:4, username:"CengizBoi07", isActive:false},
      {id:5, username:"xx_Terminator_xx", isActive:false}
    ],
    theme: "dark",
    permissions:[1,2,3,4,5,6]
  },
  getters: {
    // one line ES6 js func
    _getAllUsers: state => state.users,
    _getActiveUsers: state => state.users.filter(a => a.isActive == true)
    // _activeUsers(state) {
    //   return state.users.filter(a => a.isActive == 1)
    // }
  },
  mutations: {
    // state i değiştirecek, ondan state parametre alacak
    // ne ile değiştirecek? bu sebepten bir veri parametre alacak
    _addNewUser(state, user) {
      state.users.push(user);
    },
    _activateUser(state, userId) {
      state.users.find(user => user.id == userId).isActive = true;
    },
    _deactivateUser(state, userId) {
      state.users.find(user => user.id == userId).isActive = false;
    },
  },
  actions: {
    _addNewUserAsync(context, user) {
      console.log('user', user)
      setTimeout(() => { 
        // bu bir opsiyon ancak yapılmamalı. Bunun yerine user eklemeyi
        // sağlayan mutation commit edilmeli.
        // context.state.itemlist.push(user);
        context.commit("_addNewUser", user);
       }, 2000);
    }
  }
});

export default store;