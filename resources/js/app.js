require('./bootstrap');
import Vue from 'vue'
import router from "./router";

Vue.component('app', require('./vue/app.vue').default);
const app = new Vue({
    el:'#hussain',
    router
})