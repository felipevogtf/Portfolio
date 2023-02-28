<script lang="ts">
import type { ContactoData } from "@/models/contacto-data.model";
import { useElementVisibility } from "@vueuse/core";
import { ref } from "vue";

export default {
  name: "ContactoComponent",
  props: {
    data: {
      type: Object as () => ContactoData,
      required: true,
    },
  },
  data() {
    return {
      visibleCounter: false,
    };
  },
  setup() {
    const target = ref(null);
    const targetIsVisible = useElementVisibility(target);

    return {
      target,
      targetIsVisible,
    };
  },
  methods: {
    setVisible() {
      this.visibleCounter = true;
    },
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
  <div class="contacto" ref="target">
    <!-- Inicio. Titulo -->
    <h2
      class="section-titulo"
      :class="fadeClass"
      style="animation-delay: 200ms"
    >
      {{ data.titulo }}
    </h2>
    <!-- Fin. Titulo -->

    <!-- Inicio. Texto -->
    <p class="contenido" :class="fadeClass" style="animation-delay: 250ms">
      {{ data.descripcion }}
    </p>
    <!-- Fin. Texto -->

    <!-- Inicio. Contacto button -->
    <div
      class="contacto-button"
      :class="fadeClass"
      style="animation-delay: 300ms"
    >
      <a
        class="contact-button"
        v-bind:href="`mailto:${data.email}`"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span>{{ data.boton_contacto }}</span>
      </a>
    </div>
    <!-- Fin. Contacto button -->
  </div>
</template>

<style lang="scss">
.contacto {
  align-items: center;
  .contenido {
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
