<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Eventos <em>listeners</em>

    p.mb-4(data-aos="fade") En Android para crear la interacción del usuario con la aplicación se hace a través de eventos. Por ejemplo, cuando se toca una vista (como un botón) se llama al método #[em #[b onTouchEvent]] () del objeto utilizando los objetos de escucha de eventos para detectar la interacción del usuario.

    .bloque-texto-a.color-primario.p-4.mb-5(data-aos="fade-down")
      .row.align-items-center.justify-content-around
        .col-lg-3.mb-4.mb-lg-0
          figure
            img.mx-auto(src="@/assets/curso/temas/t3/1.svg" style="width:180px;")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Los #[em Event Listeners] (objetos de escucha de eventos) son interfaces de la clase #[em view] que contienen un método de llamado el cual será invocados cuando la vista registre una interacción del usuario con el elemento de la interfaz gráfica. Esto quiere decir que los #[em view] como #[em #[b Button]], #[em #[b ImageView]], #[em #[b RadioButton]], #[em #[b Checkbox]], al interactuar con el usuario el objeto escuchará y llamará al método correspondiente a estos view el cual ejecutará una acción determinada.

    p.mb-0(data-aos="fade") La ejecución de los eventos se realiza en el código Java ubicado en la carpeta /java
    p(data-aos="fade") Para fijar un #[em listener] se debe implementar y agregar los métodos del evento correspondiente a cada #[em view] mediante el método setOn.

    h5.mb-4(data-aos="fade") Para realizar el ejemplo del evento #[em listener] de un #[em Button], se deben seguir algunos pasos que se presentan a continuación.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-4" data-aos="fade-down")
      .row.justify-content-center(titulo="1. Crear el Button en el <em>Layout</em> con su propiedad ID ya que es la que nos va a permitir referenciarlos desde el código Java.")
        .col-lg-10.mb-3  
          figure
            img(src="@/assets/curso/temas/t3/5.png")
        .col-lg-11
          p Se muestra la creación de un botón en el #[em layout] llamado activity_main.xml, el código XML tiene creado un contenedor de tipo #[em #[b LinearLayout]] con su propiedad vertical y el #[em #[b Button]] es creado con sus propiedades básicas, la propiedad que se necesita para referenciar es la del id el nombre del identificador que se colocó para el ejemplo fue #[em #[b btnclic]], y en la vista de diseño se puede ver cómo queda el #[em button]. 
          p #[b Estas son las diferentes vistas en las que se puede trabajar en el #[em layout].]
          p.mb-0 #[b #[em Code]]: permite visualizar solo el código XML.
          p.mb-0 #[b #[em Split]:] permite visualizar el código y el diseño como se ve en la figura.
          p #[b #[em Desing]:] permite visualizar solo el editor de diseño.

      .row.justify-content-center(titulo="2. En la clase Java declarar el tipo de <em>view</em> y referenciarlo.")
        .col-lg-10.mb-3
          figure
            img(src="@/assets/curso/temas/t3/6.png")
        .col-lg-11
          p La clase en Java está compuesta por un método principal que se llama Oncreate, todo el código que esté dentro de este método se ejecuta inmediatamente se corra la aplicación.
          p Cada clase tiene relacionado su #[em layout] en el método setContentView por lo tanto se debe referenciar los #[em view] en cada clase que lo contenga, en el ejemplo la clase Java MainActivity contiene al #[em layout] activity_main que fue donde se creó el #[em Button].

      .row.justify-content-center(titulo=" 3. Implementar el evento <em>listener</em>.")
        .col-lg-10.mb-3
          figure
            img(src="@/assets/curso/temas/t3/7.png")
        .col-lg-11
          p En la figura se ve la implementación del evento setOnClickListener para que cuando el usuario de clic en el botón se ejecute una instrucción, el código debe escribirse en el método onClick.
          p.mb-4 Los #[em View] tiene diferentes métodos escuchadores, en la tabla que se encuentra a continuación se pueden observar los más utilizados:
          .table-a.mt-4
            table.tabla__1(width="100%")
              thead
                tr.bg-1
                  th.h5(style="border-right:2px #AFAFAF solid;width:30%") #[em View]
                  th.h5(style="width:30%") Método
              tbody
                tr(style="background-color:#C1F8FF")
                  td(style="border-right:2px #AFAFAF solid;width:30%")
                    h6.mb-0 #[em ListView]
                  td(style="width:70%") #[em #[b SetOnItemClickListener]]
                tr(style="background-color:#A9EBF4")
                  td(style="border-right:2px #AFAFAF solid;width:30%")
                    h6.mb-0 #[em Spinner]
                  td(style="width:70%") #[em #[b SetOnItemSelectedListener]]
                tr(style="background-color:#C1F8FF")
                  td(style="border-right:2px #AFAFAF solid;width:30%")
                    h6.mb-0 #[em ImageView]
                  td(style="width:70%") #[em #[b SetOnClickListener]]
                tr(style="background-color:#A9EBF4")
                  td(style="border-right:2px #AFAFAF solid;width:30%")
                    h6.mb-0 #[em RadioButton]
                  td(style="width:70%") #[em #[b SetOnClickListener]]

    
    .tarjeta.p-3.col-lg-10.m-auto.bg-gradiente(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.px-lg-4(src="@/assets/curso/temas/t1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3 Amplíe sus conocimientos
              p.mb-0 Para ampliar la información, lo invitamos a ver el video Capítulo 14 – Interacción con Botones, #[em TextView], #[em ImageView].
            .col-sm-auto
              a.boton.boton--b.color-acento-contenido(href="https://www.youtube.com/watch?v=-z8zTGTo7vA" target="_blank")
                span Ir al sitio web
                i.fas.fa-globe





</template>

<script>
export default {
  name: 'Tema3',
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
