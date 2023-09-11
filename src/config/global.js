export default {
  global: {
    componenteFormativo: 'Componentes <em>back-end</em> de la aplicación móvil',
    descripcionCurso:
      'En este componente formativo se abordan los conceptos clave para el diseño y desarrollo de aplicaciones móviles nativas, como sus elementos, vistas, maquetación, entornos de desarrollo, lenguajes, etc., y también se abordan los conceptos clave para el despliegue de las aplicaciones móviles, en donde encontrarán temáticas relacionadas con las tiendas de aplicaciones, así como sus características, cuentas, y creación de APK.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estructura de un proyecto en Android Studio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Manifest',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Java',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Res',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Gradle',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Interfaz de usuario en Android',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '<em>Layouts</em>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Controles básicos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Eventos listeners',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Navegación (intents)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Tareas asíncronas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Persistencia de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Bases de datos local SQLite',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Bases de datos en tiempo real',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Multimedia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'MediaPlayer',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: '<em>VideoView</em>',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Lenguaje Swift',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Características',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Tipos de datos',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Operadores básicos',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Condicionales',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo: 'Ciclos',
            hash: 't_8_5',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Entorno de desarrollo Xcode',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Instalación',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Configuración',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'SwiftUI',
            hash: 't_9_3',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Persistencia de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Core data',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Cloudkit',
            hash: 't_10_2',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Tiendas de aplicaciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Play Store',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema13',
        numero: '13',
        titulo: 'Subida aplicación Play Store',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema14',
        numero: '14',
        titulo: 'Crear APK Android Studio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema15',
        numero: '15',
        titulo: 'Publicación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Estructura de un proyecto en Android Studio',
      referencia: 'Android Developers. (s.f.). Android para desarrolladores.',
      tipo: 'Página web',
      link: 'https://developer.android.com/?hl=es-419',
    },
    {
      tema: '1. Estructura de un proyecto en Android Studio',
      referencia:
        'sgoliver.net. (2014). Estructura de un proyecto Android (Android Studio).',
      tipo: 'Página web',
      link:
        'https://www.sgoliver.net/blog/estructura-de-un-proyecto-android-android-studio/',
    },
    {
      tema: '2. <em>Layouts</em>',
      referencia: 'Android Developers. (s.f.). Diseños.',
      tipo: 'Página web',
      link:
        'https://developer.android.com/guide/topics/ui/declaring-layout?hl=es-419',
    },
    {
      tema: '6.1 Bases de datos local SQLite',
      referencia: 'Android Developers. (s.f.). Cómo guardar datos con SQLite.',
      tipo: 'Página web',
      link:
        'https://developer.android.com/training/data-storage/sqlite?hl=es-419',
    },
    {
      tema: '6.2 Bases de datos en tiempo real',
      referencia: 'Android Developers. (s.f.). Cómo conectarse a Firebase',
      tipo: 'Página web',
      link: 'https://developer.android.com/studio/write/firebase?hl=es-419',
    },
    {
      tema: '8. Lenguaje Swift',
      referencia:
        'Apple. (s.f.). Swift. Un poderoso lenguaje al alcance de todos para crear increíbles apps.',
      tipo: 'Página web',
      link: 'https://www.apple.com/co/swift/',
    },
    {
      tema: '13. Subida aplicación Play Store',
      referencia: 'EDteam. (2020). ¿Cómo subir tu app a la Play Store?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EOkKc1Oc92M',
    },
    {
      tema: '13. Subida aplicación Play Store',
      referencia:
        'Google Play. (2022). Acuerdo de Distribución para Desarrolladores de Google Play.',
      tipo: 'Página web',
      link:
        'https://play.google.com/intl/ALL_ar/about/developer-distribution-agreement.html',
    },
  ],
  glosario: [
    {
      termino: 'APK',
      significado:
        '(<em>Android Application Package</em>) archivo ejecutable de aplicaciones Android.',
    },
    {
      termino: 'Cocoa',
      significado:
        'es un <em>framework</em> que permite el desarrollo de aplicaciones nativas para macOS.',
    },
    {
      termino: 'Cuenta de desarrollador',
      significado:
        'cuenta de publicación que se asigna a un desarrollador para la distribución de productos en la Google Play.',
    },
    {
      termino: 'Diseño',
      significado:
        'un diseño define la estructura visual de una interfaz de usuario.',
    },
    {
      termino: 'Google Play',
      significado:
        '<em>software</em> o los servicios (incluido Play Console) que permiten que los desarrolladores distribuyen productos a los usuarios de los dispositivos.',
    },
    {
      termino: 'Google',
      significado:
        'organización multinacional dedicada a productos y servicios electrónicos informáticos vinculados con internet.',
    },
    {
      termino: 'Play Console',
      significado:
        'herramienta o servicio en línea de Google para desarrolladores.',
    },
    {
      termino: '<em>Scrolling</em>',
      significado: 'acción de desplazarse internamente.',
    },
    {
      termino: 'SDK',
      significado: 'kit de desarrollo de <em>software</em>.',
    },
    {
      termino: '<em>View</em>',
      significado: 'es la clase base de los <em>widgets</em>.',
    },
    {
      termino: '<em>Wearable</em>',
      significado:
        'dispositivo conectado que se puede llevar puesto y que se conecta al teléfono móvil.',
    },
    {
      termino: 'XML',
      significado: 'lenguaje de marcado extensible.',
    },
  ],
  referencias: [
    {
      referencia: 'Android Developers. (s.f.). Android para desarrolladores.',
      link: 'https://developer.android.com',
    },
    {
      referencia:
        'Android Developers. (s.f.). Documentación para desarrolladores de <em>apps.</em>',
      link: 'https://developer.android.com/docs',
    },
    {
      referencia:
        'Apple. (s.f.). Swift. Un poderoso lenguaje al alcance de todos para crear increíbles <em>apps.</em>',
      link: 'https://www.apple.com/co/swift/',
    },
    {
      referencia:
        'Developer. (s.f.). Obtén ayuda con herramientas y tecnologías, comunícate con extpertos de Apple y más.',
      link: 'https://developer.apple.com/es/support',
    },
    {
      referencia:
        'Developer. (s.f.). SwiftUI <em>Essentials - Creating and Combining Views.</em>',
      link:
        'https://developer.apple.com/tutorials/swiftui/creating-and-combining-views',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Zulema Yidney León Escobar',
          cargo: 'Experta temática',
          centro: 'Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Edición y corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo	',
          centro:
            'Centro de la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Julián Ramirez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
