<script lang="ts">
import type { InicioData } from "@/models/inicio-data.model";

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
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
    <div class="presentacion-titulo text-h1 fade-in">{{ data.titulo }}</div>
    <div class="presentacion-sub-titulo text-h2 typed">
      {{ data.subtitulo }}
    </div>
    <div class="presentacion-descripcion text-p fade-in">
      {{ data.descripcion }}
    </div>
  </div>
</template>

<style lang="scss">
.presentacion {
  color: white;
  min-height: 100vh;
  overflow-wrap: break-word;

  .presentacion-sub-titulo {
    color: var(--primary-text-color);
    margin-top: 5px;
    max-width: min-content;
    animation-delay: 200ms;
  }

  .presentacion-descripcion {
    margin-top: 20px;
    animation-delay: 300ms;
    width: 100%;
  }
}

@media screen and (min-width: 992px) {
  .presentacion {
    .presentacion-descripcion {
      width: 50%;
    }
  }
}
</style>
