import Vue from 'vue';
import Vuex from 'vuex';
import accountModule from '@/store/modules/account';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    account: accountModule,
  },
});
