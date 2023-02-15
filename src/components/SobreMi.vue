<script lang="ts">
interface SobreMiData {
  titulo: string;
  contenido: string;
}

export default {
  name: "SobreMiComponent",
  props: {
    data: {
      type: Object as () => SobreMiData,
      required: true,
    },
  },
};
</script>

<template>
  <div class="sobre-mi">
    <div class="titulo text-h2 fade-in">{{ data.titulo }}</div>
    <div class="contenido text-p fade-in">{{ data.contenido }}</div>
  </div>
</template>

<style lang="scss">
.sobre-mi {
  margin-top: 100px;
  .contenido {
    animation-delay: 200ms;
    margin-top: 20px;
  }
}
</style>
