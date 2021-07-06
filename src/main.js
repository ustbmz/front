import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Alert from './components/modules/alert/'
import Pop from './components/modules/pop/'
import filters from './utils/filtter';
import directives from './utils/directives';

Vue.use(Alert)
Vue.use(Pop)
Vue.config.productionTip = false

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
