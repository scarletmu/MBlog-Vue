import Vue from 'vue'
import App from './App.vue'
//Material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import '../styles/loader.css'
import 'vue-notifyjs/themes/material.css'
//Plugin
import VueRouter from 'vue-router';
import showdown from 'showdown';
import axios from 'axios';
import api from './util/api';
import store from './store';
import Notify from 'vue-notifyjs'

//Component
Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(Notify, {timeout: 1500});
//mixin
Vue.prototype.$showdown = showdown;
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

//Page
import Main from './pages/Main.vue'
import Detail from './pages/Detail.vue'

import AdminAdd from './pages/admin/Add.vue'
import AdminMain from './pages/admin/Main.vue'

//Router
const router = new VueRouter({
  routes: [
    { path: '/', component: Main },
    { path: '/admin', component: AdminMain },
    { path: '/admin/add', component: AdminAdd },
    { path: '/admin/edit/:id', component: AdminAdd },
    { path: '/detail/:id', component: Detail }
  ]
})

new Vue({
 el: '#app',
 router,
 store,
 render: h => h(App)
})
