<script lang="ts">
import { RouterView } from "vue-router";
import json from "./assets/data/data.json";

export default {
  components: {
    RouterView,
  },
  created() {
    document.title = json.titulo_pagina;
  },
};
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
