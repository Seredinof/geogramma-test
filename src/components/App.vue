<template>
    <Login/>
</template>

<script>
import apiUser from '../api/User'
import Login from './Login'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Login: Login
  },
  methods: {

  },
  mounted() {
    apiUser.login('geogramma_test', 'geogramma_test')
  }
}
</script>
