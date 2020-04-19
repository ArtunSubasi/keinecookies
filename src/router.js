import VueRouter from 'vue-router'

import LandingPage from '@/pages/LandingPage.vue'
import ImpressumPage from '@/pages/ImpressumPage.vue'
import DatenschutzPage from '@/pages/DatenschutzPage.vue'
import PaqPage from '@/pages/PaqPage.vue'
import KontaktPage from '@/pages/KontaktPage.vue'
import CookieAuswahlPage from '@/pages/CookieAuswahlPage.vue'
import MainPage from '@/pages/MainPage.vue'

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
  { path: '/wirklich-keine-cookies', component: MainPage },
  { path: '*', component: LandingPage, props: { headerText: '404, Oops!', negationText: 'KEINE' } }
]

export default new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})
