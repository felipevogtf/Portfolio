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
      :key="index"
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
    color: var(--text);
    transition: color 200ms;
    font-size: var(--font-xxl);
  }

  .social-button:hover {
    cursor: pointer;
    color: var(--primary);
  }
}

@media screen and (min-width: 992px) {
  .social {
    position: fixed;
    color: var(--text);
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin: 20px 50px;
    bottom: 0;

    .social-button {
      transition: transform 200ms;
      color: var(--text);
    }
    .social-button:hover {
      cursor: pointer;
      color: var(--text);
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
    background-color: var(--text);
  }
}
</style>
