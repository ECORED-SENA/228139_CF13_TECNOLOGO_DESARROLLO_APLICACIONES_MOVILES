<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 14
      h1 Crear APK Android Studio

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/temas/t14/banner-tema4.jpg", alt="Crear APK Android Studio")

    .row.mb-4
      .col-lg-7.mb-4(data-aos="fade-right")
        p Cuando se crea el APK para subir la aplicación a distribución, se debe hacer el proceso de firma de la aplicación que permite a los desarrolladores identificar al autor de la aplicación, a la vez que realiza actualización de la misma. La plataforma Android exige que todas las aplicaciones deban estar firmadas por el desarrollador; y las aplicaciones que intenten instalarse sin estar firmadas serán rechazadas por Google Play o el instalador del paquete en el dispositivo Android.
        p La extensión más común es APK, sin embargo, existen otros formatos como Android App Bundle, con extensión AAB. 
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/t14/tema4-img1.jpg", alt="Imagen decorativa") 

    p.mb-4(data-aos="fade") A continuación, se explica el proceso para firmar una #[em app].
    
    .row.tarjeta-acento-botones-suave.p-lg-5.py-4.mb-5
      SlyderE(indicadores="izquierda" data-aos="fade-down")
        .row
          .col-12
            figure.mb-4
              img(src='@/assets/curso/temas/t14/tema4-slider-1.jpg', alt='El proceso para firmar una app')
        .row
          .col-lg-5.mb-4.mb-md-0
            h4 1. Generar clave para APK.
            p Generar la clave: en la barra de menú, dar clic en 
              italic Build > Generate Signed Bundle/APK
          .col-lg-7
            figure
              img(src='@/assets/curso/temas/t14/tema4-slider-2.png', alt='1. Generar Clave para APK.')   
        .row
          .col-lg-5.mb-4.mb-md-0
            h4 2. Seleccionar extensión
            p En el cuadro de diálogo 
              italic Generate Signed Bundle or APK, 
              | selecciona 
              italic Android App Bundle 
              | o APK, 
              | y haz clic en 
              italic Next.
          .col-lg-7
            figure
              img(src='@/assets/curso/temas/t14/tema4-slider-3.jpg', alt='2. Seleccionar Extensión')         
        .row
          .col-lg-5.mb-4.mb-md-0
            h4 3. Generar clave para Apk
            p En el campo 
              italic Key Store Path, 
              | clic en 
              italic Create new. 
          .col-lg-7
            figure
              img(src='@/assets/curso/temas/t14/tema4-slider-4.jpg', alt='3. Generar Clave para Apk')
        .row
          .col-lg-5.mb-4.mb-md-0
            h4 4. Registrar claves
            p En la ventana 
              italic New Key Store, 
              | selecciona la ubicación donde se almacenará la 
              italic Key, 
              | registra las claves de almacén y demás información que se muestra a continuación.
          .col-lg-7
            figure
              img(src='@/assets/curso/temas/t14/tema4-slider-5.jpg', alt='4. Registrar Claves')    
        
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            p Es importante tener en cuenta:
            .row.align-items-center.justify-content-center
              .col-md-2.col-3.mb-4.mb-md-0
                img(src='@/assets/curso/temas/t14/tema4-slider-ico1.svg', alt='Key Store Path') 
              .col-md-10.border-amarillo.py-4
                p.mb-0 
                  italic-strong Key Store Path: 
                  | esta opción permite seleccionar la ubicación en la que se desee guardar el almacén de claves.
            .row.align-items-center.justify-content-center
              .col-md-2.col-3.mb-4.mb-md-0
                img(src='@/assets/curso/temas/t14/tema4-slider-ico2.svg', alt='Password') 
              .col-md-10.border-amarillo.py-4
                p.mb-0
                  italic-strong Password: 
                  | aquí se debe crear y confirmar una contraseña segura para el almacén de claves.
            .row.align-items-center.justify-content-center
              .col-md-2.col-3.mb-4.mb-md-0
                img(src='@/assets/curso/temas/t14/tema4-slider-ico3.svg', alt='Alias') 
              .col-md-10.border-amarillo.py-4
                p.mb-0
                  italic-strong Alias: 
                  | se debe ingresar un nombre de identificación para la clave.    
            .row.align-items-center.justify-content-center
              .col-md-2.col-3.mb-4.mb-md-0
                img(src='@/assets/curso/temas/t14/tema4-slider-ico4.svg', alt='Password') 
              .col-md-10.border-amarillo.py-4
                p.mb-0 
                  italic-strong Password: 
                  | en esta opción se debe crear y confirmar una contraseña segura para el almacén de claves. Debe ser diferente de la contraseña anterior.
            .row.align-items-center.justify-content-center
              .col-md-2.col-3.mb-4.mb-md-0
                img.px-lg-2(src='@/assets/curso/temas/t14/tema4-slider-ico5.svg', alt='Validity (years)') 
              .col-md-10.border-amarillo.py-4
                p.mb-0 
                  italic-strong Validity (years): 
                  | especifica la duración de validación de la contraseña, debe ser válida por lo menos 25 años.
            .row.align-items-center.justify-content-center.mb-4
              .col-md-2.col-3.mb-4.mb-md-0
                img(src='@/assets/curso/temas/t14/tema4-slider-ico6.svg', alt='Certificate') 
              .col-md-10.border-amarillo.py-4
                p.mb-0 
                  italic-strong Certificate: 
                  | en esta opción se registra la información acerca del desarrollador para el certificado. Esta información no se muestra en la 
                  italic app, 
                  | pero se incluye en el certificado como parte del APK.            
            .cajon-color-primario.py-3.px-lg-5.px-3
              h5.mb-0 Después de registrar todo el formulario clic en el botón 
                italic OK.
          .col-lg-6.col-md-10
            figure
              img(src='@/assets/curso/temas/t14/tema4-slider-6.jpg', alt='Imagen decorativa')         
        .row
          .col-lg-5.mb-4.mb-md-0
            h4 5. Registrar claves
            p En la ventana, se selecciona una carpeta de destino para la 
              italic app 
              | firmada, elige el tipo de compilación el cual debe ser release para publicar o 
              italic debug 
              | para probar y depurar.
            .tarjeta-amarillo-border.py-2.px-3.mb-3
              p Cuando se compila y se firma un APK, se debe seleccionar con qué versiones de firma será compatible la 
                italic app 
                | en 
                italic Signature Versions.
          .col-lg-7
            figure
              img(src='@/assets/curso/temas/t14/tema4-slider-7.jpg', alt='5. Registrar claves')
        .row
          .col-lg-5.mb-4.mb-md-0
            h4 Notificación emergente de generación de APK.
            p Una vez seleccionada las opciones clic en 
              italic Finish, 
              | cuando Android Studio 
              | haya terminado de compilar la 
              italic app 
              | firmada mostrará la siguiente notificación.
          .col-lg-7
            figure
              img(src='@/assets/curso/temas/t14/tema4-slider-8.jpg', alt='Notificación emergente de generación de APK.')
        .row
          .col-lg-5.mb-4.mb-md-0
            h4 Aplicación firmada
            p Al dar clic sobre la notificación lo lleva a la ubicación de la APK firmada.
          .col-lg-7
            figure
              img(src='@/assets/curso/temas/t14/tema4-slider-9.jpg', alt='Aplicación firmada')      


    .row.justify-content-center 
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2.mb-3.mb-lg-0
              img.px-lg-3(src="@/assets/curso/temas/t14/tema4-llamado.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Llamado a la acción
                  p.mb-lg-0 A continuación, puede ampliar información sobre la administración de firmas, para esto le invitamos a visitar la página: https://developer.android.com/studio/publish/app-signing?hl=es#generate-key
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://developer.android.com/studio/publish/app-signing?hl=es#generate-key')" target="_blank")
                    span Enlace web
                    i.fas.fa-link






</template>

<script>
export default {
  name: 'Tema14',
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
