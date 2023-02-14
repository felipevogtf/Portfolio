<script lang="ts">
export default {
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add("typed-animation");
          return;
        }
      });
    });

    observer.observe(this.$el.querySelector(".typed"));
  },
};
</script>

<template>
  <div class="presentacion">
    <div class="titulo text-h1 fade-in">Felipe Vogt</div>
    <div class="sub-titulo text-h2 typed">Desarrollador Full-Stack</div>
    <div class="descripcion text-p fade-in">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </div>
  </div>
</template>

<style lang="scss">
.presentacion {
  color: white;
  min-height: 100vh;
  overflow-wrap: break-word;

  .sub-titulo {
    color: var(--primary-text-color);
    margin-top: 5px;
    max-width: min-content;
    animation-delay: 200ms;
  }

  .descripcion {
    margin-top: 20px;
    animation-delay: 300ms;
  }
}
</style>
