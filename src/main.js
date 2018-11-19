import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import commonUI from './common'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import bus from './utils/emit'
import './utils/filter'
import ajax from './utils/ajax'
import swiper from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(commonUI)
Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$http = ajax
Vue.prototype.$bus = bus
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
