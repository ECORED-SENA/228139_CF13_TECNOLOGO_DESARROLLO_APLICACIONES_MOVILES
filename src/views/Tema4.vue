<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Navegación (<em>intents</em>)

    p.mb-4(data-aos="fade") La navegación entre pantallas en Android se realiza a través de los Intent. El Intent es básicamente una intención de hacer una acción, es la forma de comunicación en Android, que permite interactuar componentes de la misma aplicación o entre diferentes aplicaciones (#[em Activities], #[em Services], #[em Broadcasts], etc.) Existen dos tipos de Intents:

    .bloque-texto-a.color-primario.p-4.mb-5(data-aos="fade-down")
      .row.align-items-center.justify-content-around
        .col-lg-3.mb-4.mb-lg-0
          figure
            img.py-lg-4.px-lg-5(src="@/assets/curso/temas/t4/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p #[strong Intent explícito:] se utilizan para llamar a un componente específico: Por ejemplo, se tiene una aplicación que contiene 2 actividades. Actividad A y Actividad B y la aplicación requiere navegar desde la Actividad A hasta la Actividad B. En este caso, se define una intención explícita. Para ello se utiliza la clase Intent donde se le especifica dónde está y a dónde quiere ir.
            .bg-9.text-white.p-3.f-mono
              code
                p.mb-0 Intent intent = new Intent (ActividaA.this, ActivityB.class);
                p startActivity(intent);
                p.mb-0  El startActivity lanza el intent.

    .titulo-sexto.color-acento-contenido.mb-4.col-md-8.m-auto(data-aos="fade") 
      p.mb-0 #[b Figura 2.] Uso Intent explícito
    figure.col-md-8.m-auto.mb-2(data-aos="fade-down")
      img(src="@/assets/curso/temas/t4/figura2.svg" alt="Se presenta cómo se usa intent para iniciar una actividad.")
    figcaption.col-md-8.m-auto.mb-5(data-aos="fade") Nota: Android developer

    p.mb-4(data-aos="fade") Se presenta cómo se usa un intent para iniciar una actividad. Cuando el objeto intent nombra un componente de actividad específico de forma explícita, el sistema inicia ese componente al instante.

    .mt-5.p-5.mb-5.caja_flotante_azul(style="background-color:#DBFBFF")
      p(data-aos="fade") #[strong #[em Intent] implícito:]  a diferencia de los explícitos, los intent implícitos no nombran el componente específico. Se usan para iniciar un componente específico de la aplicación, por ejemplo, si se quiere mostrar al usuario la cámara, una ubicación de un mapa o una página web se usan los intent implícitos para solicitar que se muestran estos servicios.
      p.mb-1(data-aos="fade") Ejemplo:
      .bg-9.text-white.p-3.f-mono.mb-3(data-aos="fade")  
        code
          p.mb-0 Intent intent = new Intent (Intent.ACTION_VIEW, Uri.parse(“http://www.example.com”));
          p.mb-0 startActivity(intent);
      p(data-aos="fade") Lo que se hace en el ejemplo es llamar a la acción de visualización de una página web.

    
    .tarjeta.p-3.col-lg-10.m-auto.bg-gradiente.mb-4(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.px-lg-4(src="@/assets/curso/temas/t1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0 
              h3 Amplíe sus conocimientos
              p.mb-0 Para ampliar la información sobre intent explícito, lo invitamos a ver el video Capítulo 15 – Android Studio #[em Intent] Abrir una #[em Activity].
            .col-sm-auto
              a.boton.boton--b.color-acento-contenido(href="https://www.youtube.com/watch?v=LEVXzsXhO0A" target="_blank")
                span Ir al sitio web
                i.fas.fa-globe

    .tarjeta.p-3.col-lg-10.m-auto.bg-gradiente(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.px-lg-4(src="@/assets/curso/temas/t1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0 
              h3 Amplíe sus conocimientos
              p.mb-0 Y para ampliar la información sobre intent implícito, lo invitamos a ver el video Capítulo 194 – intent implícito.
            .col-sm-auto
              a.boton.boton--b.color-acento-contenido(href="https://www.youtube.com/watch?v=tU2ZZng7FnI" target="_blank")
                span Ir al sitio web
                i.fas.fa-globe







</template>

<script>
export default {
  name: 'Tema4',
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
