<script lang="ts">
import type { InicioData } from "@/models/inicio-data.model";
import { useElementVisibility } from "@vueuse/core";
import { ref } from "vue";

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
      visibleCounter: 0,
    };
  },
  created() {
    this.subtitulo = this.data.subtitulo;
  },
  mounted() {
    setTimeout(this.typing, 400);
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
  setup() {
    const target = ref(null);
    const targetIsVisible = useElementVisibility(target);

    return {
      target,
      targetIsVisible,
    };
  },
  computed: {
    fadeClass() {
      if (this.targetIsVisible && this.visibleCounter === 0) {
        this.visibleCounter++;
        return "fade-in fade-in-animation";
      } else {
        return "";
      }
    },
  },
};
</script>

<template>
  <div class="presentacion" ref="target">
    <div
      class="presentacion-titulo text-h1"
      :class="fadeClass"
      style="animation-delay: 200ms"
    >
      {{ data.titulo }}
    </div>
    <div
      class="presentacion-sub-titulo text-h2"
      :class="fadeClass"
      style="animation-delay: 300ms"
    >
      {{ text }}

      <span
        class="blink"
        v-bind:class="text.length === subtitulo.length ? 'blink-animation' : ''"
      ></span>
    </div>
    <div
      class="presentacion-descripcion text-p"
      :class="fadeClass"
      style="animation-delay: 400ms"
    >
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
