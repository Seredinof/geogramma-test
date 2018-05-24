import api from '../../api'

export default {
    state: {
        data: ''
    },
    mutations: {
        setProfile (state, payload) {
            state.data = payload;
        }
    },
    actions: {
        getProfile(context, payload) {
            api.getProfile(payload).then( function( response ) {
                context.commit('setProfile', response.data.data);
            } )
        }
    }
}