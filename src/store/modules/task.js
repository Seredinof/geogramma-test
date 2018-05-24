import api from '../../api'

export default {
    state: {
        data: ''
    },
    mutations: {
        setTask (state, payload) {
            state.data = payload;
        }
    },
    actions: {
        getTask(context, payload) {
            api.getTask(payload).then( function( response ) {
                context.commit('setTask', response.data.data);
            } )
        }
    }
}