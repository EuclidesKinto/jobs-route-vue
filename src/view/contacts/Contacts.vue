<template>
<ContactList/>
</template>

<script>
import ContactList from '../../components/contacts/ContactList.vue';
export default {
  components: {
    ContactList,
  },
  name: 'Contacts',
  // methods: {
  //   voltar() {
  //     // this.$router.push('/');
  //     // this.$router.replace('/');
  //     // this.$router.go(-1);
  //     // this.$router.forward();
  //     this.$router.back();
  //   },
  // },
};
</script>

<style scoped>
</style>
