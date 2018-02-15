import Vue from 'vue'
import Router from 'vue-router'
import rank from '../components/rank/rank'
import recommend from '../components/recommend/recommend'
import singer from '../components/singer/singer'
import search from '../components/serach/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      component: rank
    },
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/singer',
      component: singer
    },
    {
      path: '/search',
      component: search
    }
  ]
})
