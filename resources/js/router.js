import Vue from 'vue'

import Router from 'vue-router'
import  about  from './vue/pages/about'
import hooks from './vue/pages/basic/hooks'
import methods from './vue/pages/basic/methods'

Vue.use(Router)

const routes = [
    {
        path: '/my-new-vue-router',
        component:about
    },
    {
        path: '/hooks',
        component:hooks
    },
    {
        path: '/methods',
        component:methods
    }
   
]

export default new Router({
    mode: 'history',
    routes
})