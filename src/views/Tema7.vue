<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Multimedia

    .bloque-texto-a.color-primario.p-4(data-aos="fade-down")
      .row.align-items-center.justify-content-around
        .col-lg-3.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t7/1.svg" style="margin: 0 auto; max-width:150px;")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 En Android Studio la integración de contenido multimedia en las aplicaciones es muy sencilla gracias a las opciones que nos presenta la API. Las principales clases que facilitan el acceso a los servicios multimedia son MediaPlayer, VideoView, además de ser los más usados.


    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_7_1 7.1 MediaPlayer

    p(data-aos="fade") Permite reproducir sonido y video a través de su API.
    p(data-aos="fade") MediaPlayer es uno de los componentes principales del marco de trabajo de medios. Un objeto de esta clase puede recuperar, decodificar y reproducir audio y video con una configuración mínima. Es compatible con varias fuentes de medios diferentes, entre las que se incluyen las siguientes: uri, recursos locales, url externas.
    h5(data-aos="fade") A continuación, se presenta un ejemplo de cómo reproducir un archivo de audio que está disponible como recurso local (ubicado en el directorio res/raw/ de tu app).

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-4" data-aos="fade-down")
      .row.justify-content-center(titulo="1. Crear un directorio dentro de la carpeta res llamada raw.")
        .col-lg-8
          figure
            img(src="@/assets/curso/temas/t7/2.svg")

      .row.justify-content-center(titulo="2. Copiar un sonido en la carpeta raw de extensión mp3.")
        .col-lg-8
          figure
            img(src="@/assets/curso/temas/t7/9.png")

      .row.justify-content-center(titulo="3. En la clase Java escribe el siguiente código.")
        .col-lg-9
          figure.mb-3
            img(src="@/assets/curso/temas/t7/3.svg")
        .col-lg-11
          p Se declara una variable de tipo MediaPlayer.  

      .row.justify-content-center(titulo=" 4. Se crea la instancia del sonido.")
        .col-lg-9
          figure.mb-3
            img(src="@/assets/curso/temas/t7/4.svg")
        .col-lg-11
          p Se crea la instancia del sonido y almacena el sonido ubicado en la carpeta raw.

      .row.justify-content-center(titulo="5. Ejecución del sonido.")
        .col-lg-9
          figure.mb-3
            img(src="@/assets/curso/temas/t7/5.svg")
        .col-lg-11
          p Se ejecuta el sonido con el método start.

    p(data-aos="fade") De esta manera al correr la aplicación ya ejecutará el sonido.


    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_7_2 7.2 #[em VideoView]

    p(data-aos="fade") La clase #[b #[em VideoView]] permite mostrar un archivo de video. La clase #[b #[em VideoView]] puede cargar videos de varias fuentes (como recursos o proveedores de contenido). La propiedad principal de #[b #[em VideoView]] es el #[b #[em setVideoURI]] donde se establece la ruta del video a mostrar.
    h5(data-aos="fade") A continuación, se realiza un ejemplo para mirar el funcionamiento del #[em VideoView].
    p(data-aos="fade") #[strong 1.] Al igual que con el MediaPlayer se debe crear la carpeta raw y guardar en esta carpeta el video de extensión mp4. carpeta res/raw
    p.mb-4(data-aos="fade") #[strong 2.] En el #[em Layout] se crea el componente #[b #[em VideoView]].
    
    figure.mb-5.col-lg-6.m-auto(data-aos="fade-down")
      img(src="@/assets/curso/temas/t7/6.svg" )

    p.mb-4 #[strong 3.] En la clase Java se realiza todo el código descrito paso a paso en la figura.

    .titulo-sexto.color-acento-contenido.col-lg-9.m-auto(data-aos="fade") 
      p.mb-0 #[b Figura 3.] Código Java VideoView
    figure.mb-5.col-lg-9.m-auto(data-aos="fade-down")
      img(src="@/assets/curso/temas/t7/7.svg" alt="Paso a paso donde se realiza todo el código.")

    p.mb-4(data-aos="fade") Al ejecutar se mostrará de la siguiente manera

    figure.col-lg-4.m-auto(data-aos="fade-down")
      img(src="@/assets/curso/temas/t7/8.svg" )








</template>

<script>
export default {
  name: 'Tema7',
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
