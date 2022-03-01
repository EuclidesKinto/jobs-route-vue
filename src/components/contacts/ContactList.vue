<template>
  <div>
  <h3 class="font-weight-light mt-4">Contatos</h3>
  <ul class="lis-group" v-if="contacts.length > 0">
    <ContactListItem 
    class="list-group-item" 
    v-for="contact in contacts"
    :key="contact.id"
    :contact="contact"/>
  </ul>
  <p v-else>Nenhum contato cadastrado</p>
  <button 
    class="btn btn-secondary mt-4 mb-4"
    @click="voltar"
  >
    Voltar
  </button>

  </div>
</template>

<script>
import ContactListItem from './ContactListItem.vue';
export default {
  components: {
    ContactListItem,
  },
  data() {
    return {
      contacts: [
        { id: 1, name: 'Isacc Newton', email: 'isacc@email.com' },
        { id: 2, name: 'Albert Einstein', email: 'albert@email.com' },
        { id: 3, name: 'Stephen Hawking', email: 'stephen@email.com' },
      ],
    };
  },
  methods: {
    voltar() {
      this.$router.back();
    },
  },
};
</script>

<style>
</style>
