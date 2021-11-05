require('./bootstrap');
import Vue from 'vue'
Vue.component('app', require('./vue/app.vue').default);
const app = new Vue({
    el:'#hussain'
})