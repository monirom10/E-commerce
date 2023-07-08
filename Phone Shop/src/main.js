import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/css/main.css'
import './assets/css/tailwindcss.css'
// @home-style  
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/home_style.css'
import './assets/css/login.css'
import './assets/css/phone.css'
import './assets/css/card.css'
import './assets/css/others.css'
import './assets/css/detail.css'

import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App)

app.use(router),

app.mount('#app')
