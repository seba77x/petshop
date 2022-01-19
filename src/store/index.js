import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);


export const state = {
  products: [],
  categories: [],
  cart: [],
  cartnumber: 0,
  selectedCategorie: undefined,
  finalPrice: undefined
}

const storeModule = {
    state,
    getters,
    actions,
    mutations,
  };
  
  export default storeModule;