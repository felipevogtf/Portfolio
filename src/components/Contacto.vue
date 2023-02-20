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
      visibleCounter: 0,
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
  computed: {
    fadeClass() {
      if (this.targetIsVisible && this.visibleCounter === 0) {
        this.visibleCounter++;
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
    <div
      class="titulo text-h2"
      :class="fadeClass"
      style="animation-delay: 200ms"
    >
      {{ data.titulo }}
    </div>
    <div
      class="contenido text-p"
      :class="fadeClass"
      style="animation-delay: 250ms"
    >
      {{ data.descripcion }}
    </div>
    <div
      class="contacto-button"
      :class="fadeClass"
      style="animation-delay: 300ms"
    >
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
