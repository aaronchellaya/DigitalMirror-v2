import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Toasted from 'vue-toasted'
import GoogleSignInButton from 'vue-google-signin-button-directive'

Vue.config.productionTip = false
Vue.prototype.$toggle = false

Vue.use(Toasted, {
  duration: 1500,
  position: 'bottom-center',
})

import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId:
    '925781764218-9oflbh9654hvjkha36fsvnbpso8r3dmi.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'consent',
  fetch_basic_profile: true,
}
Vue.use(GAuth, gauthOption)

new Vue({
  GoogleSignInButton,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
