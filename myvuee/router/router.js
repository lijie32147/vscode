import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Login from '../vue/Type/Login.vue';
import Register from '../vue/Type/Register.vue';
import Newsmessage from '../vue/Type/Newsmessage.vue';

let router = new VueRouter({
    routes: [
        {component: Login, path: "/Login"},
        {component: Register, path: "/Register"},
        {component: Newsmessage, path: "/Newsmessage"}
    ]
});

export default router;
