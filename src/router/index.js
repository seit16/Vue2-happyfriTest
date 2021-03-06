import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home/index'
import item from '../page/item/index'
import score from '../page/score/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/item',
      name: 'item',
      component: item
    },{
      path: '/score',
      name: 'score',
      component: score
    }
  ]
})
