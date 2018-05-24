<template>
    <div>
      <v-list two-line>
        <template v-for="(item, index) in tasks.data">
          <v-list-tile :key="index" class="list__tile_type_my">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.attributes.tile }}</v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">{{ item.attributes.subject }}</v-list-tile-sub-title>
              <v-list-tile-sub-title><b>Автор:</b> {{ item.relationships.user.data.attributes.fullName }}</v-list-tile-sub-title>
              <v-btn small color="info" append :to="`/task/${item.id}`">
                Посмотреть
              </v-btn>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn small :color="item.relationships.state.data.relationships.attributes.name">
                {{item.relationships.state.data.attributes.name}}
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider v-if="index + 1 < tasks.data.length" :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </div>
</template>

<script>

export default {
  name: 'tasks',
  data () {
    return {
      tasks: this.$store.state.tasks
    }
  },
  created() {

  },
  mounted() {
    this.$store.dispatch('getTasks');
  },
  methods: {
    
  }
}
</script>

<style>
.list__tile_type_my .list__tile {
  height: auto;
}
</style>
