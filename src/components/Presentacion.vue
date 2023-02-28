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
      },
      visibleCounter: false,
    };
  },
  created() {},
  mounted() {
    setTimeout(this.typing, 300);
  },
  methods: {
    typing(): void {
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
    setVisible(): void {
      this.visibleCounter = true;
    },
    checkTypingEnd(text: any, initialText: any): boolean {
      return text.length !== initialText.length && text.length !== 0;
    },
  },
};
</script>

<template>
  <div class="presentacion">
    <!-- Inicio. Presentacion -->
    <h2 class="sup-titulo">
      {{ typingData.presentacion.text }}
      <span
        class="blink"
        v-if="checkTypingEnd(typingData.presentacion.text, data.presentacion)"
      ></span>
    </h2>
    <!-- Inicio. Presentacion -->

    <!-- Fin. Titulo -->
    <h1 class="titulo">
      {{ typingData.titulo.text }}
      <span
        class="blink"
        v-if="checkTypingEnd(typingData.titulo.text, data.titulo)"
      ></span>
    </h1>
    <!-- Fin. Titulo -->

    <!-- Inicio. Subtitulo -->
    <h2 class="sub-titulo gradient-text">
      {{ typingData.subtitulo.text }}
      <span
        class="blink"
        v-if="checkTypingEnd(typingData.subtitulo.text, data.subtitulo)"
      ></span>
    </h2>
    <!-- Fin. Subtitulo -->

    <!-- Inicio. Descripcion -->
    <p class="descripcion">
      {{ typingData.descripcion.text }}
      <span
        class="blink"
        v-if="checkTypingEnd(typingData.descripcion.text, data.descripcion)"
      ></span>
    </p>
    <!-- Fin. Descripcion -->
  </div>
</template>

<style lang="scss">
.presentacion {
  min-height: 100vh;

  .sup-titulo {
    font-weight: bold;
  }

  .sub-titulo {
    font-family: "LatoBlack";
    font-size: clamp(var(--font-xxl), 8vw, var(--font-super-xl));
  }

  .blink {
    border-right: var(--blink-size) solid;
  }

  .descripcion {
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
