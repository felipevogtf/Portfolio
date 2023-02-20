<script lang="ts">
import type { NavbarData } from "@/models/navbar.model";
import { useElementVisibility } from "@vueuse/core";
import { ref } from "vue";

export default {
  name: "NavbarComponent",
  props: {
    data: {
      type: Object as () => NavbarData,
      required: true,
    },
  },
  data() {
    return {
      showMobileMenu: false,
      visibleCounter: 0,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
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
  <div class="nav" ref="target">
    <div class="nav-menu" :class="fadeClass" style="animation-delay: 200ms">
      <div class="logo">FV</div>

      <div
        class="nav-toggle"
        @click="showMenu()"
        :class="showMobileMenu ? 'active-toggle' : ''"
      >
        <i class="fas fa-bars"> </i>
      </div>

      <div
        class="nav-content"
        :class="showMobileMenu ? 'open-menu' : 'closed-menu'"
      >
        <a
          v-for="(item, index) in data.items"
          :key="index"
          :href="`#${item.id}`"
          >{{ item.nombre }}</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.nav {
  background: var(--base-color);
}
.nav-menu {
  color: var(--base-dark-text-color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 20px;
}
.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
  padding: 20px 0px;
  a {
    color: var(--base-dark-text-color);
  }
  a:hover {
    color: var(--primary-text-color-dark);
  }
}
.nav-toggle {
  visibility: hidden;
}
.logo {
  margin: 20px 10px;
}

@media screen and (max-width: 768px) {
  .nav-menu {
    padding: 0;
    position: absolute;
    width: 100%;
  }
  .logo {
    margin-left: 20px;
    margin-top: 10px;
  }
  .nav-toggle {
    padding: 10px 20px;
    visibility: visible;
    margin-right: 20px;
  }
  .nav-toggle:hover {
    cursor: pointer;
    background: var(--base-color-dark);
  }

  .active-toggle {
    background: var(--primary-text-color-dark);
  }

  .active-toggle:hover {
    background: var(--primary-text-color-darken);
  }

  .open-menu {
    opacity: 1;
    height: 150px;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  .nav-content {
    background: var(--primary-text-color-dark);
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
    flex-basis: 100%;
    a {
      color: var(--base-text-color);
    }
    a:hover {
      color: var(--base-dark-text-color);
    }
  }
}
</style>
