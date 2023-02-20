<script lang="ts">
import type { Proyecto } from "@/models/proyecto.model";
import type { ProyectosData } from "@/models/proyectos-data.model";
import { useElementVisibility } from "@vueuse/core";
import { ref } from "vue";

export default {
  name: "ProyectosComponent",
  props: {
    data: {
      type: Object as () => ProyectosData,
      required: true,
    },
  },
  data() {
    return {
      visibleCounter: 0,
    };
  },
  methods: {
    getLink(proyecto: Proyecto): string {
      let link: string = "";
      if (proyecto.demo_link) {
        link = proyecto.demo_link;
      } else if (proyecto.git_link) {
        link = proyecto.git_link;
      }

      return link;
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
  <div class="proyectos" ref="target">
    <div
      class="titulo text-h2"
      :class="fadeClass"
      style="animation-delay: 200ms"
    >
      {{ data.titulo }}
    </div>

    <div class="contenido">
      <div
        class="proyecto text-p"
        :class="[
          fadeClass,
          index % 2 === 0 ? 'position-left' : 'position-right',
        ]"
        style="animation-delay: 300ms"
        v-for="(item, index) in data.proyectos"
        :key="index"
      >
        <a
          class="img-wrapper"
          :href="getLink(item)"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img :src="item.imagen" alt="" />
        </a>
        <div
          class="proyecto-card"
          :class="index % 2 === 0 ? 'position-left' : 'position-right'"
        >
          <div class="text-h3 text-accent">{{ item.titulo }}</div>
          <div class="proyecto-descripcion">
            {{ item.descripcion }}
          </div>
          <div class="chips">
            <div
              class="chip"
              v-for="(tecnologia, index) in item.tecnologias"
              :key="index"
            >
              {{ tecnologia }}
            </div>
          </div>

          <div class="botonera">
            <a
              class="icon-button text-h3"
              v-if="item.git_link"
              :href="item.git_link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              class="icon-button text-h3"
              v-if="item.demo_link"
              :href="item.demo_link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.proyectos {
  .contenido {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    row-gap: 30px;
  }

  .proyecto {
    display: flex;
    align-items: center;
    justify-content: center;

    .proyecto-card {
      display: flex;
      flex-direction: column;
      color: var(--base-dark-text-color);
      padding: 50px;

      border-radius: 5px;
      backdrop-filter: blur(5.2px);

      background-position: center;
      box-shadow: inset 0 0 0 2000px rgb(0 0 0 / 83%),
        5px 5px 10px rgb(0 0 0 / 15%);
    }

    .proyecto-descripcion {
      margin-top: 10px;
    }

    .botonera {
      display: flex;
      flex-direction: row-reverse;
      margin-top: 40px;
      justify-content: flex-end;
      column-gap: 20px;

      .icon-button {
        font-size: xx-large;
      }
    }
  }

  .img-wrapper {
    visibility: hidden;
    width: 0;

    background: #279d7b;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgb(0 0 0 / 15%);

    transition: background 400ms;

    img {
      object-fit: cover;
      opacity: 0.5;
      width: 100%;
      filter: grayscale(100%);

      transition: filter 400ms, opacity 400ms;
      transform: scale(1.1);
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

@media screen and (min-width: 992px) {
  .proyectos {
    .contenido {
      row-gap: 100px;
    }

    .proyecto {
      .proyecto-card {
        width: 50%;
        position: relative;
        padding: 20px;
        background: rgba(0, 0, 0, 0.7) !important;
        box-shadow: 5px 5px 10px rgb(0 0 0 / 15%);
      }
    }
    .position-left {
      flex-direction: row;
      .proyecto-card {
        left: -100px;
      }

      .botonera {
        flex-direction: row;
      }
    }

    .position-right {
      flex-direction: row-reverse;
      .proyecto-card {
        right: -100px;
      }

      .botonera {
        flex-direction: row-reverse;
      }
    }

    .img-wrapper {
      visibility: visible;
      width: max-content;
      width: 50%;

      img {
        height: 500px;
      }
    }
  }
}
</style>
