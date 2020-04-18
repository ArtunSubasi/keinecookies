import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import LandingPage from './LandingPage.vue'
import ImpressumPage from './ImpressumPage.vue'
import DatenschutzPage from './DatenschutzPage.vue'
import PaqPage from './PaqPage.vue'
import KontaktPage from './KontaktPage.vue'
import CookieAuswahlPage from './CookieAuswahlPage.vue'
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
  { path: '/impressum', component: ImpressumPage },
  { path: '/datenschutz', component: DatenschutzPage },
  { path: '/paq', component: PaqPage },
  { path: '/kontakt', component: KontaktPage },
  { path: '/cookie-auswahl', component: CookieAuswahlPage },
  { path: '/chocolate-chip-cookies', component: MainPage, props: { cookieType: 'ChocolateChip' } },
  { path: '/macarons', component: MainPage, props: { cookieType: 'Macarons' } },
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
