<template>
  <div>
    <h3 class="font-weight-light">Detalhes do Contato com id: {{ id }}</h3>
    <router-link :to="`/contatos/${id}/editar`">Editr</router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id: this.$route.params.id
    }
  }
};
</script>
