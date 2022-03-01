import Vue from 'vue';
import VueRouter from 'vue-router';
import Contact from '@/view/contacts/Contact';
import Home from '@/view/Home';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/contatos', component: Contact },
    { path: '/', component: Home },
  ],
});
