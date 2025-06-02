import { createApp } from 'vue'
import { createPinia } from 'pinia'; // Import createPinia
import './style.css'
import App from './App.vue'
import router from './router'; // Import your configured router

const app = createApp(App)
const pinia = createPinia(); // Create a Pinia instance

app.use(router); // Tell the app to use Vue Router
app.use(pinia); // Tell the app to use Pinia

app.mount('#app')
