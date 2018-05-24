import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import tasks from './modules/tasks'
import task from './modules/task'
import profile from './modules/profile'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    tasks,
    task,
    profile
  },
  strict: debug
})