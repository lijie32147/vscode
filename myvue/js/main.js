import $ from 'jquery';
import '../css/all.css';
import Vue from 'vue';
import App from '../vue/App.vue';
import router from '../router/router.js';
import axios from 'axios';
import layer from 'layui-layer';
import '../node_modules/bootstrap3/dist/css/bootstrap.min.css';

window.axios = axios;
window.layer = layer;

axios.defaults.baseURL = "http://localhost:8080/";

$(function(){

    let app = new Vue({
        el: "#app",
        
        render: function(createElement){
            let html = createElement(App);

            //该函数返回什么内容，该内容就会把#app元素替换掉
            return html;
        },

        router: router
    });
});