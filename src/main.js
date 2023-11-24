import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import './style.css';
import * as VueRouter from 'vue-router'
import App from './App.vue';
import router from './router';

const app = createApp(App);
//use antd vue
app.use(Antd);
app.use(router)

app.mount('#app');