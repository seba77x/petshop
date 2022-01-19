import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue'
import vuetify from './plugins/vuetify'
import storeModule from './store';

const store = new Vuex.Store({
  modules: {
    petShop: storeModule,
  },
});

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.mixin({ store });

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
