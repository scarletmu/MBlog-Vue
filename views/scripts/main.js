import Vue from 'vue'
import App from './App.vue'
//Material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import '../styles/loader.css'
//Plugin
import VueRouter from 'vue-router';
import VueFetch from 'vue-fetch';
import showdown from 'showdown';

//Usage
Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(VueFetch);
//mixin
Vue.prototype.$showdown = showdown;

//Page
import Main from './pages/Main.vue'
import AdminMain from './pages/admin/Main.vue'

//Router
const router = new VueRouter({
  routes: [
    { path: '/', component: Main },
    { path: '/admin', component: AdminMain}
  ]
})

new Vue({
 el: '#app',
 router,
 render: h => h(App)
})
