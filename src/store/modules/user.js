import api from '../../api'

export default {
    state: {
        type: 'user',
        id: null,
        attributes: {},
        relationships: {},
        errorLogin: ''
    },
    mutations: {
        setUser (state, payload) {
            state.type = payload.type;
            state.id = payload.id;
            state.attributes = payload.attributes;
            state.relationships = payload.relationships;
        },
        setErrorLogin (state, payload) {
            state.errorLogin = payload;
        }
    },
    actions: {
        login (context, payload) {
            api.login(payload.login, payload.pass).then( function( response ) {
                context.commit('setUser', response.data.data);
                context.commit('setErrorLogin', '');
            }).catch(function (error) {
                context.commit('setErrorLogin', 'Пара логин/пароль не подходят');
            })
        }
    }
}