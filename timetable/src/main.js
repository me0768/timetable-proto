// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import Campus from './components/Campus'
import ChoiceMajorLiberal from './components/ChoiceMajorLiberal'

Vue.prototype.$http = axios
Vue.component('campus', Campus)
Vue.component('choice-ml', ChoiceMajorLiberal)
// import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
