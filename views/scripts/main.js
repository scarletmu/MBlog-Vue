import Vue from 'vue'
import App from './App.vue'
//Material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
//Plugin

Vue.use(VueMaterial);

new Vue({
 el: '#app',
 render: h => h(App)
})
