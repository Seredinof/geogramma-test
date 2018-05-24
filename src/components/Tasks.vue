<template>
    <div>
      <v-list two-line>
        <template v-for="(item, index) in tasks.data">
          <v-list-tile :key="index" avatar ripple @click="handleClickTitle">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.attributes.tile }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.attributes.subject }}</v-list-tile-sub-title>
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
    handleClickTitle: function () {

    }
  }
}
</script>
