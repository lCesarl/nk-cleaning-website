import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/style.css';

const app = createApp(App);

app.mount('#app');

app.AOS = new AOS.init(); // Initialisiere AOS
