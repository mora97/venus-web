// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './router/Routes'
import store from './store/Store'
import Vuesax from 'vuesax'
import Unicon from 'vue-unicons'
import VueCookies from 'vue-cookies'
import VueSwal from 'vue-sweetalert2'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';
import 'sweetalert2/dist/sweetalert2.min.css'
import { uniUser, uniTimesCircle, uniTimes } from 'vue-unicons/src/icons'
import { bullet, FAQ, sort, leftArrow, stretchedArrow, arrowBack, arrowDropDown} from './assets/icons/CustomIcons'

Unicon.add([FAQ, bullet, uniUser, sort, leftArrow, stretchedArrow, arrowBack, uniTimesCircle, uniTimes, arrowDropDown ])

Vue.use(VueRouter)
Vue.use(Vuesax);
Vue.use(Unicon)
Vue.use(VueCookies)
Vue.use(VueSwal)

Vue.config.productionTip = false

// const axios = Axios.create({
//   baseURL: 'https://vestaplast.com/',
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     'Content-Type': 'application/json'
//   }
// })

const router = new VueRouter ({
  routes: Routes,
  mode: 'history',
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition
    }
     return { x: 0, y: 0 }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store,
  template: '<App/>',
  components: { App }
})
