import Vue from 'vue';
import VueRouter from 'vue-router';
import Contacts from '@/view/contacts/Contacts';
import Contact from '@/view/contacts/Contact';
import ContactHome from '@/view/contacts/ContactHome';
import Home from '@/view/Home';
import ContactEdit from "@/view/contacts/ContactEdit";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/contatos',
      component: Contacts,
      children: [
        { path: ':id', component: Contact, name: 'contato' },
        {
          path: ':id/editar',
          components: {
            default: ContactEdit,
            'contato-detalhes': Contact
          }
        },
        { path: '', component: ContactHome },
      ],
    },
    { path: '/', component: Home },
  ],
});
