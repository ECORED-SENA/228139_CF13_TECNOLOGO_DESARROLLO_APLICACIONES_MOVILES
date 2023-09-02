<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 13
      h1 Subida aplicación Play Store

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/temas/t13/banner-tema3.jpg", alt="Subida aplicación Play Store")

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t13/tema3-img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para publicar aplicaciones en Google Play, lo primero que se debe hacer es un registro en la consola para desarrolladores, la inscripción tiene un valor de 25 dólares, que es un pago único de por vida y es necesario tener una tarjeta de crédito para poder realizarlo. El objetivo de esta cuota consiste en incentivar la presencia de productos de mayor calidad en Google Play (es decir, menos productos con #[em spam]).

    h3(data-aos="fade-right") Creación de cuenta

    p.mb-4(data-aos="fade") Para la creación de la cuenta se debe ingresar a la consola de la Google Play y seguir los pasos que se mencionan a continuación.

    .tarjeta.tarjeta-acento-botones-suave.p-4
      LineaTiempoC.color-acento-contenido(data-aos="fade-down")
        .row.justify-content-center(titulo="1")
          .col-md-4.mb-4.mb-md-0
            ul.lista-ul--color.color-secuendario.fa-ul
              li 
                i.fas.fa-play
                span.mb-0
                  strong Ingresar a la página de registro: 
                  | Google Play Console y dar clic en Play Console.
          .col-md-6
            figure
              img.mb-1(src='@/assets/curso/temas/t13/tema3-paso-1.jpg', alt='Ingreso a la página de Google Play Console')


        .row.justify-content-center(titulo="2")
          .col-md-4.mb-4.mb-md-0
            ul.lista-ul--color.color-secuendario.fa-ul
              li 
                i.fas.fa-play
                span.mb-0 
                  strong Al dar clic en la Play Console, 
                  | se solicitará iniciar sesión en Google, se debe ingresar con la cuenta de Gmail con la que se quiere quede el registro.
          .col-md-6
            figure
              img.mb-1(src='@/assets/curso/temas/t13/tema3-paso-2.jpg', alt='Inicio sesión cuenta Gmail')

        .row.justify-content-center(titulo="3")
          .col-md-4.mb-4.mb-md-0
            ul.lista-ul--color.color-secuendario.fa-ul
              li 
                i.fas.fa-play
                span.mb-0
                  strong Después del inicio de sesión, 
                  | aparecerá un formulario en donde se le solicita los datos del desarrollador.
            .tarjeta-amarillo-border.py-2.px-3
              p Es importante tener en cuenta que todos los datos que están marcados con asterisco (*) son obligatorios, y se debe seleccionar el acuerdo para desarrolladores y los términos de servicios de Google Play Console, luego dar clic en crear cuenta y pagar.      
          .col-md-6
            figure
              img.mb-1(src='@/assets/curso/temas/t13/tema3-paso-3.jpg', alt='Registro de cuenta de desarrollador') 

        .row.justify-content-center(titulo="4")
          .col-md-4.mb-4.mb-md-0
            ul.lista-ul--color.color-secuendario.fa-ul
              li 
                i.fas.fa-play
                span.mb-0 
                  strong Una vez se registren los datos, 
                  | es en la siguiente pantalla que se visualiza en donde se piden los datos de la tarjeta de crédito, el valor establecido es de 25 dólares.
          .col-md-6
            figure
              img.mb-1(src='@/assets/curso/temas/t13/tema3-paso-4.jpg', alt='Registro pago Google Play')             

        .row.justify-content-center(titulo="5")
          .col-md-4.mb-4.mb-md-0
            ul.lista-ul--color.color-secuendario
              li 
                i.fas.fa-play
                span.mb-0 
                  strong Posterior al pago, 
                  | se muestra la pantalla de la consola donde se inicia el proceso de subida de la aplicación, ahora, solo se debe tener lista el APK y las imágenes e iconos que solicita el proceso de cargue de la aplicación.
            .tarjeta-amarillo-border.py-2.px-3
              p La consola tiene en su lado lateral izquierdo (marcado en rojo), el menú de administración de las aplicaciones y al lado derecho el botón de creación de la aplicación.
          .col-md-6
            figure
              img.mb-1(src='@/assets/curso/temas/t13/tema3-paso-5.jpg', alt='Google Play Console')
 




</template>

<script>
export default {
  name: 'Tema13',
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
