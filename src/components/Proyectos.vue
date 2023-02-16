<script lang="ts">
import type { Proyecto } from "@/models/Proyecto";
import type { ProyectosData } from "@/models/ProyectosData";

export default {
  name: "ProyectosComponent",
  props: {
    data: {
      type: Object as () => ProyectosData,
      required: true,
    },
  },
  methods: {
    abrir(url: string): void {
      if (url) {
        window.open(url, "_blank");
      }
    },
    abrirProyecto(proyecto: Proyecto): void {
      if (proyecto.demo_link) {
        this.abrir(proyecto.demo_link);
      } else if (proyecto.git_link) {
        this.abrir(proyecto.git_link);
      }
    },
  },
};
</script>

<template>
  <div class="proyectos">
    <div class="titulo text-h2 fade-in">{{ data.titulo }}</div>

    <div class="contenido">
      <div
        class="proyecto text-p fade-in"
        :class="index % 2 === 0 ? 'position-left' : 'position-right'"
        v-for="(item, index) in data.proyectos"
      >
        <div class="img-wrapper" v-on:click="abrirProyecto(item)">
          <img :src="item.imagen" alt="" />
        </div>
        <div
          class="proyecto-card"
          :class="index % 2 === 0 ? 'position-left' : 'position-right'"
          :style="{ backgroundImage: `url(${item.imagen})` }"
        >
          <div class="text-h3 text-accent">{{ item.titulo }}</div>
          <div class="proyecto-descripcion">
            {{ item.descripcion }}
          </div>
          <div class="chips">
            <div class="chip" v-for="(tecnologia, index) in item.tecnologias">
              {{ tecnologia }}
            </div>
          </div>

          <div class="botonera">
            <div
              class="icon-button text-h3"
              v-if="item.git_link"
              v-on:click="abrir(item.git_link)"
            >
              <i class="fa-brands fa-github"></i>
            </div>
            <div
              class="icon-button text-h3"
              v-if="item.demo_link"
              v-on:click="abrir(item.demo_link)"
            >
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.proyectos {
  margin-top: 100px;

  .contenido {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 20px;
    row-gap: 30px;
  }

  .proyecto {
    display: flex;
    align-items: center;
    justify-content: center;

    .proyecto-card {
      display: flex;
      flex-direction: column;
      color: white;
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
