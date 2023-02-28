<script lang="ts">
import type { ExperienciaData } from "@/models/experiencia-data.model";
import { useElementVisibility } from "@vueuse/core";
import { ref } from "vue";

export default {
  name: "ExperienciaComponent",
  props: {
    data: {
      type: Object as () => ExperienciaData,
      required: true,
    },
  },
  data() {
    return {
      selected: [this.data.experiencias[0]],
      navs: [""],
      visibleCounter: false,
    };
  },
  created() {
    this.navs = this.data.experiencias.map((obj) => obj.empresa_abrev);
  },
  methods: {
    cambiarExperiencia(num: number): void {
      this.selected.splice(0, this.selected.length);
      this.selected.push(this.data.experiencias[num]);
    },
    setVisible(): void {
      this.visibleCounter = true;
    },
    getActiveClass(index: number): string {
      return JSON.stringify(this.selected[0]) ===
        JSON.stringify(this.data.experiencias[index])
        ? "active"
        : "";
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
  <div class="experiencia" ref="target">
    <!-- Inicio. titulo -->
    <h2
      class="section-titulo"
      :class="fadeClass"
      style="animation-delay: 200ms"
    >
      {{ data.titulo }}
    </h2>
    <!-- Fin. Titulo -->

    <div class="contenido" :class="fadeClass" style="animation-delay: 300ms">
      <!-- Inicio. Botonera/Tabs -->
      <div class="botonera">
        <button
          v-for="(item, index) in navs"
          :key="item"
          v-on:click="cambiarExperiencia(index)"
          :class="getActiveClass(index)"
        >
          {{ item }}
        </button>
      </div>
      <!-- Fin. Botonera/Tabs -->

      <!-- Inicio. Contenido -->
      <div class="contenido-box">
        <TransitionGroup name="slide-up">
          <div
            class="contenido-detalle"
            v-for="item in selected"
            v-bind:key="item.empresa_abrev"
          >
            <h3>
              {{ item.cargo }}
              <a
                class="text-link"
                v-bind:href="item.empresa_link"
                rel="noopener noreferrer"
                target="_blank"
                >{{ item.empresa }}</a
              >
            </h3>
            <h4>{{ item.fecha }}</h4>
            <div class="contenido-descripcion">
              <ul>
                <li v-for="funcion in item.funciones" v-bind:key="funcion">
                  {{ funcion }}
                </li>
              </ul>
            </div>
          </div>
        </TransitionGroup>
      </div>
      <!-- Fin. Contenido -->
    </div>
  </div>
</template>

<style lang="scss">
.experiencia {
  .contenido {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .contenido-detalle {
    h3 {
      font-weight: bold;
    }
    h4 {
      margin-top: 5px;
      color: var(--text);
    }
    .contenido-descripcion {
      margin-top: 10px;

      ul {
        padding-left: 20px;
        margin: 0;
      }

      ul li {
        margin-bottom: 10px;
      }
    }
  }

  .botonera {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-bottom: 10px;
    overflow-y: auto;

    button {
      width: 100%;
      background: none;
      padding: 10px;
      border-style: solid;
      border-color: var(--tabs-border);
      color: var(--text);
      border-width: 0px 0px 2px 0px;
      font-size: var(--font-xl);
      font-family: inherit;
      transition: background 200ms, color 200ms, border-color 300ms;
    }

    button:hover {
      cursor: pointer;
      color: var(--primary);
      background: var(--tabs-hover);
    }

    .active {
      border-color: var(--primary);
      color: var(--primary);
    }
  }
}

@media screen and (min-width: 992px) {
  .experiencia {
    .contenido {
      flex-direction: row;
    }

    .botonera {
      flex-direction: column;
      width: 20%;

      button {
        border-width: 0 0px 0px 2px;
      }
    }

    .contenido-box {
      width: 80%;
      padding-left: 20px;
    }
  }
}
</style>
