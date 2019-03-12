import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import moment from 'moment';

Vue.config.productionTip = false;

Vue.filter('formatSimpleDate', (value: Date) => {
  if (value) {
    return moment(String(value)).format('DD.MM.YYYY');
  }
})

Vue.filter('daysDiffToday', (value: Date) => {
  if (value) {
    const today = moment(new Date());
    return today.diff(value, 'days');
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
