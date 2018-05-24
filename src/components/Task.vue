<template>
  <v-card v-if="task.data.id == $route.params.id">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{task.data.attributes.tile}} 
          <v-btn small :color="task.data.relationships.state.data.relationships.attributes.name">
                {{task.data.relationships.state.data.attributes.name}}
          </v-btn>
        </h3>
        <div class="grey--text">{{task.data.attributes.subject}}</div>
        <div>{{task.data.attributes.description}}</div>
        <div><b>Автор:</b> {{ task.data.relationships.user.data.attributes.fullName }}</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="orange">Share</v-btn>
      <v-btn flat color="orange">Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'task',
  data () {
    return {
      task: this.$store.state.task
    }
  },
  created() {

  },
  mounted() {
    this.$store.dispatch('getTask', this.$route.params.id);
  },
  methods: {
    
  }
}
</script>
