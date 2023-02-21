<script lang="ts">
import type { ProyectosData } from "@/models/proyectos-data.model";
import type { Proyecto } from "@/models/proyecto.model";
import { useElementVisibility } from "@vueuse/core";
import { ref } from "vue";

export default {
  name: "OtrosProyectosComponent",
  props: {
    data: {
      type: Object as () => ProyectosData,
      required: true,
    },
  },
  data() {
    return {
      proyectos: [] as Proyecto[],
      visibleCounter: false,
    };
  },
  created() {
    this.proyectos = this.data.proyectos.slice(0, 6);
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
    setVisible() {
      this.visibleCounter = true;
    },
    mostrarMas() {
      const min = this.proyectos.length;
      const max = min + 6;

      const data = this.data.proyectos.slice(min, max);

      if (this.proyectos.length <= this.data.proyectos.length) {
        this.proyectos = this.proyectos.concat(data);
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
  <div class="otros-proyectos" ref="target" :class="fadeClass">
    <h2 class="titulo" style="animation-delay: 200ms">
      {{ data.titulo }}
    </h2>

    <div class="contenido" :class="fadeClass" style="animation-delay: 300ms">
      <TransitionGroup name="slide-up">
        <a
          class="card"
          v-for="(item, index) in proyectos"
          :href="getLink(item)"
          rel="noopener noreferrer"
          target="_blank"
          v-bind:key="index"
        >
          <div class="card-header">
            <h2 class="text-accent">
              <i class="fa-solid fa-code"></i>
            </h2>

            <div class="card-opciones">
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
          <h3 class="card-titulo text-accent">{{ item.titulo }}</h3>
          <p class="card-descripcion">{{ item.descripcion }}</p>
          <div class="chips">
            <span
              class="chip"
              v-for="(tecnologia, index) in item.tecnologias"
              :key="index"
            >
              {{ tecnologia }}
            </span>
          </div>
        </a>
      </TransitionGroup>
    </div>

    <Transition>
      <div class="mostrar-mas" v-if="proyectos.length < data.proyectos.length">
        <button class="outline-button" v-on:click="mostrarMas()">
          {{ data.boton_mostrar_mas }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
.otros-proyectos {
  .contenido {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
    width: 100%;

    .card {
      display: flex;
      flex-direction: column;
      .card-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .card-opciones {
        display: flex;
        flex-direction: row;
        column-gap: 15px;

        .icon-button {
          font-size: xx-large;
        }
      }

      .card-titulo {
        margin-top: 20px;
        padding-bottom: 20px;
      }

      .card-descripcion {
        padding-bottom: 20px;
      }

      padding: 20px;
      background: rgba(0, 0, 0, 0.7);
      border-radius: 5px;
      box-shadow: 5px 5px 10px rgb(0 0 0 / 15%);
      color: var(--base-dark-text-color);
      transition: transform 200ms, box-shadow 200ms;
    }

    .card:hover {
      cursor: pointer;
      box-shadow: 5px 12px 10px rgb(0 0 0 / 30%);
      transform: translateY(-10px);
    }
  }

  .mostrar-mas {
    margin-top: 50px;
    display: flex;
    width: 100%;
    justify-content: center;
  }
}
</style>
