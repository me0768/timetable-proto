// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable*/
import Vue from 'vue'
import { store } from './store.js'
import App from './App'
import axios from 'axios'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes.js'

/*import Campus from './components/Campus'
import ChoiceMajorLiberal from './components/ChoiceMajorLiberal'*/

Vue.prototype.$http = axios
Vue.use(VueResource)
Vue.use(VueRouter)
/*Vue.component('campus', Campus)
Vue.component('choice-ml', ChoiceMajorLiberal)*/
// import router from './router'

Vue.config.productionTip = false

const router = new VueRouter({
	routes: Routes
})

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})