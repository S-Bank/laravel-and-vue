require('./bootstrap');
import Vue from 'vue'
import router from "./router";
console.log("================test=================");
console.log(router);
Vue.component('app', require('./vue/app.vue').default);
const app = new Vue({
    el:'#hussain',
    router
})