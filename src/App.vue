<script lang="ts">
import { RouterView } from "vue-router";
import { pageData } from "./store/data";

export default {
  components: {
    RouterView,
  },
  data() {
    return {
      data: null as any,
    };
  },
  async created() {
    const response = await fetch("/data/data.json");
    const file = await response.json();

    pageData.setData(file);

    document.title = pageData.data.titulo_pagina;
  },
};
</script>

<template>
  <RouterView :model="data" />
</template>

<style scoped></style>
