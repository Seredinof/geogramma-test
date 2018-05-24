<template>
  <v-card>
    <v-container class="fluid">
      <v-layout v-if="profile.data.id == $route.params.id">
        <v-avatar
          :tile="true"
          :size="128"
          class="mr-3"
        >
          <img :src="`http://geogramma-test.byllmcsony.ru/${profile.data.relationships.data.attributes.path}`" alt="avatar">
        </v-avatar>
        <div>
          <div class="headline">{{profile.data.attributes.fullName}}</div>
          <div v-if="!profileUser">{{profile.data.attributes.login}}</div>
          <v-text-field
            v-if="profileUser"
            label="Логин"
            v-model="username"
          ></v-text-field>
          <div><b>Задач:</b> {{profile.data.attributes.tasks}}</div>
          <div v-if="profileUser"><b>Token:</b> {{profile.data.attributes.token}}</div>
        </div>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>

export default {
  name: 'task',
  data () {
    return {
      profile: this.$store.state.profile,
      user: this.$store.state.user
    }
  },
  computed: {
    username: {
      get () {
        return this.$store.state.profile.data.attributes.login
      },
      set (value) {
        this.$store.commit('loginUpdate', value)
      }
    },
    profileUser: function() {
      return this.profile.data.id == this.user.id
    }
  },
  mounted() {
    this.$store.dispatch('getProfile', this.$route.params.id);
  }
}
</script>
