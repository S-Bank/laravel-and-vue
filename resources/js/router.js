import Vue from 'vue'

import Router from 'vue-router'
import  about  from './vue/pages/about'
import hooks from './vue/pages/basic/hooks'

Vue.use(Router)

const routes = [
    {
        path: '/my-new-vue-router',
        component:about
    },
    {
        path: '/hooks',
        component:hooks
    }
   
]

export default new Router({
    mode: 'history',
    routes
})