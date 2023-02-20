<script lang="ts">
import Presentacion from "../components/Presentacion.vue";
import SobreMi from "./../components/SobreMi.vue";
import Experiencia from "./../components/Experiencia.vue";
import Proyectos from "./../components/Proyectos.vue";
import OtrosProyectos from "./../components/OtrosProyectos.vue";
import Contacto from "./../components/Contacto.vue";
import Footer from "./../components/Footer.vue";
import RedesSociales from "./../components/RedesSociales.vue";
import { pageData } from "./../store/data";

export default {
  components: {
    Presentacion,
    SobreMi,
    Experiencia,
    Proyectos,
    OtrosProyectos,
    Contacto,
    Footer,
    RedesSociales,
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
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add("fade-in-animation");
          return;
        }
      });
    });

    this.$el.querySelectorAll(".fade-in").forEach((i: any) => {
      if (i) {
        observer.observe(i);
      }
    });
  },
};
</script>

<template>
  <main>
    <div class="nav">
      <div class="nav-logo fade-in">FV</div>
      <div class="nav-link fade-in">
        <a href="#sobre-mi">Sobre mi</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#footer">Contacto</a>
      </div>
    </div>
    <section class="main-background" :style="styleObject">
      <Presentacion :data="data.inicio" />
    </section>
    <section>
      <SobreMi id="sobre-mi" :data="data.sobre_mi" class="section-margin" />
    </section>
    <section>
      <Experiencia
        id="experiencia"
        :data="data.experiencia"
        class="section-margin"
      />
    </section>
    <section>
      <Proyectos id="proyectos" :data="data.proyectos" class="section-margin" />
    </section>
    <section>
      <OtrosProyectos :data="data.otros_proyectos" class="section-margin" />
    </section>
    <section>
      <Contacto :data="data.contacto" class="section-margin" />
    </section>
    <section id="footer">
      <Footer />
    </section>

    <RedesSociales :data="data.redes"></RedesSociales>
  </main>
</template>

<style lang="scss">
.main-background {
  background-color: var(--base-color);
  background-blend-mode: multiply;
}

.nav {
  background-color: var(--base-color);
  color: var(--base-dark-text-color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 30px;

  .nav-link {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    a{
      color: var(--base-dark-text-color);
    }

    a:hover{
      color: var(--primary-text-color-dark);
    }
  }
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
