import Vue from 'vue'
import App from './App.vue'
//Material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
//Plugin
import VueRouter from 'vue-router';
import VueFetch from 'vue-fetch';

//Usage
Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(VueFetch);

//Page
import Main from './pages/Main.vue'
//Router
const router = new VueRouter({
  routes: [
    { path: '/', component: Main }
  ]
})

new Vue({
 el: '#app',
 router,
 render: h => h(App)
})
