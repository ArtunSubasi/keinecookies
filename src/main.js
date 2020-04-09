import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import LandingPage from './LandingPage.vue'
import Impressum from './Impressum.vue'
import Datenschutz from './Datenschutz.vue'
import CookieAuswahl from './CookieAuswahl.vue'
import MainPage from './MainPage.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: LandingPage },
  { path: '/cookies-mit-echten-cookies', component: LandingPage, props: { headerText: 'Sorry :(', negationText: 'WIRKLICH KEINE' } },
  { path: '/impressum', component: Impressum },
  { path: '/datenschutz', component: Datenschutz },
  { path: '/cookie-auswahl', component: CookieAuswahl },
  { path: '/chocolate-chip-cookies', component: MainPage, props: { cookieType: 'ChocolateChip' } },
  { path: '/peanut-butter-cookies', component: MainPage, props: { cookieType: 'PeanutButter' } },
  { path: '/wirklich-keine-cookies', component: MainPage }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
