import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Login from '../vue/Login.vue';
import Register from '../vue/Register.vue';

let router = new VueRouter({
    routes: [
        {component: Login, path: "/Login"},
        {component: Register, path: "/Register"}   
    ]
});

export default router;