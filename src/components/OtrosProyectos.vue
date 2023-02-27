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
    <!-- Inicio. Titulo -->
    <h2 class="section-titulo" style="animation-delay: 200ms">
      {{ data.titulo }}
    </h2>
    <!-- Fin. Titulo -->

    <div class="contenido" :class="fadeClass" style="animation-delay: 300ms">
      <TransitionGroup name="slide-up">
        <a
          class="wrap-card"
          v-for="(item, index) in proyectos"
          :href="getLink(item)"
          rel="noopener noreferrer"
          target="_blank"
          v-bind:key="index"
        >
          <div class="card">
            <!-- Inicio. Chips -->
            <div class="chips">
              <span
                class="chip-span"
                v-for="(tecnologia, index) in item.tecnologias"
                :key="index"
              >
                {{ tecnologia }}
              </span>
            </div>
            <!-- Fin. Chips -->

            <!-- Inicio. Texto  -->
            <h3 class="card-titulo">{{ item.titulo }}</h3>
            <p class="card-descripcion">{{ item.descripcion }}</p>
            <!-- Fin. Texto -->

            <!-- Inicio. Botones -->
            <div class="card-opciones">
              <a
                class="icon-button"
                v-if="item.git_link"
                :href="item.git_link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fa-brands fa-github"></i>
              </a>
              <a
                class="icon-button"
                v-if="item.demo_link"
                :href="item.demo_link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
            <!-- Fin. Botones -->
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

    .wrap-card {
      display: flex;
      background: linear-gradient(
        to right top,
        var(--primary),
        var(--secondary) 50%,
        var(--tertiary) 100%
      );
      padding: 3px;
      border-radius: 5px;
      transition: transform 200ms, box-shadow 200ms;
    }

    .card {
      display: flex;
      flex-direction: column;

      .card-opciones {
        margin-top: auto;
        display: flex;
        flex-direction: row;
        column-gap: 15px;
        justify-content: flex-end;
      }

      .card-titulo {
        margin-top: 20px;
        padding-bottom: 20px;
        color: var(--text);
        font-family: LatoBlack;
      }

      .card-descripcion {
        padding-bottom: 20px;
      }

      padding: 20px;
      background: var(--background);
      border-radius: 5px;
    }

    .wrap-card:hover {
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
