import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyComponent from '@/components/MyComponent'
import TodoPage from '@/components/TodoPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/test',
      name: 'test',
      component: MyComponent
    },

    {
      path: '/todos',
      name: 'todo list',
      component: TodoPage
    }
  ]
})
