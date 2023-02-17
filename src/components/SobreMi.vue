<script lang="ts">
import type { SobreMiData } from "@/models/sobre-mi-data.model";

export default {
  name: "SobreMiComponent",
  props: {
    data: {
      type: Object as () => SobreMiData,
      required: true,
    },
  },
};
</script>

<template>
  <div class="sobre-mi">
    <div class="titulo text-h2 fade-in">{{ data.titulo }}</div>
    <div class="contenido fade-in">
      <div class="contenido-descripcion text-p">
        <div v-for="(item, index) in data.parrafos" class="parrafo text-p">
          {{ item }}
        </div>

        <div class="contenido-tecnologias">
          <div class="tecnologia" v-for="(item, index) in data.tecnologias">
            <img :src="item.icono" alt="" />
            <div class="tecnologia-nombre">{{ item.nombre }}</div>
          </div>
        </div>
      </div>
      <div class="contenido-imagen">{ACA LA IMAGEN</div>
    </div>
  </div>
</template>

<style lang="scss">
.sobre-mi {
  .contenido {
    animation-delay: 200ms;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .parrafo{
    margin-bottom: 20px;
  }
  .contenido-tecnologias {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    column-gap: 10px;
    row-gap: 10px;
    flex-wrap: wrap;
  }

  .tecnologia {
    display: flex;
    flex-direction: row;
    background: rgba(0, 227, 162, 0.9);
    color: white;
    border-radius: 5px;
    padding: 5px 10px;
    align-items: center;
    img {
      width: 30px;
      filter: brightness(0) invert(1);
    }

    .tecnologia-nombre {
      padding-left: 5px;
    }
  }
}

@media screen and (min-width: 992px) {
  .sobre-mi {
    .contenido {
      flex-direction: row;
      .contenido-descripcion {
        width: 60%;
      }

      .contenido-imagen {
        width: 40%;
      }
    }
  }
}
</style>
