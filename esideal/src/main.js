import './assets/main.css';
import { createApp } from 'vue'
import router from './router';
import App from './App.vue';
import Login from './pages/Login.vue'
import NotFound from './pages/NotFound.vue';
import ServiceList from './pages/ServiceList.vue';
import Service from './pages/Service.vue';
import RecommendationForm from './pages/RecommendationForm.vue';

const app = createApp(App);

app.component('Login', Login);
app.component('NotFound', NotFound);
app.component('ServiceList', ServiceList);
app.component('Service', Service);
app.component('RecommendationForm', RecommendationForm);
app.use(router);
app.mount('#app');
