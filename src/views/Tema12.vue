<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Play Store

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/temas/t12/banner-tema2.jpg", alt="Play Store")

    .row.mb-4
      .col-lg-7.mb-4(data-aos="fade-right")
        p Se posiciona como la tienda de aplicaciones con más descargas por año a nivel mundial, además de ser la que tiene mayor cantidad de nuevos desarrolladores, y la segunda con más beneficios. En el 2012 fue lanzada con el nombre de Google Play Store. 
        p Los recursos de Google Play también se encuentran disponibles en el sitio web de Google Play 
          a(:href="('https://play.google.com/store?hl=es_CO&gl=US')" target="_blank")
            strong.etiqueta (https://play.google.com/store?hl=es_CO&gl=US).
        p Entre las aplicaciones más descargadas en la historia de Google Play se encuentran: WhatsApp, Instagram, Snapchat y en el último trimestre de 2020: TikTok.
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/t12/tema2-img1.jpg", alt="Imagen decorativa") 
    
    
    h3(data-aos="fade-right") Características

    p.mb-4(data-aos="fade") A continuación, se indican algunas características principales de Google Play.

    .row(data-aos="fade-down")
      .col-lg-4.container
        .cards
          .face.face1.p-3
            .content.text-center
              .icon
                img(src="@/assets/curso/temas/t12/tema2-ico1.svg", alt="Apertura")
                h4 Apertura
          .face.face2.p-3
            .content.text-center
              h4 Apertura
              p Una de sus características principales es que Google Play está abierto a cualquier desarrollador, esto quiere decir que su código fuente se pone a disposición para uso o modificación que otro desarrollador considere conveniente.
      .col-lg-4.container
        .cards(@mouseover="mostrarIndicador = false", onclick="")
          .indicador--click(v-if="mostrarIndicador")
          .face.face1.p-3
            .content.text-center
              .icon
                img(src="@/assets/curso/temas/t12/tema2-ico2.svg", alt="Sencillez")
                h4 Sencillez
          .face.face2.p-3
            .content.text-center
              h4 Sencillez
              p La forma para hacer parte de Google Play es muy sencilla solo hay que realizar el registro, subir la app y realizar la publicación.
      .col-lg-4.container
        .cards
          .face.face1.p-3
            .content.text-center
              .icon
                img(src="@/assets/curso/temas/t12/tema2-ico3.svg", alt="Comunidad")
                h4 Comunidad
          .face.face2.p-3
            .content.text-center
              h4 Comunidad
              p Los usuarios de Android pueden comentar y darles valor a las aplicaciones.
        
    .row(data-aos="fade-down")
      .col-lg-4.container
        .cards
          .face.face1.p-3
            .content.text-center
              .icon
                img(src="@/assets/curso/temas/t12/tema2-ico4.svg", alt="Elección")
                h4 Elección
          .face.face2.p-3
            .content.text-center
              h4 Elección
              p Presenta la opción de escoger entre distribuir aplicaciones de pago y gratuitas.
      .col-lg-4.container
        .cards(@mouseover="mostrarIndicador = false", onclick="")
          .indicador--click(v-if="mostrarIndicador")
          .face.face1.p-3
            .content.text-center
              .icon
                img(src="@/assets/curso/temas/t12/tema2-ico5.svg", alt="Administración")
                h4 Administración
          .face.face2.p-3
            .content.text-center
              h4 Administración
              p Permite realizar una gestión de aplicaciones, así como ver estadísticas de descargas, comentarios y puntuaciones.
      .col-lg-4.container
        .cards
          .face.face1.p-3
            .content.text-center
              .icon
                img(src="@/assets/curso/temas/t12/tema2-ico6.svg", alt="Cuenta desarrollador")
                h4 Cuenta desarrollador
          .face.face2.p-3
            .content.text-center
              h4 Cuenta desarrollador
              p Solo tiene que hacer un pago único para subir las aplicaciones.    



</template>

<script>
export default {
  name: 'Tema12',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
