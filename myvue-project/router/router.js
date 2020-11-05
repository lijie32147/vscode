import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import AddType from '../vue/Type/AddType.vue';
import FindUser from '../vue/Type/FindUser.vue';

let router = new VueRouter({
    routes: [
        {component: AddType, path: "/AddType"},
        {component: FindUser, path: "/FindUser"}
    ]
});

export default router;