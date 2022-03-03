<template>
<div>
  <div class="alert alert-danger">
    <h3 class="text-center">Erro 404</h3>
    <h3 class="text-center">Página nã encontrada...</h3>
  </div>
    <button
      class="btn btn-secundary mt-4 mb-4"
      @click="$router.back()"
  >
    Voltar
  </button>
</div>
</template>

<script>
export default {};
</script>
