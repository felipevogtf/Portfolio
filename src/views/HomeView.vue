<script lang="ts">
import Presentacion from "../components/Presentacion.vue";
import SobreMi from "./../components/SobreMi.vue";
import Experiencia from "./../components/Experiencia.vue";
import Proyectos from "./../components/Proyectos.vue";
import OtrosProyectos from "./../components/OtrosProyectos.vue";
import Contacto from "./../components/Contacto.vue";
import Copyrigth from "../components/Copyrigth.vue";
import RedesSociales from "./../components/RedesSociales.vue";
import Navbar from "./../components/Navbar.vue";

export default {
  components: {
    Presentacion,
    SobreMi,
    Experiencia,
    Proyectos,
    OtrosProyectos,
    Contacto,
    Copyrigth,
    RedesSociales,
    Navbar,
  },
  data() {
    return {
      data: null as any,
    };
  },
  async mounted() {
    const baseUrl = import.meta.env.VITE_URL;
    const response = await fetch(`${baseUrl}data/data.json`);
    const file = await response.json();
    this.data = file;
  },
};
</script>

<template>
  <main role="main" v-if="data">
    <nav role="navigation">
      <Navbar :data="data.navbar"></Navbar>
    </nav>

    <div class="glow"></div>

    <section role="region" :aria-labelledby="data.inicio.id">
      <Presentacion :id="data.inicio.id" :data="data.inicio" />
    </section>

    <div class="glow glow-right"></div>
    <section role="region" :aria-labelledby="data.sobre_mi.id">
      <SobreMi
        :id="data.sobre_mi.id"
        :data="data.sobre_mi"
        class="section-margin"
      />
    </section>
    <section role="region" :aria-labelledby="data.experiencia.id">
      <Experiencia
        :id="data.experiencia.id"
        :data="data.experiencia"
        class="section-margin"
      />
    </section>
    <section role="region" :aria-labelledby="data.proyectos.id">
      <Proyectos
        :id="data.proyectos.id"
        :data="data.proyectos"
        class="section-margin"
      />
    </section>
    <section role="region" :aria-labelledby="data.otros_proyectos.id">
      <OtrosProyectos
        :id="data.otros_proyectos.id"
        :data="data.otros_proyectos"
        class="section-margin"
      />
    </section>
    <section role="region" :aria-labelledby="data.contacto.id">
      <Contacto
        ref="test"
        :id="data.contacto.id"
        :data="data.contacto"
        class="section-margin"
      />
    </section>
    <footer role="contentinfo">
      <Copyrigth />
    </footer>

    <RedesSociales :id="data.redes.id" :data="data.redes"></RedesSociales>
  </main>

  <div class="main-background load-full-page" v-else>
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss">
.glow {
  position: absolute;
  width: 0px;
  height: 0px;
  box-shadow: 0 0 120px 60px var(--tertiary-glow),
    0 120px 200px 120px var(--secondary-glow), 120px 0 280px 180px var(--primary-glow);
  z-index: -1;
  align-self: flex-start;
}

.glow-right {
  right: 0;
}

.load-full-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--base-dark-text-color);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

.main-background {
  background-color: var(--base-color);
  background-blend-mode: multiply;
}

// .main-background::before {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: var(--background);
//   background-repeat: no-repeat;
//   background-position: right;
//   background-size: contain;
//   opacity: 0.3;
// }

footer,
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

section > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 10px;
  width: 90%;
  max-width: 2000px;
}

footer > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 10px;
  width: 90%;
  max-width: 2000px;
}

.section-margin {
  margin-top: 100px;
  margin-bottom: 100px;
}

@media screen and (min-width: 992px) {
  section > div {
    width: 60%;
  }

  footer > div {
    width: 60%;
  }
}
</style>
