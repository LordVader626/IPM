import { createRouter, createWebHistory } from 'vue-router';
import Login from './pages/Login.vue'
import Serviços from './pages/Serviços.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login'},
    { path : '/login', component : Login },
    { path : '/services', component : Serviços },
    { path : '/:notFound(.*)', component : NotFound }
  ]
});

export default router;