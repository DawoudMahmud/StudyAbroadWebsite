import axios from "axios";
import Nprogress from "nprogress";
import { app } from "../main";

const apiClient = axios.create({
    baseURL:
    "https://thailand-vue-default-rtdb.firebaseio.com/"
});

apiClient.interceptors.request.use(
    config => {
        Nprogress.start();
        return config;
    }
);

apiClient.interceptors.request.use(
    response => {
        Nprogress.done();
        return response;
    }
);

export default {
    getPreRegis() {
        let url =
        "https://thailand-vue-default-rtdb.firebaseio.com/pre.json?auth=" + app.config.globalProperties.$idToken;
            app.config.globalProperties.$idToken;
        return apiClient.get(url);
    },
    postPreRegis(theObj) {
        let url =
            "https://thailand-vue-default-rtdb.firebaseio.com/pre.json?auth=" + app.config.globalProperties.$idToken;
            app.config.globalProperties.$idToken;
        if (!app.config.globalProperties.$authenticated) {
            url = 
                "https://thailand-vue-default-rtdb.firebaseio.com/pre.json"
        }   
        return apiClient.post(url, theObj);
    },
}