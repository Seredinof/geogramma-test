import Vue from 'vue'
import App from './components/App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import Login from './components/Login'
import Layout from './components/Layout'
import Tasks from './components/Tasks'
import Task from './components/Task'

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Layout,
      children: [
        {
          path: 'tasks',
          component: Tasks
        },
        {
          path: '/task/:id',
          component: Task
        }
      ]
    },
    { path: '/login', component: Login }
  ]
})

new Vue({
  el: '#app',
  store,
  router,
  mounted() {
      if(localStorage.token) {
        this.$store.dispatch('getUser', localStorage.token)
      } else {
        router.push('/login');
      }
  },
  render: h => h(App)
})


