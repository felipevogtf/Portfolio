<script lang="ts">
interface InicioData {
  titulo: string;
  subtitulo: string;
  descripcion: string;
}

export default {
  name: "PresentacionComponent",
  props: {
    data: {
      type: Object as () => InicioData,
      required: true,
    },
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add("typed-animation");
          return;
        }
      });
    });

    observer.observe(this.$el.querySelector(".typed"));
  },
};
</script>

<template>
  <div class="presentacion">
    <div class="titulo text-h1 fade-in">{{ data.titulo }}</div>
    <div class="sub-titulo text-h2 typed">{{ data.subtitulo }}</div>
    <div class="descripcion text-p fade-in">{{ data.descripcion }}</div>
  </div>
</template>

<style lang="scss">
.presentacion {
  color: white;
  min-height: 100vh;
  overflow-wrap: break-word;

  .sub-titulo {
    color: var(--primary-text-color);
    margin-top: 5px;
    max-width: min-content;
    animation-delay: 200ms;
  }

  .descripcion {
    margin-top: 20px;
    animation-delay: 300ms;
  }
}
</style>
