import axios from 'axios';
import qs from 'qs';

let apiRoot = 'http://geogramma-test.byllmcsony.ru/api/v1/';

export default {
    login: function (login, pass) {

        const data = { 
            login: login,
            pass: pass 
        };

        const options = {
            url: `${apiRoot}login/`,
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data),
        };

        return axios(options);
    },

    getUser: function(token) {
        const options = {
            url: `${apiRoot}user/?token=${token}`,
            method: 'GET',
            headers: { 'auth_token': token }
        };

        return axios(options);
    },
    getTasks: function() {
        const options = {
            url: `${apiRoot}tasks/`,
            method: 'GET',
            headers: { 'auth_token': (localStorage.token) ? localStorage.token : '' }
        };

        return axios(options);
    },
    getTask: function(id) {
        const options = {
            url: `${apiRoot}task/${id}`,
            method: 'GET',
            headers: { 'auth_token': (localStorage.token) ? localStorage.token : '' }
        };

        return axios(options);
    }
}