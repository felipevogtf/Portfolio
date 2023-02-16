<script lang="ts">
import type { ProyectosData } from "@/models/ProyectosData";
import type { Proyecto } from "@/models/Proyecto";
export default {
  name: "OtrosProyectosComponent",
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
  <div class="otros-proyectos">
    <div class="titulo text-h2 fade-in">{{ data.titulo }}</div>

    <div class="contenido fade-in">
      <div
        class="card"
        v-for="(item, index) in data.proyectos"
        v-on:click="abrirProyecto(item)"
      >
        <div class="card-header">
          <div class="text-h2 text-accent">
            <i class="fa-solid fa-code"></i>
          </div>

          <div class="card-opciones">
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
        <div class="card-titulo text-h3 text-accent">{{ item.titulo }}</div>
        <div class="card-descripcion">{{ item.descripcion }}</div>
        <div class="chips">
          <div class="chip" v-for="(tecnologia, index) in item.tecnologias">
            {{ tecnologia }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.otros-proyectos {
  margin-top: 100px;

  .contenido {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
    width: 100%;
    margin-top: 20px;

    .card {
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
      }

      .card-titulo {
        margin-top: 20px;
        padding-bottom: 20px;
      }

      padding: 20px;
      background: rgba(0, 0, 0, 0.7);
      border-radius: 5px;
      box-shadow: 5px 5px 10px rgb(0 0 0 / 15%);
      color: white;
      transition: transform 200ms, box-shadow 200ms;
    }

    .card:hover {
      cursor: pointer;
      box-shadow: 5px 12px 10px rgb(0 0 0 / 30%);
      transform: translateY(-10px);
    }
  }
}
</style>
