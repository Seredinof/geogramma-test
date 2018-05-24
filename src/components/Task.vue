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
        <div>
          <b>Автор:</b> 
          <router-link  :to="`/profile/${task.data.relationships.user.data.id}`">
            {{ task.data.relationships.user.data.attributes.fullName }}
          </router-link>
        </div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn small color="info" :disabled="disabledBtn">
        Редактировать
      </v-btn>
      <v-btn small color="error" :disabled="disabledBtn">
        Удалить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'task',
  data () {
    return {
      task: this.$store.state.task,
      user: this.$store.state.user
    }
  },
  computed: {
    disabledBtn: function(){
      return !(this.task.data.relationships.user.data.id == this.user.id)
    }
  },
  mounted() {
    this.$store.dispatch('getTask', this.$route.params.id);
  },
  methods: {
    
  }
}
</script>
