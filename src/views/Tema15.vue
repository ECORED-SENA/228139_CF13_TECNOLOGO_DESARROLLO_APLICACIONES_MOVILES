<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 15
      h1 Publicación

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/temas/t15/banner-tema5.jpg", alt="Publicación")

    .row.mb-4
      .col-lg-7.mb-4(data-aos="fade-right")
        p Para la publicación el tamaño máximo admitido de un único archivo APK es 50 MB; para subir archivos adicionales como, por ejemplo, imágenes se pueden usar archivos de expansión. Si un único archivo APK no es suficiente para todos los dispositivos en los que se quiere ejecutar la aplicación, se pueden subir varios archivos APK en la misma entrada de aplicación, para que cada uno se encargue de la configuración de un dispositivo diferente.
        p Una vez se genere el APK firmada ya se puede subir a Play Store con el fin de lanzarla.
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/t15/tema5-img1.jpg", alt="Imagen decorativa") 

    
    .row.tarjeta-acento-botones-suave.p-lg-5.py-4.mb-5
      SlyderE(indicadores="izquierda" data-aos="fade-down")
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 A continuación encontrará una guía relacionada con la publicación en Play Store de tu APK firmada.
            p Una vez se genere el APK firmada ya se puede subir a la Play Store con el fin de lanzarla.
            p Para esto debe seguir estos pasos.
          .col-lg-7
            figure
              img.mb-2(src='@/assets/curso/temas/t15/tema5-slider-1.jpg', alt='El proceso para firmar una app')
              figcaption Nota: https://cmsphoto.ww-cdn.com/superstatic/81328/art/grande/34325105-31402787.jpg?v=1559324698.5693283&force_webp=1 
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 1. Crear aplicación en la PlayStore
            p Abrir la Play Console y seleccionar Todas las apps > Crear aplicación.
          .col-lg-7
            figure
              img(src='@/assets/curso/temas/t15/tema5-slider-2.jpg', alt='1. Crear aplicación en la PlayStore')   
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 2. Creación de la aplicación
            p Registre la información que se solicita.
            ul.lista-ul--color.color-secuendario.fa-ul
              li 
                i.fas.fa-play
                span.mb-0 
                  strong Nombre de la aplicación: 
                  | se debe seleccionar un idioma predeterminado y agregar un título para la app. El nombre que se escriba es como se mostrará en Google Play, este nombre se puede modificar.
              li 
                i.fas.fa-play
                span.mb-0 
                  strong Aplicación o juego: 
                  | define si la aplicación es una app o un juego; este parámetro es modificable.
              li 
                i.fas.fa-play
                span.mb-0 
                  strong Gratis o pago: 
                  | especifica si se trata de una aplicación pagada o gratuita.
              li 
                i.fas.fa-play
                span.mb-0 
                  strong Declaraciones: 
                  | se selecciona las declaraciones “Leyes de exportación de EE. UU.” y “Lineamientos de contenido”.        
          .col-lg-7
            figure
              img(src='@/assets/curso/temas/t15/tema5-slider-3.jpg', alt='2. Creación de la aplicación')         
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 3. Ficha Play Store
            p Después haz clic en el botón crear aplicación y allí nos mostrará la siguiente ventana que es la Ficha de Play Store.
            .tarjeta-amarillo-border.py-2.px-3.mb-3
              p Para estas opciones se deben tener los recursos gráficos como íconos o imágenes que se quiera aparezcan en la Play Store para la publicidad, cada ícono o imagen debe cumplir con los tamaños que se especifican en los campos.
          .col-lg-6.col-11
            figure
              img(src='@/assets/curso/temas/t15/tema5-slider-5.jpg', alt='3. Ficha Play Store')    
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 4. Crear versión 
            p Subir el APK: para subir el APK seleccionar del menú lateral izquierdo la opción Resumen de versiones.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t15/tema5-slider-6.jpg', alt='4. Crear Versión')         
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 5. Seleccionar APK 
            p Después se selecciona la opción lanzar y la opción producción y le damos clic en crear Versión.
          .col-lg-7
            figure
              img(src='@/assets/curso/temas/t15/tema5-slider-7.jpg', alt='5. Seleccionar APK ')
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 6. Seleccionar APK 
            p En la opción 
              italic App bundles 
              | y 
              italic APKs 
              | clic en subir y se busca la ubicación de la APK firmada.
          .col-lg-7
            figure
              img(src='@/assets/curso/temas/t15/tema5-slider-8.jpg', alt='6. Seleccionar APK ')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 7. Clasificación de contenido
            p Una vez subida la app seguimos con el proceso y nos pedirá la clasificación de contenido.
            .tarjeta-amarillo-border.p-3.p-lg-4.mb-4
              h5 Clasificación de contenido
              p.mb-0 Consiste en completar el cuestionario, con el fin de configurar para qué públicos es apta la app. Este paso aparecerá después de subir el código fuente. Si se omite este paso, la app de Play Store no estará clasificada y Google podría eliminarla. Para esto, se debe ingresar a Play Console, seleccionar la aplicación y, en el menú lateral de la izquierda, seleccionar la opción “Presencia en Google Play Store”, seguido de “Clasificación de contenido”.
            p Después de finalizar el cuestionario se selecciona la categoría de la app y allí se registran los datos de: nombre, correos electrónicos y países donde se quiere que se muestre la aplicación.
          .col-lg-6.col-10
            figure
              img(src='@/assets/curso/temas/t15/tema5-slider-9.jpg', alt='7. Clasificación de contenido')      
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 8. Revisar y lanzar la aplicación
            p Por último, seleccionamos la opción panel de control para revisar y lanzar la aplicación.
            .tarjeta-amarillo-border.p-3.p-lg-4.mb-4
              p.mb-0 Después de lanzada la aplicación, se pasa por un proceso de revisión por parte del personal de Google para que sea publicada, esto puede tardar entre 4 a 24 horas.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t15/tema5-slider-10.jpg', alt='8. Revisar y lanzar la aplicación') 

    .row.justify-content-center 
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2.mb-3
              img.px-lg-4(src="@/assets/curso/temas/t15/tema5-llamado.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 GOOGLE PLAY STORE : Cómo PUBLICAR tu primera APP Android
                  p.mb-lg-0 Le invitamos a consultar el enlace a un video que le permitirá ampliar la información sobre el proceso de publicación de una app.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=vBHmJHp8Ldo')" target="_blank")
                    span Enlace web
                    i.fas.fa-link




</template>

<script>
export default {
  name: 'Tema15',
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
