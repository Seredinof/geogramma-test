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
          <div>{{profile.data.attributes.login}}</div>
          <div><b>Задач:</b> {{profile.data.attributes.tasks}}</div>
          <div v-if="profile.data.id == user.id"><b>Token:</b> {{profile.data.attributes.token}}</div>
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
  created() {

  },
  mounted() {
    this.$store.dispatch('getProfile', this.$route.params.id);
  }
}
</script>
