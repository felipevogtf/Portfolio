<script lang="ts">
import { RouterView } from "vue-router";
import data from "./assets/data";

export default {
  components: {
    RouterView,
  },
  created() {
    document.title = data.titulo_pagina;
    
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", data.descripcion_pagina);
  },
};
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
