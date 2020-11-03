import $ from 'jquery';
import '../css/all.css';
import Vue from 'vue';
import App from '../vue/App.vue';
import router from '../router/router.js';
import axios from 'axios';
// import layer from 'layui-layer';

window.axios = axios;
// window.layer = layer;

// axios.defaults.baseURL = "http://40.64.22.160:18600/";

$(
    function(){

        let app = new Vue({
            el: "#app",
            render: function(createElement){
                let html = createElement(App);
                return html;
            },

            router
        });
    }
);


