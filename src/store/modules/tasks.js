import api from '../../api'

export default {
    state: {
        data: ''
    },
    mutations: {
        setTasks (state, payload) {
            state.data = payload;
        }
    },
    actions: {
        getTasks(context, payload) {
            api.getTasks().then( function( response ) {
                //console.log(response.data.data);
                context.commit('setTasks', response.data.data);
            } )
        }
    }
}