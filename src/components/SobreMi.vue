<script lang="ts">
import type { SobreMiData } from "@/models/sobre-mi-data.model";
import { useElementVisibility } from "@vueuse/core";
import { ref } from "vue";

export default {
  name: "SobreMiComponent",
  props: {
    data: {
      type: Object as () => SobreMiData,
      required: true,
    },
  },
  data() {
    return {
      visibleCounter: 0,
    };
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
  <div class="sobre-mi" ref="target">
    <div
      class="titulo text-h2"
      :class="fadeClass"
      style="animation-delay: 200ms"
    >
      {{ data.titulo }}
    </div>
    <div class="contenido" :class="fadeClass" style="animation-delay: 300ms">
      <div class="contenido-descripcion text-p">
        <div
          v-for="(item, index) in data.parrafos"
          class="parrafo text-p"
          :key="index"
        >
          {{ item }}
        </div>

        <div class="contenido-tecnologias">
          <div
            class="chips-icon"
            v-for="(item, index) in data.tecnologias"
            :key="index"
          >
            <img class="chips-icon-svg" :src="item.icono" alt="" />
            <div class="chips-icon-name">{{ item.nombre }}</div>
          </div>
        </div>
      </div>

      <div class="contenido-imagen">
        <a
          class="img-wrapper"
          :href="data.perfil_link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img :src="data.imagen" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.sobre-mi {
  .contenido {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 20px;
  }

  .parrafo {
    margin-bottom: 20px;
  }
  .contenido-tecnologias {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .contenido-imagen {
    display: flex;
    justify-content: center;
    flex-direction: row;

    .img-wrapper {
      height: fit-content;

      background: #279d7b;
      overflow: hidden;
      border-radius: 50%;
      transition: background 400ms;
      box-shadow: 5px 5px 10px rgb(0 0 0 / 15%);

      img {
        width: 100%;
        height: 300px;
        width: 300px;
        object-fit: cover;
        opacity: 0.7;
        transform: scale(1.1);
        filter: grayscale(30%);
        transition: filter 400ms, opacity 400ms;
      }
    }

    .img-wrapper:hover {
      cursor: pointer;
      background: none;
      img {
        opacity: 1;
        filter: grayscale(10%);
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .sobre-mi {
    .contenido {
      flex-direction: row;
      .contenido-descripcion {
        width: 50%;
      }

      .contenido-imagen {
        width: calc(50% - 20px);
      }
    }
  }
}
</style>
