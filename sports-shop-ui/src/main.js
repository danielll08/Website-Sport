import { createApp } from 'vue'
import App from './App.vue'

// Import CSS và JS của Bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import file CSS custom (nếu có)
import './style.css'

createApp(App).mount('#app')