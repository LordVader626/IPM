import './assets/main.css';
import { createApp } from 'vue'
import router from './router';
import App from './App.vue';
import Login from './pages/Login.vue'

const app = createApp(App);

app.component('Login', Login);
app.use(router);
app.mount('#app');
