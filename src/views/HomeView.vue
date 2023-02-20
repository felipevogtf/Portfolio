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
import { pageData } from "./../store/data";

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
      styleObject: {},
    };
  },
  created() {
    this.data = pageData.data;
    this.styleObject = {
      "--background": `url(${this.data.inicio.background})`,
      // etc...
    };
  },
};
</script>

<template>
  <main>
    <Navbar :data="data.navbar"></Navbar>
    <section class="main-background" :style="styleObject">
      <Presentacion :id="data.inicio.id" :data="data.inicio" />
    </section>
    <section>
      <SobreMi
        :id="data.sobre_mi.id"
        :data="data.sobre_mi"
        class="section-margin"
      />
    </section>
    <section>
      <Experiencia
        :id="data.experiencia.id"
        :data="data.experiencia"
        class="section-margin"
      />
    </section>
    <section>
      <Proyectos
        :id="data.proyectos.id"
        :data="data.proyectos"
        class="section-margin"
      />
    </section>
    <section>
      <OtrosProyectos
        :id="data.otros_proyectos.id"
        :data="data.otros_proyectos"
        class="section-margin"
      />
    </section>
    <section>
      <Contacto
        ref="test"
        :id="data.contacto.id"
        :data="data.contacto"
        class="section-margin"
      />
    </section>
    <section>
      <Copyrigth />
    </section>

    <RedesSociales :id="data.redes.id" :data="data.redes"></RedesSociales>
  </main>
</template>

<style lang="scss">
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
}

.section-margin {
  margin-top: 100px;
  margin-bottom: 100px;
}

@media screen and (min-width: 992px) {
  section > div {
    width: 60%;
  }
}
</style>
