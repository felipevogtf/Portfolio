<script lang="ts">
import type { NavbarData } from "@/models/navbar-data.model";
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
      visibleCounter: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    handleFocusOut() {
      setTimeout(() => {
        this.showMobileMenu = false;
      }, 100);
    },
    setVisible() {
      this.visibleCounter = true;
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
  <div class="nav" ref="target">
    <div
      class="nav-menu"
      :class="fadeClass"
      style="animation-delay: 200ms"
      @focusout="handleFocusOut"
      tabindex="0"
    >
      <router-link to="/" class="logo">
        <img :src="data.logo" alt="logo" />
      </router-link>

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
          class="nav-link"
          v-for="(item, index) in data.items"
          :key="index"
          :href="`#${item.id}`"
          >{{ item.nombre }}</a
        >

        <a
          class="nav-button"
          rel="noopener noreferrer"
          target="_blank"
          :href="data.curriculum.link"
          v-if="data.curriculum.link"
          >{{ data.curriculum.nombre }}</a
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
  padding: 0px 20px;
}
.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
  padding: 20px 0px;
  a.nav-link {
    color: var(--base-dark-text-color);
    transition: color 200ms;
  }
  a.nav-link:hover {
    color: var(--primary-text-color-dark);
  }
}
.nav-toggle {
  visibility: hidden;
}
.logo {
  margin: 0;
  display: flex;
  align-items: center;

  img {
    height: 40px;
  }
}

.nav-button {
  background: none;
  color: var(--primary-text-color-dark);
  padding: 10px 20px;
  border: solid 2px;
  font-size: inherit;
  border-radius: 5px;
  transition: background 200ms;
}

.nav-button:hover {
  cursor: pointer;
  background: rgba(0, 227, 162, 0.1);
}

@media screen and (max-width: 992px) {
  .nav-menu {
    padding: 0;
    position: absolute;
    width: 100%;
    z-index: 100;
  }
  .logo {
    margin: 0px 10px;
  }
  .nav-toggle {
    visibility: visible;
    transition: background 200ms;

    padding-top: 12px;
    padding-left: 15px;
    padding-right: 15px;
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
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    a.nav-link {
      color: var(--base-text-color);
    }
    a.nav-link:hover {
      color: var(--base-dark-text-color);
    }

    .text-link {
      color: var(--base-dark-text-color) !important;
    }
  }

  .nav-button {
    background: none;
    color: var(--base-text-color);
    padding: 10px 20px;
    border: solid 2px;
    font-size: inherit;
    border-radius: 5px;
    transition: background 200ms;
  }

  .nav-button:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
