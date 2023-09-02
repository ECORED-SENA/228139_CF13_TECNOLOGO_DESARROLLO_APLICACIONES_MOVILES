<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade") Actualmente los sistemas operativos para dispositivos móviles brindan la posibilidad de construir aplicaciones para estos sistemas, proporcionando para esto un <em>software</em> llamado SDK; tanto Android como iOS, ofrecen sus respectivas herramientas para crear sus aplicaciones nativas. Las características que brindan los dispositivos móviles como GPS, cámara, navegación a internet, se aprovechan en el desarrollo de las aplicaciones, posibilitando interesantes ideas para utilidades de los usuarios.

    p(data-aos="fade") El sistema operativo Android tiene compatibilidad con la mayoría de los dispositivos y es hoy en día uno de los más utilizados en teléfonos móviles. El mercado de aplicaciones de Android está en constante incremento y la aparición de las empresas y de sus aplicaciones en esta plataforma es básicamente un requisito indispensable. Así que el desarrollo de aplicaciones para este sistema puede convertirse en un excelente desempeño laboral para muchos ingenieros.

    p.mb-4(data-aos="fade") También estudiaremos la construción de un aplicativo según las características de la arquitectura iOS, y para ello lo invitamos a ver el siguiente video:

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/xr1l_ocLGw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        
      figcaption Video. Construir aplicativo según las características de la arquitectura

    p(data-aos="fade") Una de las características de las aplicaciones móviles es que su distribución se realiza por medio de tiendas, y existen en el mercado una gran variedad de ellas. En el contenido de este módulo se describirán las tiendas más utilizadas, así como las características de cada una de ellas, específicamente la tienda de Play Store, porque, a nivel mundial, es la que presenta mayor número de descargas por parte de los usuarios.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
