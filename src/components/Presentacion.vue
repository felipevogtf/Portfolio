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
  data() {
    return {
      subtitulo: "",
      text: "",
      index: 0,
    };
  },
  created() {
    this.subtitulo = this.data.subtitulo;
  },
  mounted() {
    this.typing();
  },
  methods: {
    typing() {
      if (this.index < this.subtitulo.length) {
        this.text += this.subtitulo.charAt(this.index);
        this.index++;
        setTimeout(this.typing, 50);
      }
    },
  },
};
</script>

<template>
  <div class="presentacion">
    <div class="presentacion-titulo text-h1 fade-in">{{ data.titulo }}</div>
    <div class="presentacion-sub-titulo fade-in text-h2">
      {{ text }}

      <span
        class="blink"
        v-bind:class="text.length === subtitulo.length ? 'blink-animation' : ''"
      ></span>
    </div>
    <div class="presentacion-descripcion text-p fade-in">
      {{ data.descripcion }}
    </div>
  </div>
</template>

<style lang="scss">
.presentacion {
  color: var(--base-dark-text-color);
  min-height: 100vh;
  overflow-wrap: break-word;

  .presentacion-sub-titulo {
    color: var(--primary-text-color);
    margin-top: 5px;
  }

  .blink {
    border-right: 20px solid;
  }

  .blink-animation {
    animation: blinking 1s infinite;
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
