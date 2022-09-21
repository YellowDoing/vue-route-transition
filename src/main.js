import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from "pinia/dist/pinia";
//import stores from './stores'


const app =  createApp(App)
app.use(router);
app.use(createPinia())
app.mount("#app");
