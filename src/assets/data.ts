const page_data = {
  titulo_pagina: "Felipe Vogt - Ingeniero Civil Informático",
  descripcion_pagina:
    "Soy un ingeniero de software especializado en construir aplicaciones altamente escalables y con un alto rendimiento.",
  navbar: {
    logo: "./imgs/logo.png",
    items: [
      {
        id: "about-me",
        nombre: "Sobre mi",
      },
      {
        id: "experience",
        nombre: "Experiencias",
      },
      {
        id: "projects",
        nombre: "Proyectos",
      },
      {
        id: "contact",
        nombre: "Contacto",
      },
    ],
    curriculum: {
      nombre: "Currículum",
      link: "./data/cv_felipe_vogt.pdf",
    },
  },
  inicio: {
    id: "home",
    presentacion: "Hola, soy",
    titulo: "Felipe Vogt",
    subtitulo: "Desarrollador Full-Stack",
    descripcion:
      "Soy un ingeniero de software especializado en construir aplicaciones altamente escalables y con un alto rendimiento.",
  },
  sobre_mi: {
    id: "about-me",
    titulo: "Algo sobre Mi",
    imagen: "./imgs/profile.jpg",
    perfil_link: "https://www.linkedin.com/in/felipevogtf/",
    parrafos: [
      "¡Hola! Mi nombre es Felipe y soy un programador full stack con experiencia en el desarrollo de aplicaciones web integrales y dinámicas. Mis habilidades me permiten trabajar tanto en el lado del cliente como en el lado del servidor, lo que me permite ofrecer soluciones completas y personalizadas para satisfacer las necesidades específicas de mis clientes.",
      "Una de mis fortalezas es mi compromiso con el aprendizaje continuo y la actualización constante de mis habilidades y conocimientos. Me mantengo al día con las últimas tendencias y tecnologías en el campo de la programación para garantizar que las soluciones que ofrezco sean siempre innovadoras y actualizadas.",
    ],
    tecnologias: [
      {
        nombre: "Vue",
        icono: "./icons/vue.svg",
      },
      {
        nombre: "Angular",
        icono: "./icons/angular.svg",
      },
      {
        nombre: "Ionic",
        icono: "./icons/ionic.svg",
      },
      {
        nombre: "Kotlin",
        icono: "./icons/kotlin.svg",
      },
      {
        nombre: "Laravel",
        icono: "./icons/laravel.svg",
      },
      {
        nombre: "Php",
        icono: "./icons/php.svg",
      },
      {
        nombre: "Typescript",
        icono: "./icons/typescript.svg",
      },
      {
        nombre: "Javascript",
        icono: "./icons/javascript.svg",
      },
      {
        nombre: "HTML",
        icono: "./icons/html.svg",
      },
      {
        nombre: "CSS",
        icono: "./icons/css.svg",
      },
      {
        nombre: "Sass",
        icono: "./icons/sass.svg",
      },
    ],
  },
  experiencia: {
    id: "experience",
    titulo: "Dónde he trabajado",
    experiencias: [
      {
        empresa: "DeepView",
        empresa_abrev: "DeepView",
        empresa_link: "https://https://www.deepview.cl/",
        cargo: "Programador Front-End en",
        fecha: "Abril 2023 - Actualidad",
        funciones: [
          "Desarrollo de aplicaciones nativas para Android diseñadas para llevar a cabo auditorías de productos en estanterías.",
        ],
      },
      {
        empresa: "BCN School",
        empresa_abrev: "BCN School",
        empresa_link: "https://bcnschool.com/",
        cargo: "Programador Full-Stack en",
        fecha: "Mayo 2022 - Noviembre 2022",
        funciones: [
          "Desarrollo del Front-end mediante Angular para plataforma BCN360, que permite la personalización y administración de un campus virtual.",
          "Desarrollo de la API mediante Laravel para la plataforma BCN360, que se encarga de interactuar con la base de datos y los distintos servicios del campus virtual.",
        ],
      },
      {
        empresa: "Impact Chile",
        empresa_abrev: "Impact",
        empresa_link: "https://www.impact.cl/es/",
        cargo: "Programador Full-Stack en",
        fecha: "Agosto 2021 - Mayo 2022",
        funciones: [
          "Desarrollo y mantención de la aplicación móvil MiSQM realizada en Ionic, que ofrece distintas funcionalidades para facilitar la forma de trabajar de los empleados.",
          "Desarrollo y mantención de la API para la aplicación MiSQM, utilizando la librería Codeigniter para garantizar la conectividad y el funcionamiento óptimo de la aplicación.",
          "Mantención de la pagina Wordpress de MiSQM y desarrollo de nuevos plugins para el sitio.",
        ],
      },
      {
        empresa: "Nueva Gestión Software",
        empresa_abrev: "Nueva Gestión",
        empresa_link: "https://www.nuevagestion.cl/",
        cargo: "Programador Front-End en",
        fecha: "Noviembre 2020 - Marzo 2021",
        funciones: [
          "Desarrollo de minijuegos interactivos para la aplicación móvil AcamyKids realizada en Flutter, enfocados en facilitar el aprendizaje de los estudiantes del segundo ciclo de enseñanza básica.",
          "Mantención de la API de AcamyKids mediante el framework Laravel.",
        ],
      },
    ],
  },
  proyectos: {
    id: "projects",
    titulo: "Algunos proyectos destacados",
    proyectos: [
      {
        "titulo": "Buscaminas",
        "imagen": "./imgs/buscaminas.png",
        "descripcion": "Aplicación web inspirada en el popular juego Buscaminas, cuyo objetivo es despejar el campo de minas sin detonar ninguna de ellas.",
        "tecnologias": ["Angular", "Typescript", "Scss", "Karma"],
        "git_link": "https://github.com/felipevogtf/Buscaminas",
        "demo_link": "https://buscaminas.felipevogt.com/"
      },
      {
        "titulo": "Trivia Pokémon",
        "imagen": "./imgs/trivia-pokemon.png",
        "descripcion": "Juego de trivia relacionado al mundo Pokémon, cuenta con un sistema de puntuación y de rankings.",
        "tecnologias": ["Vue", "Firebase", "Vuetify", "Firestore"],
        "git_link": "https://github.com/felipevogtf/Trivia-Pokemon",
        "demo_link": "https://cuanto-sabes-de-pokemon.web.app/login"
      }
    ]
  },
  otros_proyectos: {
    id: "other-projects",
    titulo: "Otros proyectos",
    boton_mostrar_mas: "Mostrar más",
    proyectos: [
      {
        "titulo": "Simple Weather App",
        "descripcion": "Una aplicación sencilla para visualizar el clima en tu ubicación actual mediante la tecnología de geolocalización, todo ello gracias a la API de Weatherapi.",
        "tecnologias": ["Ionic", "Angular", "Weatherapi", "Capacitor"],
        "git_link": "https://github.com/felipevogtf/Simple-Weather-App",
        "demo_link": "https://felipevogtf.github.io/Simple-Weather-App/"
      },
      {
        "titulo": "Portfolio",
        "descripcion": "Plantilla de portafolio que presenta de manera detallada experiencia, habilidades y proyectos realizados.",
        "tecnologias": ["Vue", "Typescript", "Scss"],
        "git_link": "https://github.com/felipevogtf/Portfolio",
        "demo_link": ""
      },
      {
        "titulo": "Trivia API",
        "descripcion": "API para generar trivias, realizado con Express y Mongoose, También implementa JSON Web Token.",
        "tecnologias": ["Nodejs", "Express", "Moongoose", "Swagger"],
        "git_link": "https://github.com/felipevogtf/Trivia-API",
        "demo_link": ""
      },
      {
        "titulo": "Wololo Stats",
        "descripcion": "Wololo Stats es una aplicación de Age of Empires 2 que brinda información sobre unidades, estructuras, civilizaciones y tecnologías, y permite comparar la mejor opción en diversas situaciones de juego.",
        "tecnologias": ["Ionic", "Angular", "Typescript", "Sqlite"],
        "git_link": "https://github.com/felipevogtf/Wololo-Stats",
        "demo_link": ""
      },
      
    ]
  },
  contacto: {
    id: "contact",
    titulo: "Contacto",
    descripcion:
      "Actualmente estoy enfocado en mi desarrollo profesional en el área de desarrollo de software. Si deseas mantener contacto o colaborar en proyectos futuros, no dudes en contactarme.",
    boton_contacto: "Contactame",
    email: "felipevogt.f@gmail.com",
  },
  redes: {
    id: "social-medias",
    redes: [
      {
        nombre: "Github",
        url: "https://github.com/felipevogtf",
        fontawesome_icon: "fa-brands fa-github",
      },
      {
        nombre: "Linkedin",
        url: "https://www.linkedin.com/in/felipevogtf/",
        fontawesome_icon: "fa-brands fa-linkedin-in",
      },
      {
        nombre: "Steam",
        url: "https://steamcommunity.com/id/Vogtz/",
        fontawesome_icon: "fa-brands fa-steam",
      },
    ],
  },
};

export default page_data