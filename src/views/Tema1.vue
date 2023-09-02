223<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estructura de un proyecto en Android Studio

    h5(data-aos="fade") Las actualizaciones en Android Studio avanzan muy rápido, para este componente los ejemplos que se muestran son para la versión 4.1.3
    p.mb-4(data-aos="fade") En Android Studio, un proyecto contiene todos los elementos necesarios para el desarrollo de una APP: desde código fuente y recursos, hasta código de prueba y configuraciones de compilación. Al iniciar un nuevo proyecto, Android Studio crea la estructura necesaria para todos los archivos y los muestra en la ventana Project del lado izquierdo del IDE (haz clic en View > Tool Windows > Project >), o con su acceso directo Alt +1. 
    
    figure.m-auto.col-lg-6.col-md-8.mb-5(data-aos="fade-down")
      img(src="@/assets/curso/temas/t1/1.svg" )

    p.mb-4(data-aos="fade") Ahora bien, las vistas de proyectos de Android, o la visualización de la estructura completa de archivos del proyecto, se hace por la opción Project del menú desplegable en la parte superior de la ventana.

    figure.m-auto.col-lg-6.col-md-8.mb-5(data-aos="fade-down")
      img(src="@/assets/curso/temas/t1/11.svg" )

    p.mb-4(data-aos="fade") En el siguiente video se eplican los componentes principales de los proyectos de Android Studio.

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/upyzIois6xA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Proyecto Android Studio


    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_1_1 1.1 Manifest

    p(data-aos="fade") En el manifest se encuentra la información esencial de una aplicación para las herramientas de creación de Android, el sistema operativo Android y Google Play.
    p(data-aos="fade") El manifest es un archivo en lenguaje XML y se definen aspectos principales de la aplicación, como por ejemplo su identificación (nombre, ícono, estilos), sus componentes (pantallas, servicios) o los permisos necesarios para su ejecución. 
    h5.mb-5(data-aos="fade") A continuación, se enuncian algunas de las cosas más importantes que se deben declarar en el archivo manifest:
    
    ImagenInfografica.color-acento-botones.bg-1.col-md-9.m-auto.mb-5(data-aos="fade-down")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t1/2.svg', alt='El archivo Manifest se compone de: Nombre del paquete: el nombre del paquete debe coincidir con el nombre del paquete básico que se crea cuando se inicia un nuevo proyecto, y sirve como un ID que permite identificar de manera exclusiva la APP en el dispositivo y en Google Play Store. Permisos: las aplicaciones en Android deben solicitar permisos para acceder a datos restringidos del usuario o del sistema, por ejemplo: permisos de contactos, mensajes del sistema como la cámara, acceso a internet, etc. Íconos y etiquetas: en el manifest se configura el ícono que tendrá la aplicación a través de la etiqueta icon al igual que el nombre de la aplicación con la etiqueta label. Activity: uno de los componentes principales que se encuentran declarados en el manifest son las actividades, la etiqueta &lt;activity&gt; declara el componente de una actividad.')
      .tarjeta.bg-1.p-3(x="28%" y="5%")
        .h4.mb-2 Nombre del paquete
        p.mb-0 El nombre del paquete debe coincidir con el nombre del paquete básico que se crea cuando se inicia un nuevo proyecto, y sirve como un ID que permite identificar de manera exclusiva la APP en el dispositivo y en Google Play Store.
      .tarjeta.bg-1.p-3(x="86%" y="25%")
        .h4.mb-2 Permisos
        p.mb-0 Las aplicaciones en Android deben solicitar permisos para acceder a datos restringidos del usuario o del sistema, por ejemplo: permisos de contactos, mensajes del sistema como la cámara, acceso a internet, etc.
      .tarjeta.bg-1.p-3(x="62%" y="40%")
        .h4.mb-2 Íconos y etiquetas
        p.mb-0 En el manifest se configura el ícono que tendrá la aplicación a través de la etiqueta icon al igual que el nombre de la aplicación con la etiqueta label.
      .tarjeta.bg-1.p-3(x="25%" y="71%")
        .h4.mb-2 #[em Activity]
        p.mb-0 Uno de los componentes principales que se encuentran declarados en el manifest son las actividades, la etiqueta &lt;activity&gt; declara el componente de una actividad.

    .tarjeta.p-3.col-lg-10.m-auto.bg-gradiente(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.px-lg-4(src="@/assets/curso/temas/t1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3 Amplíe sus conocimientos 
              p.mb-0 Para ampliar la información, lo invitamos a visitar la página Aspectos fundamentales de la aplicación.
            .col-sm-auto
              a.boton.boton--b.color-acento-contenido(href="https://developer.android.com/guide/components/fundamentals?hl=es-419#Components" target="_blank")
                span Ir al sitio web
                i.fas.fa-globe


    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_1_2 1.2 Java

    p.mb-4(data-aos="fade") La carpeta java contiene todo el código fuente de la aplicación separados por paquetes, clases interfaces, pojos, etc. Inicialmente, Android Studio crea el código básico de la pantalla (actividad o activity) principal de la aplicación, que por defecto se llamará MainActivity, y siempre bajo la estructura del paquete java definido durante la creación del proyecto.

    figure.col-md-11.m-auto(data-aos="fade-down")
      img(src="@/assets/curso/temas/t1/4.svg" )

    
    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_1_3 1.3 Res

    p.mb-4(data-aos="fade") En esta carpeta se encuentran todos los recursos del proyecto sin código, como diseños XML, #[em strings] de IU y también imágenes de mapa de #[em bits], divididos en subdirectorios.

    figure.col-md-6.m-auto.mb-5(data-aos="fade-down")
      img(src="@/assets/curso/temas/t1/5.svg" )

    .row.mb-4(data-aos="fade-down")
      .col-md-5.mb-3.mb-md-0
        figure
          img(src="@/assets/curso/temas/t1/6.svg" )
      .col-md-7
        .p-4.p-lg-5.bg-2.caja__1.position-relative
          p.mb-0 #[strong Subcarpeta drawable:]  /res/drawable: contiene las imágenes que se van a usar en la aplicación los formatos que soporta son (png, jpg, gif).

    .row.mb-4(data-aos="fade-down")
      .col-md-5.mb-3.mb-md-0
        figure
          img(src="@/assets/curso/temas/t1/7.svg" )
      .col-md-7
        .p-4.p-lg-5.bg-8.caja__2.position-relative
          p.mb-0 #[strong Subcarpeta mipmap:] /res/mipmap contiene los íconos que se van a utilizar en la aplicación para las diferentes densidades de las pantallas existentes, al igual que la carpeta drawable, se divide en subcarpetas dependiendo de la densidad de la pantalla.

    .row.mb-4(data-aos="fade-down")
      .col-md-5.mb-3.mb-md-0
        figure
          img(src="@/assets/curso/temas/t1/8.svg" )
      .col-md-7
        .p-4.p-lg-5.bg-2.caja__1.position-relative
          p.mb-0 #[strong Subcarpeta layout:]  /res/layout en esta carpeta se define el diseño de la interfaz de usuario, el formato del archivo es en XML.

    .row(data-aos="fade-down")
      .col-md-5.mb-3.mb-md-0
        figure
          img(src="@/assets/curso/temas/t1/9.svg" )
      .col-md-7
        .p-4.p-lg-5.bg-8.caja__2.position-relative
          p.mb-0 #[strong Subcarpeta values:] /res/values: esta carpeta contiene archivos XML que contienen valores simples, como strings, temas y colores.

    
    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_1_4 1.4 Gradle

    p(data-aos="fade") El gradle permite la compilación del proyecto, en este es posible configurar la versión del SDK que Android utiliza para compilar, la mínima versión de Android que soportará la aplicación, referencias a las librerías externas utilizadas, etc.
    p(data-aos="fade") En un proyecto pueden existir varios ficheros build.gradle, para definir determinados parámetros a distintos niveles. Por ejemplo, puede existir un build.gradle a nivel de proyecto, y otro a nivel de módulo dentro de la carpeta /app. El primero de ellos definirá parámetros globales a todos los módulos del proyecto, y el segundo, solo tendrá efecto para cada módulo en particular.

    figure.m-auto.col-md-8.mb-5(data-aos="fade-down")
      img(src="@/assets/curso/temas/t1/10.svg" )

    .tarjeta.p-3.col-lg-10.m-auto.bg-gradiente.mb-4(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.px-lg-4(src="@/assets/curso/temas/t1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3 Amplíe sus conocimientos 
              p.mb-0 Para ampliar la información sobre gradle, lo invitamos a ver la página Notas de la versión del complemento de Android para Gradle.
            .col-sm-auto
              a.boton.boton--b.color-acento-contenido(href="https://developer.android.com/studio/releases/gradle-plugin?hl=es#updating-gradle" target="_blank")
                span Ir al sitio web
                i.fas.fa-globe

    .tarjeta.p-3.col-lg-10.m-auto.bg-gradiente(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.px-lg-4(src="@/assets/curso/temas/t1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3 Cómo ejecutar tu app
              p.mb-0 Y para la configuración del celular para emulación, visite la página Cómo ejecutar tu app.
            .col-sm-auto
              a.boton.boton--b.color-acento-contenido(href="https://developer.android.com/training/basics/firstapp/running-app?hl=es-419" target="_blank")
                span Ir al sitio web
                i.fas.fa-globe
      
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
