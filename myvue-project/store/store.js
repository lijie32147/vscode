import VueRouter from 'vue-router';
import Vue from 'vue'; 
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0
    },

    mutations: {
        increase(state,n){
            state.count += n;
            if(state.count > 20){
                state.count = 0;
            }
        }
    }
});