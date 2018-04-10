import Vue from 'vue'
import Router from 'vue-router'
import BeginView from '@/components/BeginView'
import TestView from '@/components/TestView'
import ResultView from '@/components/ResultView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BeginView',
      component: BeginView
    },
    {
      path: '/test/:testNumber',
      name: 'TestView',
      component: TestView
    },
    {
      path: '/result',
      name: 'ResultView',
      component: ResultView
    }
  ]
})
