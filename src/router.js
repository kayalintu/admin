import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Bedroom from './views/Bedroom.vue';
import Lighting from './views/Lighting.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/bedroom',
      name: 'Bedroom',
      component: Bedroom,
    },
    {
      path: '/lighting',
      name: 'Lighting',
      component: Lighting,
    },
  ],
});
