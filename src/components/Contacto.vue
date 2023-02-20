<script lang="ts">
import type { ContactoData } from "@/models/contacto-data.model";

export default {
  name: "ContactoComponent",
  props: {
    data: {
      type: Object as () => ContactoData,
      required: true,
    },
  },
};
</script>

<template>
  <div class="contacto">
    <div class="titulo text-h2 fade-in">{{ data.titulo }}</div>
    <div class="contenido text-p fade-in">{{ data.descripcion }}</div>
    <div class="contacto-button">
      <a
        class="outline-button"
        v-bind:href="`mailto:${data.email}`"
        rel="noopener noreferrer"
        target="_blank"
      >
        {{ data.boton_contacto }}
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.contacto {
  align-items: center;
  .contenido {
    animation-delay: 200ms;
    text-align: center;
  }

  .contacto-button {
    margin-top: 50px;
  }
}

@media screen and (min-width: 992px) {
  .contacto {
    .contenido {
      width: 50%;
    }
  }
}
</style>
