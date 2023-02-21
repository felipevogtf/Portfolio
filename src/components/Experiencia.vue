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
    cambiarExperiencia(num: number) {
      this.selected.splice(0, this.selected.length);
      this.selected.push(this.data.experiencias[num]);
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
  <div class="experiencia" ref="target">
    <h2 class="titulo" :class="fadeClass" style="animation-delay: 200ms">
      {{ data.titulo }}
    </h2>

    <div class="contenido" :class="fadeClass" style="animation-delay: 300ms">
      <div class="botonera">
        <button
          v-for="(item, index) in navs"
          :key="item"
          v-on:click="cambiarExperiencia(index)"
          :class="
            JSON.stringify(selected[0]) ===
            JSON.stringify(data.experiencias[index])
              ? 'active'
              : ''
          "
        >
          {{ item }}
        </button>
      </div>

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
    h4 {
      margin-top: 5px;
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
      border-color: rgba(0, 0, 0, 0.1);
      color: var(--base-text-color);
      border-width: 0px 0px 2px 0px;
      font-size: inherit;
      font-family: inherit;
      transition: background 200ms, color 200ms, border-color 300ms;
    }

    button:hover {
      cursor: pointer;
      color: var(--primary-text-color-dark);
      background: var(--background-color-dark);
    }

    .active {
      border-color: var(--primary-text-color-dark);
      color: var(--primary-text-color-dark);
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
