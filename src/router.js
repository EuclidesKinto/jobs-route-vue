import Vue from 'vue';
import VueRouter from 'vue-router';
import Contacts from '@/view/contacts/Contacts';
import Contact from '@/view/contacts/Contact';
import Home from '@/view/Home';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/contatos', component: Contacts },
    { path: '/contatos/:id', component: Contact },
    { path: '/', component: Home },
  ],
});
