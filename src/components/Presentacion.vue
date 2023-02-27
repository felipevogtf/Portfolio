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
      typingData: {
        presentacion: {
          text: "",
          index: 0,
          time: 50,
        },
        subtitulo: {
          text: "",
          index: 0,
          time: 20,
        },
        titulo: {
          text: "",
          index: 0,
          time: 50,
        },
        descripcion: {
          text: "",
          index: 0,
          time: 5,
        },
        pIndex: 0,
        sIndex: 0,
        tIndex: 0,
        dIndex: 0,
      },
      visibleCounter: false,
    };
  },
  created() {},
  mounted() {
    setTimeout(this.typing, 300);
  },
  methods: {
    typing() {
      let text: any = {};
      let initialData = "";

      if (
        this.typingData.presentacion.index !== this.data.presentacion.length
      ) {
        text = this.typingData.presentacion;
        initialData = this.data.presentacion;
      } else if (this.typingData.titulo.index !== this.data.titulo.length) {
        text = this.typingData.titulo;
        initialData = this.data.titulo;
      } else if (
        this.typingData.subtitulo.index !== this.data.subtitulo.length
      ) {
        text = this.typingData.subtitulo;
        initialData = this.data.subtitulo;
      } else if (
        this.typingData.descripcion.index !== this.data.descripcion.length
      ) {
        text = this.typingData.descripcion;
        initialData = this.data.descripcion;
      }

      if (text.index !== initialData.length) {
        text.text += initialData.charAt(text.index);
        text.index++;
        setTimeout(this.typing, text.time);
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
    <h2 class="sup-titulo">
      {{ typingData.presentacion.text }}

      <span
        class="blink"
        v-if="
          typingData.presentacion.text.length !== data.presentacion.length &&
          typingData.presentacion.text.length !== 0
        "
      ></span>
    </h2>
    <h1 class="titulo">
      {{ typingData.titulo.text }}

      <span
        class="blink"
        v-if="
          typingData.titulo.text.length !== data.titulo.length &&
          typingData.titulo.text.length !== 0
        "
      ></span>
    </h1>
    <h2 class="sub-titulo gradient-text">
      {{ typingData.subtitulo.text }}

      <span
        class="blink"
        v-if="
          typingData.subtitulo.text.length !== data.subtitulo.length &&
          typingData.subtitulo.text.length !== 0
        "
      ></span>
    </h2>
    <p class="descripcion">
      {{ typingData.descripcion.text }}

      <span
        class="blink"
        v-if="
          typingData.descripcion.text.length !== data.descripcion.length &&
          typingData.descripcion.text.length !== 0
        "
      ></span>
    </p>
  </div>
</template>

<style lang="scss">
.presentacion {
  color: var(--base-dark-text-color);
  min-height: 100vh;
  overflow-wrap: break-word;

  .sup-titulo {
    font-weight: bold;
  }

  .sub-titulo {
    font-family: "LatoBlack";
    font-size: clamp(1.5rem, 8vw, 6rem);
  }

  .blink {
    border-right: 0.15rem solid;
  }

  .descripcion {
    color: var(--text-opacity);
    margin-top: 20px;
    width: 100%;
  }
}

@media screen and (min-width: 992px) {
  .presentacion {
    .descripcion {
      width: 50%;
    }
  }
}
</style>
