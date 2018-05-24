<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-toolbar flat class="transparent" v-if="user.attributes">
        <v-list class="pa-0">
          <v-list-tile avatar :to="`/profile/${user.id}`">
            <v-list-tile-avatar>
              <img :src="`http://geogramma-test.byllmcsony.ru/${user.relationships.data.attributes.path}`" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{user.attributes.login}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list dense>
        <v-list-tile to="/tasks">
          <v-list-tile-action>
            <v-icon>list</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Список задач</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
          <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text ml-2">geogramma-test &copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: null,
        user: this.$store.state.user
      }
    },
    props: {
      source: String
    }
  }
</script>