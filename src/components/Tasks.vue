<template>
    <div>
      <v-list two-line>
        <template v-for="(item, index) in tasks.data">
          <v-list-tile :key="index" class="list__tile_type_my">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.attributes.tile }}
              </v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">{{ item.attributes.subject }}</v-list-tile-sub-title>
              <v-list-tile-sub-title>
                <b>Автор:</b> 
                <router-link  :to="`/profile/${item.relationships.user.data.id}`">
                  {{item.relationships.user.data.attributes.fullName}}
                </router-link>
              </v-list-tile-sub-title>
              <div class="mb-2">
                <v-btn small color="info ml-0" append :to="`/task/${item.id}`">
                  Посмотреть
                </v-btn>
                <v-btn small color="info" :disabled="!(item.relationships.user.data.id == user.id)">
                  Редактировать
                </v-btn>
                <v-btn small color="error" :disabled="!(item.relationships.user.data.id == user.id)">
                  Удалить
                </v-btn>
              </div>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn small :color="item.relationships.state.data.relationships.attributes.name">
                {{item.relationships.state.data.attributes.name}}
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider v-if="index + 1 < tasks.data.length" :key="`divider-${index}`" class="mb-2"></v-divider>
        </template>
      </v-list>
    </div>
</template>

<script>

export default {
  name: 'tasks',
  data () {
    return {
      tasks: this.$store.state.tasks,
      user: this.$store.state.user
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
