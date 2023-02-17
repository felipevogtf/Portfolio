<script lang="ts">
import Presentacion from "../components/Presentacion.vue";
import SobreMi from "./../components/SobreMi.vue";
import Experiencia from "./../components/Experiencia.vue";
import Proyectos from "./../components/Proyectos.vue";
import OtrosProyectos from "./../components/OtrosProyectos.vue";
import Contacto from "./../components/Contacto.vue";
import Footer from "./../components/Footer.vue";
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
  },
  data() {
    return {
      data: null as any,
    };
  },
  created() {
    this.data = pageData.data;
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
    <section class="main-background">
      <Presentacion :data="data.inicio" />
    </section>
    <section>
      <SobreMi :data="data.sobre_mi" class="section-margin" />
    </section>
    <section>
      <Experiencia :data="data.experiencia" class="section-margin" />
    </section>
    <section>
      <Proyectos :data="data.proyectos" class="section-margin" />
    </section>
    <section>
      <OtrosProyectos :data="data.otros_proyectos" class="section-margin" />
    </section>
    <section>
      <Contacto :data="data.contacto" class="section-margin" />
    </section>
    <section>
      <Footer />
    </section>
  </main>
</template>

<style lang="scss">
.main-background {
  background-color: var(--base-color);
}

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
