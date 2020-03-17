export default {
  state: {
    account: ""
  },

  mutations: {
    performLogin(state, user) {
      state.account = user;
      localStorage.setItem('account', JSON.stringify(user));
    },

    loadLocalStorageAccount(state) {
      let account = localStorage.getItem('account');
      if(account) {
        state.account = JSON.parse(account);
      } else {
        state.account = "";
      }
    }
  },

  actions: {
    loadLocalAccount(context) {
      context.commit("loadLocalAccount");
    } 
  },

  getters: {
    isLoggedIn(state) {
      return state.account != ""
    }
  }
}