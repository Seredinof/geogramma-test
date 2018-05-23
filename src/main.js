import Vue from 'vue'
import App from './components/App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import Login from './components/Login'
import Layout from './components/Layout'

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Layout },
    { path: '/login', component: Login }
  ]
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
