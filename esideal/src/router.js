import { createRouter, createWebHistory } from 'vue-router';
import Login from './pages/Login.vue';
import ServiceList from './pages/ServiceList.vue';
import Recommendations from './pages/Recommendations.vue';
import RecommendationForm from './pages/RecommendationForm.vue';
import NotFound from './pages/NotFound.vue';
import axios from 'axios';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/services', component: ServiceList },
    { path: '/recommendations', component: Recommendations },
    { path: '/recommendationform', component: RecommendationForm },
    { path: '/services/:serviceId', component: () => import('./pages/Service.vue'), props: true }, // Dynamic route with serviceId param
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

// Fetch services and create dynamic routes when the router is created
(async () => {
  try {
    const response = await axios.get('http://localhost:5173/services');
    if (response.data && Array.isArray(response.data)) {
      const services = response.data;
      services.forEach(service => {
        router.addRoute({
          path: `/services/${service.id}`,
          component: () => import('./pages/Service.vue'), // Lazy load Service component
          props: { service }, // Pass service as props
        });
      });
    } else {
      console.error('Invalid response structure:', response.data);
    }
  } catch (error) {
    console.error('Error fetching services:', error);
  }
})();

export default router;
