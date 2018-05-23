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
    }
}