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
      visibleCounter: false,
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
    setVisible() {
      this.visibleCounter = true;
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
      if (this.targetIsVisible && !this.visibleCounter) {
        this.setVisible();
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
    <h1
      class="presentacion-titulo"
      :class="fadeClass"
      style="animation-delay: 200ms"
    >
      {{ data.titulo }}
    </h1>
    <h2
      class="presentacion-sub-titulo"
      :class="fadeClass"
      style="animation-delay: 300ms"
    >
      {{ text }}

      <span
        class="blink"
        v-bind:class="text.length === subtitulo.length ? 'blink-animation' : ''"
      ></span>
    </h2>
    <p
      class="presentacion-descripcion"
      :class="fadeClass"
      style="animation-delay: 400ms"
    >
      {{ data.descripcion }}
    </p>
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
