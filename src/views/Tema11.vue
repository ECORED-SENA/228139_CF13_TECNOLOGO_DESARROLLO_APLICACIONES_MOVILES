<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Tiendas de aplicaciones

    p.mb-4(data-aos="fade") Para conocer qué es una tienda de aplicación y cuáles son las más relevantes, lo invitamos a ver el siguiente video.
  
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ehi7RLLTE1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Tiendas de aplicaciones

    //.row
      .col-lg-6.mb-4(data-aos="fade-right")
        p Una 
          strong tienda de aplicaciones, 
          | o 
          strong mercado de aplicaciones, 
          | es básicamente una clase de plataforma digital que permite distribuir gratuita y comercialmente 
          italic software, 
          | mayoritariamente en el contexto de las aplicaciones móviles.
        p Estas aplicaciones son creadas para que sean ejecutadas en determinados dispositivos y creadas para un sistema operativo específico como 
          italic Android, iOS, Windows.
      .col-lg-6.mb-4(data-aos="fade-left")
        .cajon.color-acento-contenido.p-4.mb-4
          p En cuanto a su apariencia, las tiendas normalmente tienen un diseño en línea donde su navegación se realiza utilizando diferentes filtros como: categorías, precios etc., también tienen opciones para calificar las aplicaciones y colocar comentarios de los usuarios.

    //p.mb-4(data-aos="fade") Las tiendas de aplicaciones móviles más relevantes son: 
      italic-strong App Store (Apple), Google Play Store (Google), y Windows Phone Store.

    //TabsC.color-primario.title-italica.mb-5(data-aos="fade-down")
      .py-3.py-md-4(titulo="App Store")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 
              italic App Store
            p Es la tienda oficial de 
              italic Apple 
              | desde el año 2008 y fue creada únicamente para sus dispositivos 
              italic (iPhone, iPad y Mac), 
              | tiene bastantes restricciones y condiciones de privacidad en sus casi dos millones de 
              italic apps 
              | disponibles, ya que deben ser aprobadas por la compañía. Cuenta con aplicaciones de pago y gratuitas.
          .col-md-1
          .col-md-4
            .titulo-sexto.color-acento-botones
              p.mb-0
                strong Figura 1.  
                | Logo tienda 
                italic App Store
            figure
              img.mb-1(src='@/assets/curso/temas/t11/tema1-img1.jpg', alt='App Store')
              figcaption.suave-amarillo Nota. Tomada de 
                italic App Store 
                | https://www.apple.com/co/app-store
      .py-3.py-md-4(titulo="Play Store")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 
              italic Play Store
            p O también llamada 
              italic-strong Google Play, 
              | es la tienda oficial de 
              italic Google 
              | para dispositivos 
              italic Android 
              | tales como teléfonos inteligentes y 
              italic tablets, 
              | entre otros. Aquí se puede encontrar distribución de películas, música, libros y, sobre todo, aplicaciones. Esta tienda brinda acceso a 
              italic apps 
              | de pago y gratuitas.
          .col-md-1
          .col-md-4
            .titulo-sexto.color-acento-botones
              p.mb-0
                strong Figura 2.  
                | Logo tienda 
                italic Play Store
            figure
              img.mb-1(src='@/assets/curso/temas/t11/tema1-img2.jpg', alt='Play Store')
              figcaption.suave-amarillo Nota. Tomada de https://icon-icons.com/es/icono/google-play/72023
      .py-3.py-md-4(titulo="Windows Phone")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 
              italic Windows Phone
            p Esta tienda es desarrollada por 
              italic Microsoft, 
              | exclusivamente para teléfonos con sistema operativo de 
              italic Windows.
            p 
              italic Windows Phone Store 
              | ha tenido beneficios económicos pero su popularidad nunca ha sido ni cercana a 
              italic App Store 
              | o 
              italic Google Play.
          .col-md-1
          .col-md-4
            .titulo-sexto.color-acento-botones
              p.mb-0
                strong Figura 3.  
                | Logo tienda 
                italic Windows Phone Store
            figure
              img.mb-1(src='@/assets/curso/temas/t11/tema1-img3.jpg', alt='Windows Phone')
              figcaption.suave-amarillo Nota. Tomada de 
                italic App Store 
                | https://www.apple.com/co/app-store        


</template>

<script>
export default {
  name: 'Tema11',
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
