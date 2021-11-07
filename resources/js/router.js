import Vue from 'vue'

import Router from 'vue-router'
import  about  from './vue/pages/about'

Vue.use(Router)

const routes = [
    {
        path: '/my-new-vue-router',
        component:about
    }
   
]

export default new Router({
    mode: 'history',
    routes
})