<script lang="ts">
export default {
  data() {
    return {
      experiencia: ["bcn", "impact", "nueva gestion"],
      selected: "",
    };
  },
  created() {
    this.selected = this.experiencia[0];
  },
  methods: {
    cambiarExperiencia(num: number) {
      this.selected = this.experiencia[num];
    },
  },
};
</script>

<template>
  <div class="experiencia">
    <div class="titulo text-h2 fade-in">Experiencia</div>

    <div class="contenido text-p fade-in">
      <div class="botonera">
        <button
          v-on:click="cambiarExperiencia(0)"
          :class="selected === experiencia[0] ? 'active' : ''"
        >
          BCN School
        </button>
        <button
          v-on:click="cambiarExperiencia(1)"
          :class="selected === experiencia[1] ? 'active' : ''"
        >
          Impact
        </button>
        <button
          v-on:click="cambiarExperiencia(2)"
          :class="selected === experiencia[2] ? 'active' : ''"
        >
          Nueva Gestión
        </button>
      </div>

      <div class="contenido-box">
        <Transition name="slide-up">
          <div class="contenido-detalle" v-if="selected === 'bcn'">
            <div class="text-h3">
              Programador Full-Stack en
              <a
                class="text-link"
                href="https://bcnschool.com/"
                rel="noopener noreferrer"
                target="_blank"
                >BCN School</a
              >
            </div>
            <div>Mayo 2022 - Noviembre 2022</div>
            <div class="contenido-descripcion">
              <ul>
                <li>
                  Desarrollo del Front-end mediante Angular para plataforma
                  BCN360, que permite la personalización y administración de un
                  campus virtual.
                </li>
                <li>
                  Desarrollo de la API mediante Laravel para la plataforma
                  BCN360, que se encarga de interactuar con la base de datos y
                  los distintos servicios del campus virtual.
                </li>
              </ul>
            </div>
          </div>
          <div class="contenido-detalle" v-else-if="selected === 'impact'">
            <div class="text-h3">
              Programador Full-Stack en
              <a
                class="text-link"
                href="https://www.impact.cl/es/"
                rel="noopener noreferrer"
                target="_blank"
                >Impact Chile</a
              >
            </div>
            <div>Agosto 2021 - Mayo 2022</div>
            <div class="contenido-descripcion">
              <ul>
                <li>
                  Desarrollo y mantención de la aplicación móvil MiSQM realizada
                  en Ionic, que ofrece distintas funcionalidades para facilitar
                  la forma de trabajar de los empleados
                </li>
                <li>
                  Desarrollo y mantención de la API para la aplicación MiSQM,
                  mediante la librería Codeigniter.
                </li>
                <li>
                  Mantención de la pagina Wordpress de MiSQM y desarrollo de
                  nuevos plugins para el sitio.
                </li>
              </ul>
            </div>
          </div>
          <div
            class="contenido-detalle"
            v-else-if="selected === 'nueva gestion'"
          >
            <div class="text-h3">
              Programador Front-End en
              <a
                class="text-link"
                href="https://www.nuevagestion.cl/"
                rel="noopener noreferrer"
                target="_blank"
                >Nueva Gestión Software</a
              >
            </div>
            <div>Noviembre 2020 - Marzo 2021</div>
            <div class="contenido-descripcion">
              <ul>
                <li>
                  Desarrollo de minijuegos interactivos para la aplicación móvil
                  AcamyKids, los cuales están enfocados en facilitar el
                  aprendizaje de los estudiantes del segundo ciclo de enseñanza
                  básica.
                </li>
                <li>
                  Mantención de la API de AcamyKids mediante el framework
                  Laravel.
                </li>
              </ul>
            </div>
          </div>
        </Transition>
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

  .contenido-box {
    position: relative;
    min-height: 300px;
  }

  .contenido-detalle {
    position: absolute;

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
      transition: background 200ms;
      transition: color 200ms;
      transition: border-color 200ms;
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
  transform: translateY(-30px);
}
</style>
