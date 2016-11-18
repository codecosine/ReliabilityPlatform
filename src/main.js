import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// BootStrap import
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import addTask from './components/addTask';
import taskList from './components/taskList';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  { path: '/', component: addTask },
  { path: '/addTask', component: addTask },
  { path: '/taskList', component: taskList },
];
const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
});
