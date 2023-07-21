import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import iPhone from '../views/iPhone.vue';
import Samsung from '../views/Samsung.vue';
import Oppo from '../views/Oppo.vue';
import Huawei from '../views/Huawei.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';
import Register from '../views/Register.vue';
import Card from '../views/Card.vue';
import Others from '../views/Others.vue';
import Detail from '../views/DetailView.vue';
import Checkout from '../views/Checkout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/iphone',
      name: 'iphone',
      component: iPhone
    },
    {
      path: '/samsung',
      name: 'samsung',
      component: Samsung
    },
    {
      path: '/oppo',
      name: 'oppo',
      component: Oppo
    },
    {
      path: '/huawei',
      name: 'huawei',
      component: Huawei
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/others',
      name: 'others',
      component: Others
    },
    {
      path: '/card',
      name: 'card',
      component: Card
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

export default router
