import { createRouter, createWebHistory } from 'vue-router';
import Login from './pages/Login.vue'
import ServiceList from './pages/ServiceList.vue'
import Service from './pages/Service.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login'},
    { path : '/login', component : Login },
    { path : '/services', component : ServiceList },
    { path : '/services/:serviceID(.*)', component : Service},
    { path : '/:notFound(.*)', component : NotFound }
  ]
});

export default router;