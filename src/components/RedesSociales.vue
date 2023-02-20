<script lang="ts">
import type { RedesData } from "@/models/redes-data.model";

export default {
  name: "RedesSociales",
  props: {
    data: {
      type: Object as () => RedesData,
      required: true,
    },
  },
};
</script>

<template>
  <div class="social">
    <a
      class="social-button text-h3"
      rel="noopener noreferrer"
      target="_blank"
      :href="item.url"
      v-for="(item, index) in data.redes"
    >
      <i :class="item.fontawesome_icon"></i>
    </a>
  </div>
</template>

<style lang="scss">
.social {
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 20px;
  margin-bottom: 20px;

  .social-button {
    color: var(--base-text-color);
    transition: color 200ms;
  }

  .social-button:hover {
    cursor: pointer;
    color: var(--primary-text-color-dark);
  }
}

@media screen and (min-width: 992px) {
  .social {
    mix-blend-mode: difference;
    position: fixed;
    color: var(--base-dark-text-color);
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin: 20px 50px;
    bottom: 0;

    .social-button {
      transition: transform 200ms;
      color: var(--base-dark-text-color);
    }
    .social-button:hover {
      cursor: pointer;
      color: var(--base-dark-text-color);
      transform: scale(1.2);
    }
  }

  .social::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    margin-bottom: -20px;
    background-color: var(--base-dark-text-color);
}
}
</style>
