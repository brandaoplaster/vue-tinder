import Vue from 'vue';
import Vuex from 'vuex';
import Account from './account';
import Notification from './notification';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Account,
    Notification,
  }
});