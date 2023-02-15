<script lang="ts">
interface ExperienciaData {
  titulo: string;
  experiencias: ExperienciaLaboral[];
}

interface ExperienciaLaboral {
  empresa: string;
  empresa_abrev: string;
  empresa_link: string;
  cargo: string;
  fecha: string;
  funciones: string[];
}

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
  },
};
</script>

<template>
  <div class="experiencia">
    <div class="titulo text-h2 fade-in">{{ data.titulo }}</div>

    <div class="contenido text-p fade-in">
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
            <div class="text-h3">
              {{ item.cargo }}
              <a
                class="text-link"
                v-bind:href="item.empresa_link"
                rel="noopener noreferrer"
                target="_blank"
                >{{ item.empresa }}</a
              >
            </div>
            <div>{{ item.fecha }}</div>
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
  margin-top: 100px;
  .contenido {
    animation-delay: 200ms;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .contenido-detalle {
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

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  height: 0;
  transform: translateY(-30px);
}
</style>
