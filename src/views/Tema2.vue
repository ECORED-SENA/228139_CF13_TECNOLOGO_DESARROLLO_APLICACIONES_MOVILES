<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Interfaz de usuario en Android

    p(data-aos="fade") La interfaz de usuario se define a través de la estructura de un diseño para la aplicación, en el caso de Android por ejemplo, en una actividad.

    .bloque-texto-a.color-primario.p-4.mb-5(data-aos="fade-down")
      .row.align-items-center.justify-content-around
        .col-lg-3.mb-4.mb-lg-0
          figure
            img.py-lg-4.px-lg-5(src="@/assets/curso/temas/t2/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 La creación de los elementos del diseño se hace utilizando una jerarquía de objetos #[em View] y #[em ViewGroup] donde los #[em View] son los elementos que el usuario puede visualizar, como son: botones, textos, imágenes, y un #[em ViewGroup] es un contenedor no visible que define la estructura del diseño de los #[em view] y otros objetos.

    .titulo-sexto.color-acento-contenido(data-aos="fade") 
      p.mb-0 #[b Figura 1.] Ilustración jerarquía de diseño

    figure.col-md-10.m-auto.mb-5(data-aos="fade-down")
      img(src="@/assets/curso/temas/t2/fig1.svg" alt="Mapa conceptual que presenta la jerarquía de diseño.")

    p(data-aos="fade") Los objetos #[em ViewGroup] son llamados #[em Layout] (diseños) y son de muchos tipos, dependiendo de la distribución y la posición de sus views como, por ejemplo, LinearLayout, RelativeLayout entre otros.
    h5.mb-4(data-aos="fade") El diseño en Android se puede trabajar de dos maneras: en XML, o en el editor de diseño (mediante una interfaz de arrastrar y soltar).

    .row
      .col-md-6.mb-3(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/t2/3.svg" )
      .col-md-6.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/t2/4.png" )


    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2#t_2_1 2.1 #[em Layouts]

    .text-center.fondo-t2.py-5.row.mb-5(style="min-height:700px;max-height:100%;height:100%;place-content: flex-end;" data-aos="fade-down")
      div(v-if="caja1")
        .p-4.col-md-12.m-auto(style="background-color:rgba(0,0,0,.7);z-index:1;position:relative;" data-aos="fade-in")
          h1.text-white.mb-0 Construir un aplicativo según las características de la arquitectura Android
        button.boton__1.mt-3(@click="mostrar2") Iniciar
      
      div(v-if="caja2")
        .row
          .col-md-7.mb-4
            h1(style="color:#FFCA28;text-align:left;text-shadow: 0px 0px 3px #424242;") Layouts
            .p-5.bg-white.caja_flotante(style="border-radius:10px;text-align:left;")
              p En Android Studio los componentes visuales (Button, Editext, Textview, etc.) se organizan mediante contenedores llamados Layout.
              p Los #[em layouts] son elementos no visuales que permiten controlar la organización, posición y dimensiones de los #[em view] que se crean dentro de él, como muchos otros componentes contenedores, son capaces de contener a otros controles, es decir, que se puede tener un contenedor dentro de otro contenedor.
              p Existen diferentes tipos de #[em layouts] entre los más comunes están: el LinearLayout, TableLayout, ConstraintLayout.
          .col-md-5.text-center.mb-4
            figure.m-auto
              img(src="@/assets/curso/temas/t2/6.svg" data-aos="fade-left" style="max-height:500px;")
        .col-md-12.m-auto(style="display:inline-flex;")
          figure(style="text-align:right;")
            img.caja_escalada_hover(src="@/assets/curso/temas/t2/7.svg" style="max-width: 70px;display:inline;cursor:pointer;" @click="mostrar1")
          figure(style="text-align:left;")
            img.caja_escalada_hover(src="@/assets/curso/temas/t2/8.svg" style="max-width: 70px;display:inline;cursor:pointer;" @click="mostrar3")

      div(v-if="caja3")
        .row
          .col-md-4.mb-4
            figure.text-center
              img.caja_escalada_hover(src="@/assets/curso/temas/t2/9.svg" style="display:inline;cursor:pointer;max-height:350px;"  @click="modal1 = true")
            .p-4.bg-white.caja_flotante.caja_escalada_hover(style="border-radius:10px;cursor:pointer;"  @click="modal1 = true")
                h3.mb-0.text-center 1. LinearLayout
          .col-md-4.mb-4
            figure.text-center
              img.caja_escalada_hover(src="@/assets/curso/temas/t2/10.svg" style="display:inline;cursor:pointer;max-height:350px;"  @click="modal2 = true")
            .p-4.bg-white.caja_flotante.caja_escalada_hover(style="border-radius:10px;cursor:pointer;"  @click="modal2 = true")
                h3.mb-0.text-center 2. TableLayout
          .col-md-4.mb-4
            figure.text-center
              img.caja_escalada_hover(src="@/assets/curso/temas/t2/11.svg" style="display:inline;cursor:pointer;max-height:350px;"  @click="modal3 = true")
            .p-4.bg-white.caja_flotante.caja_escalada_hover(style="border-radius:10px;cursor:pointer;"  @click="modal3 = true")
                h3.mb-0.text-center 3. ConstraintLayout
        .col-md-12.m-auto(style="display:inline-flex;")
          figure(style="text-align:center;")
            img.caja_escalada_hover(src="@/assets/curso/temas/t2/7.svg" style="max-width: 70px;display:inline;cursor:pointer;" @click="mostrar2")

        ModalA(:abrir-modal.sync="modal1")
          .row(style="text-align:left")
            h2 1. LinearLayout
            p Dispone las vistas de la interfaz una debajo de otra (orientación vertical), o una al lado de la otra (orientación horizontal). Sus propiedades principales son:
            ul(style="list-style:disc;padding:revert;")
              li #[em Orientation]: es la propiedad que define la disposición de sus vistas si es horizontal o vertical.
              li Layout_height: esta propiedad específica el alto del #[em viewGroup] (Contenedor).
              li Layout_width: esta propiedad específica el ancho del #[em viewGroup] 
            .row
              .col-md-6.mb-4
                p Los valores que puede tomar las propiedades #[em height] y #[em width] son: &lt;&lt;match_parent&gt;&gt; para que ocupe el mismo tamaño de la pantalla, o el valor &lt;&lt;wrap-content&gt;&gt; para que se adapte al tamaño de su contenido, también puede tener valores personalizados que se miden con dp (pixeles de densidad independiente), las propiedades de #[em heigth] y #[em width] se aplican para todos los contenedores y vistas.
              .col-md-6.mb-4
                figure
                  img(src="@/assets/curso/temas/t2/12.svg")
            h3 Diseño utilizando LinearLayout
            figure.col-md-10.m-auto.mb-3
              img(src="@/assets/curso/temas/t2/39.png")
            p La figura muestra el código XML para la creación de un #[strong #[em layout]] de tipo #[strong LinearLayout] con la orientación vertical el cual contiene dos #[strong #[em views]] de tipo #[strong Button].
            p.mb-0 #[strong &lt;LinearLayout:] tipo de contenedor lineal 
            p.mb-0 #[strong orientation=vertical:] propiedad que define la ubicación de los #[em views] de forma vertical. 
            p.mb-0 #[strong layout_width:] propiedad que define el ancho del contenedor. 
            p #[strong layout_height:] propiedad que define el alto del contenedor #[Strong &gt;]
            p.mb-0 #[strong &lt;Button:] etiqueta para crear un #[em view] de tipo Button (Botón). 
            p.mb-0 #[strong layout_width:] propiedad que define el ancho del #[em view]. 
            p.mb-0 #[strong layout_height:] propiedad que define el alto del #[em view].
            p #[strong text:] propiedad que define el título del button #[Strong /&gt;]
            p El código anterior mostraría el #[strong LinearLayout] de la siguiente forma:
            p(style="padding-left:13px;border-left:4px #4DD0E1 solid;") Vista de Diseño LinearLayout
            figure.col-md-4.m-auto
              img(src="@/assets/curso/temas/t2/40.png")

        ModalA(:abrir-modal.sync="modal2")
          .row(style="text-align:left")
            h2 2. TableLayout
            .row
              .col-md-9.mb-3
                p Es un contenedor #[em ViewGroup] que permite mostrar los elementos #[em view] en columnas y filas. Para crear las filas se utiliza el objeto TableRow  cada fila puede tener 1 o más celdas o ninguna, y celda se crea por un tipo de objeto #[em view]. Es decir, las celdas de una fila se pueden formar por una diversidad de objetos #[em view], como ImageView o TextView.
                p El siguiente código XML de diseño tiene dos filas y tres celdas en cada uno y de otra fila y dos celdas.
              .col-md-3.mb-3
                figure.p-3
                  img(src="@/assets/curso/temas/t2/14.svg")
            h3 Estructura de un TableLayout
            p(style="padding-left:13px;border-left:4px #4DD0E1 solid;") XML TableLayout
            figure.col-md-10.m-auto.mb-4
              img(src="@/assets/curso/temas/t2/13.svg")
            p El código anterior mostraría el #[strong TableLayout] de la siguiente forma:
            p( style="padding-left:13px;border-left:4px #4DD0E1 solid;") XML TableLayout
            figure.col-md-5.m-auto
              img(src="@/assets/curso/temas/t2/38.png")

        ModalA(:abrir-modal.sync="modal3")
          .row(style="text-align:left")
            h2 3. ConstraintLayout
            .row
              .col-md-9.mb-3
                p Es el contenedor más utilizado en este momento y el que viene por defecto cuando se crea una actividad, ya que permite crear los #[em view] directamente desde las herramientas visuales del editor de diseño. Con este contenedor se puede crear todo el diseño arrastrando y soltando elementos, en lugar de editar el XML.
                p Cada posición de un #[em view] en un ContraintLayout se define agregando por lo menos una restricción horizontal y una vertical. Cada restricción representa una conexión o alineación con otra vista. Cada restricción define la posición de la vista a lo largo del eje vertical u horizontal, por lo que cada vista debe tener un mínimo de una restricción para cada eje, aunque normalmente se necesitan más.
              .col-md-3.mb-3
                figure.p-3
                  img(src="@/assets/curso/temas/t2/16.svg")
            h3 Vista de Diseño ConstraintLayout
            figure.col-md-6.m-auto
              img(src="@/assets/curso/temas/t2/17.svg")
            p La figura anterior muestra las conexiones que tiene el #[em view Button] en sus ejes horizontales y verticales que se realizan desde el editor de diseño solo con arrastrar y soltar sin utilizar el código XML como en los anteriores contenedores.

    
    .tarjeta.p-3.col-lg-10.m-auto.bg-gradiente(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.px-lg-4(src="@/assets/curso/temas/t1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-sm-0
              h3 Amplíe sus conocimientos 
              p.mb-0 Para ampliar la información, lo invitamos a visitar las páginas:
          .row.justify-content-between.align-items-center.mb-3
            .col.mb-3.mb-sm-0
              p.mb-0 Cómo crear una IU responsiva con ConstraintLayout.
            .col-sm-auto
              a.boton.boton--b.color-acento-contenido(href="https://developer.android.com/training/constraint-layout?hl=es-419" target="_blank")
                span Ir al sitio web
                i.fas.fa-globe
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Interfaz de usuario en Android: Layouts.
            .col-sm-auto
              a.boton.boton--b.color-acento-contenido(href="https://www.sgoliver.net/blog/interfaz-de-usuario-en-android-layouts" target="_blank")
                span Ir al sitio web
                i.fas.fa-globe


    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2#t_2_2 2.2 Controles básicos

    p(data-aos="fade") En Android Studio se encuentra una amplia variedad de controles que se pueden utilizar en la interfaz de usuario, tales como botones (#[em Button]) campos de texto (EditText) vista de imágenes (ImageView) casillas de verificación (CheckBox) botones de selección (RadioButton) etiquetas de texto (TextView) listas (ListView) entre otros.
    h5.mb-4(data-aos="fade") Existen 3 propiedades que son indispensables en la creación de los controles nombrados anteriormente y son:

    .row.justify-content-center.mb-3(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-3
        .p-4.p-lg-5.bg-5.h-100
          h4 Android: layout_width
          p Esta propiedad es común a todas las vistas y es la que permite establecer cuál será el ancho usado. Este valor puede ser fijado referente al contenido que se va a mostrar o referente a la vista que lo contiene
      .col-lg-4.col-md-6.mb-3
        .p-4.p-lg-5.bg-6.h-100
          h4 Android: layout_height
          p Esta propiedad es común a todas las vistas y es la que permite establecer cuál será el alto usado. Este valor puede ser fijado referente al contenido que se va a mostrar o referente a la vista que lo contiene.
      .col-lg-4.col-md-6.mb-3
        .p-4.p-lg-5.bg-5.h-100
          h4 Android: id
          p.mb-0 Define el identificador asociado a la vista para ser referenciado por código Java. la forma de crear un identificador es la siguiente:
          p #[strong Android:id=“@+id/myText”] El símbolo @+id/ quiere decir que se está generando un nuevo identificador, esto provocará que la clase R del paquete gen del proyecto cree una referencia de este objeto para que luego pueda ser manipulado por código.

    h5(data-aos="fade") Los valores que pueden tomar las propiedades de Android: layout_width, y Android: layout_height los cuales aplican para todos los controles son:

    .row.justify-content-center.mb-3
      .col-md-6.mb-3(data-aos="fade-right")
        .p-4.p-lg-5.bg-4.h-100
          p #[strong MATCH_PARENT,] lo que significa que la vista va a tener el tamaño de su padre, en este caso el de la pantalla.
      .col-md-6.mb-3(data-aos="fade-left")
        .p-4.p-lg-5.bg-4.h-100
          p #[strong WRAP_CONTENT,]  lo que significa que el tamaño de la vista se adaptará a lo que escriban en su contenido.
      .col-md-8.mb-3(data-aos="fade-down")
        .p-4.p-lg-5.bg-4.h-100
          p #[strong PERSONALIZADO:] también se puede definir el alto y el ancho con valores personalizados con unidad de medida dp (pixeles independientes de densidad), ejemplo:
          h5 #[strong android: layout_width= “50dp”]
          h5 #[strong android: layout_height=”200dp”]

    p.mb-4(data-aos="fade") Estas tres propiedades básicas son las principales en los componentes que se describen a continuación.

    figure.m-auto.col-md-7.mb-5(data-aos="fade-down")
      img(src="@/assets/curso/temas/t2/18.svg" )

    h3(data-aos="fade") Botones
    p.mb-4(data-aos="fade") Un botón (Button) es un elemento de la interfaz en el que el usuario puede tocar o hacer clic para realizar una acción. En la tabla 1, puede observarse un ejemplo de un Button, con sus propiedades básicas:
    
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade") 
      p.mb-0 #[strong Tabla 1.] Propiedades básicas Button
    .table-a.col-md-10.mb-4(data-aos="fade-down")
      table.tabla__1(width="100%")
        thead.bg-6
          tr
           th 
            h4.mb-0 Button 
           th 
            h4.mb-0 Propiedad básica
        tbody
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 android:layout_width
            td(style="width:70%") Define el ancho de la vista
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 android:layout_height
            td(style="width:70%") Define el alto de la vista
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 android:id
            td(style="width:70%") Define el identificador asociado a la vista para ser referenciado por código java
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 android:text
            td(style="width:70%") Define el texto asociado a la vista

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade") 
      p.mb-0 XML Creation Button
    figure.col-md-4.mb-4(data-aos="fade-down")
      img(src="@/assets/curso/temas/t2/19.svg" )

    p.mb-4(data-aos="fade") Y el botón quedaría así:

    figure.col-md-4.mb-5(data-aos="fade-down")
      img(src="@/assets/curso/temas/t2/20.svg" )


    h3(data-aos="fade") Texto e Imágenes
    p(data-aos="fade") Unos de los controles más utilizados son los referentes a los textos e imágenes, ya que son con los que más interactúa el usuario. A continuación, se realizará una descripción de tres de los componentes básicos más imprescindibles para el desarrollo de nuestras aplicaciones: los textos o etiquetas (TextView) las imágenes (ImageView) y los cuadros de texto (EditText).

    .p-4.p-lg-5.bg-8.mb-5(data-aos="fade")
      p.mb-0 #[strong TextView:] es un control utilizado para desplegar contenido textual generalmente estático, tiene la propiedad de acoplarse al control que lo contenga y no captura el foco en ningún momento por lo que generalmente no se programa ningún evento sobre él, sus propiedades básicas son las siguientes:

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade") 
      p.mb-0 #[strong Tabla 2.] Propiedades básicas TextView
    .table-a.col-md-11.mb-5(data-aos="fade-down")
      table.tabla__1(width="100%")
        thead.bg-6
          tr
           th 
            h4.mb-0 TextView 
           th 
            h4.mb-0 Propiedad básica
        tbody
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:layout_width
            td(style="width:70%;") Define el ancho de la vista.
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;")
              h5.mb-0 android:layout_height
            td(style="width:70%;") Define el alto de la vista.
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:id
            td(style="width:70%;") Define el identificador asociado a la vista para ser referenciado por código java.
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:text
            td(style="width:70%;") 
              p.mb-1 Establece cual es el contenido a ser mostrado por el #[strong #[em TextView]].
              p.mb-1 Existen dos formas de asociar el texto a una vista, la primera forma y más simple es asociar el texto de forma directa:
              p.mb-1 #[strong android:text=]“Hola Mundo”
              p La segunda forma es por medio de archivo #[strong #[em string XML]] ubicado dentro de la carpeta values de los recursos del proyecto y asociar cada uno de los textos con una llave respectiva así:
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 Archivo XML String
              figure
                img(src="@/assets/curso/temas/t2/41.png" )
              p Ya luego se referencia el contenido por medio de este archivo XML de la siguiente forma: #[strong android:text="@string/boton2"]
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android: textColor
            td(style="width:70%;") Esta propiedad nos permite definir cuál va a ser el color del texto.
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;")
              h5.mb-0 android: textSize
            td(style="width:70%;") Con esta propiedad podemos definir el tamaño de la fuente la unidad es sp. Ejemplo: #[strong android:textSize="20sp"]
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android: textStyle
            td(style="width:70%;")
              p Define el estilo de la fuente a usar, tiene los siguientes valores:
              .titulo-sexto.color-acento-contenido.mb-2
                p.mb-0 Valores estilo de texto
              figure.col-md-7.mb-3
                img(src="@/assets/curso/temas/t2/22.svg" )
              p Ejemplo: android: textStyle="italic"
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;")
              h5.mb-0 android: typeface
            td(style="width:70%;") Esta propiedad me permite cambiar el tipo de fuente dentro de un conjunto de 4 posibles opciones: normal, sans, serif y monospace, se pueden descargar otro tipo de fuentes.

    h5(data-aos="fade") Ejemplo de TextView con sus propiedades básicas:

    .row
      .col-md-6.mb-3(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/t2/23.svg" )
      .col-md-6.mb-3(data-aos="fade-left")
        p El TextView quedaría así:
        figure.col-md-8
          img(src="@/assets/curso/temas/t2/24.svg" )

    .p-4.p-lg-5.bg-8.mb-5(data-aos="fade")
      p #[strong.h4 ImageView:] es un control de imágenes que permite acceder a los recursos de imágenes (#[em drawable] o #[em mipmap]) permitiendo mostrar las imágenes en la aplicación, su propiedad principal es android:src que permite indicar la imagen a mostrar del proyecto. Lo primero que se debe hacer es copiar la imagen que se quiere mostrar a la carpeta #[em drawable] del proyecto /res/drawable y después en el XML se debe indicar la ruta de origen así: android:src=” @drawable/imagen”
      p.mb-0 Aparte de las propiedades de #[em width] y #[em heigth] que se encuentran en todos los #[em view] están las siguientes básicas para el ImageView:

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade") 
      p.mb-0 #[strong Tabla 3.] Propiedades básicas ImageView
    .table-a.col-md-10.mb-5(data-aos="fade-down")
      table.tabla__1(width="100%")
        thead.bg-6
          tr
           th 
            h4.mb-0 ImageView  
           th 
            h4.mb-0 Propiedad básica
        tbody
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:src
            td(style="width:70%;") Establece la imagen del ImageView.
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:scaleType
            td(style="width:70%;") Controla cómo se debe cambiar el tamaño o mover la imagen para que coincida con el tamaño de este ImageView.
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:tint
            td(style="width:70%;") El color de tinte de la imagen.

    p.mb-4(data-aos="fade") Ejemplo de ImageView con sus propiedades básicas.

    .row.mb-3
      .col-md-7.mb-3(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/t2/25.svg" )
      .col-md-5.mb-3(data-aos="fade-left")
        p El ImageView quedaría así:
        figure.col-md-8
          img(src="@/assets/curso/temas/t2/26.svg" )

    .p-4.p-lg-5.bg-8.mb-5(data-aos="fade")
      p.mb-0 #[strong EditText:] es un elemento de la interfaz que permite al usuario ingresar y editar el texto. Una de sus propiedades más funcionales es la de inputType que define el tipo de entrada que va a tener el cuadro de texto, el valor se aplica dependiendo de lo que se quiere ingresar: por ejemplo, un correo electrónico (textEmailAdress) edad (#[em number]) apellido (#[em text]) entre otras, la elección del tipo de entrada configura el tipo de teclado que se muestra.

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade") 
      p.mb-0 #[strong Tabla 4.] Propiedades básicas EditText
    .table-a.col-md-10.mb-5(data-aos="fade-down")
      table.tabla__1(width="100%")
        thead.bg-6
          tr
           th 
            h4.mb-0 EditText  
           th 
            h4.mb-0 Propiedad básica
        tbody
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:inputType
            td(style="width:70%;") Establece el tipo de dato que ingresará en el campo de texto. Para propiedad existen los siguientes datos: #[em text, number, texturi, textpassword, phone, date,] entre otros.
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 #[u android:hint]
            td(style="width:70%;") Esta propiedad permite desplegar un texto sobre el control a manera de ayuda, mientras el usuario aún no ingresa información (preferible sobre la propiedad #[em text]).
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 #[u android:text]
            td(style="width:70%;") Al igual que en el TextView puedo definir cuál es el texto que se mostrará en el control.

    p.mb-4(data-aos="fade") Ejemplo de EditText con sus propiedades básicas.

    .row.mb-5
      .col-md-6.mb-3(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/t2/27.svg" )
      .col-md-6.mb-3(data-aos="fade-left")
        figure.col-md-8
          img(src="@/assets/curso/temas/t2/28.svg" )


    h3(data-aos="fade") Checkbox y Radiobutton
    p.mb-4(data-aos="fade") Otros de los controles muy utilizados en las aplicaciones son los que permiten hacer una selección o un chequeo de alguna opción en las aplicaciones, Android cuenta con dos tipos: checkboxes y los radiobuttons.

    .p-4.p-lg-5.bg-8.mb-5(data-aos="fade")
      p.mb-0 #[strong Checkbox:] las casillas de verificación permiten que el usuario seleccione una o más opciones de un grupo. Aparte de las propiedades de #[em width] y #[em heigth] que se encuentran en todos los #[em view] están las siguientes básicas para el Checkbox:

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade") 
      p.mb-0 #[strong Tabla 5.] Propiedades básicas Checkbox
    .table-a.col-md-10.mb-5(data-aos="fade-down")
      table.tabla__1(width="100%")
        thead.bg-6
          tr
           th 
            h4.mb-0 Checkbox  
           th 
            h4.mb-0 Propiedad básica
        tbody
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:checked
            td(style="width:70%;") Establece el estado actual de Checkbox.
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:text
            td(style="width:70%;") Esta propiedad define el texto del Checkbox.
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:id
            td(style="width:70%;") Al igual que en los otros controles define el identificador único asociado a la vista para ser referenciado por código java.

    p.mb-4(data-aos="fade") Para definir un control de este tipo se utiliza el código siguiente, que define dos Checkbox con los textos español e inglés.

    .row
      .col-md-6.mb-3(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/t2/29.svg" )
      .col-md-6.mb-3(data-aos="fade-left")
        p Los Checkbox quedarían así:
        figure.col-md-8
          img(src="@/assets/curso/temas/t2/30.svg" )


    .p-4.p-lg-5.bg-8.mb-5(data-aos="fade")
      p.mb-0 #[strong RadioButton:] a diferencia del CheckBox el control RadioButton permite realizar una selección única entre una lista de opciones. En Android, un grupo de botones radio button se define mediante un elemento RadioGroup, el cual contiene todos los elementos RadioButton necesarios. 

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade") 
      p.mb-0 #[strong Tabla 6.] Propiedades básicas RadioButton
    .table-a.col-md-10.mb-5(data-aos="fade-down")
      table.tabla__1(width="100%")
        thead.bg-6
          tr
           th 
            h4.mb-0 RadioButton  
           th 
            h4.mb-0 Propiedad básica
        tbody
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:checked
            td(style="width:70%;") Establece el estado actual de seleccionado por defecto del RadioButton.
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:text
            td(style="width:70%;") Esta propiedad define el texto del RadioButton.
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:id
            td(style="width:70%;") Al igual que en los otros controles define el identificador único asociado a la vista para ser referenciado por código java.

    p(data-aos="fade") Para definir un control de este tipo se utiliza como componente Padre un RadioGroup (Padre) y como hijos dos RadioButton (Hijo), el RadioGroup es el que permite que solo sea seleccionable una sola opción en caso de crear los RadioButton, sin un RadioGroup dejará seleccionar todas las opciones, lo que no es el fin del componente.
    p(data-aos="fade") En las propiedades del RadioGroup se puede definir la orientación de los #[strong RadioButton:] la orientación puede ser Vertical -Horizontal.
    p.mb-4(data-aos="fade") El siguiente código muestra la creación de dos RaddioButton con los textos de femenino y masculino los cuales están dentro de un RadioGroup con la propiedad de orientación vertical.

    .row.mb-3
      .col-md-6.mb-3(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/t2/31.svg" )
      .col-md-6.mb-3(data-aos="fade-left")
        p Los RadioButton quedarían así:
        figure.col-md-8
          img(src="@/assets/curso/temas/t2/32.svg" )


    h3(data-aos="fade") Controles de Selección
    p.mb-4(data-aos="fade") Los diferentes controles de los cuales dispone Android para seleccionar opciones dentro de una lista de posibilidades se llaman Spinner (para listas desplegables) y ListView (para listas fijas).

    .p-4.p-lg-5.bg-8.mb-5(data-aos="fade")
      p #[strong Spinner:] este permite seleccionar un valor en un conjunto, al presionar clic sobre ella muestra una especie de lista emergente al usuario con todas las opciones disponibles a seleccionar, su propiedad más importante es android: entries = “@array/lista” que permite fijar el contenido de datos que se quiere mostrar en la lista.
      p.mb-0 #[strong Para añadir una lista de este tipo se deben seguir los pasos que se nombran a continuación:]

    p(data-aos="fade") 1. En los recursos /res/values/strings se debe crear el arreglo de #[em String] (string-array) con los valores que queremos mostrar en el spinner.
    figure.col-md-10.mb-4(data-aos="fade-down")
      img(src="@/assets/curso/temas/t2/33.svg" )

    p(data-aos="fade") 2. Ahora en el /res/layout se crea el siguiente código para crear el Spinner y enlazar el string-array a través de la propiedad entries como se muestra a continuación.
    figure.col-md-7.mb-4(data-aos="fade-down")
      img(src="@/assets/curso/temas/t2/34.svg" )

    p(data-aos="fade") Se muestra la creación de un Spinner con sus propiedades básicas #[em heigth], #[em width] y el id, y la propiedad entries donde relaciona el array ciudades creado en los recursos. 
    p(data-aos="fade") El Spinner quedaría así:
    figure.col-md-5.mb-4(data-aos="fade-down")
      img(src="@/assets/curso/temas/t2/35.svg" )

    .p-4.p-lg-5.bg-8.mb-5(data-aos="fade")
      p #[strong ListView:] permite mostrar al usuario una lista de opciones seleccionables directamente sobre el propio control, sin listas emergentes como en el caso del control Spinner. En caso de existir más opciones de las que se pueden mostrar sobre el control se podrá hacer scroll sobre la lista para acceder al resto de elementos.
      p Para crear el ListView, así como en el Spinner también se debe crear el arreglo de elementos que se quiere mostrar en la lista, para este ejemplo se utilizará el mismo arreglo de ciudades que se utilizó para el Spinner.
      p.mb-0 Cuando los elementos que se quieren mostrar en la lista o en el Spinner no son estáticos se crea el arreglo desde el código Java.

    p Ejemplo de creación de un ListView:(data-aos="fade")
    figure.col-md-7.mb-4(data-aos="fade-down")
      img(src="@/assets/curso/temas/t2/36.svg" )

    p(data-aos="fade") La imagen muestra la creación de un ListView, utiliza las mismas propiedades del Spinner, y la propiedad entries donde relaciona el array ciudades creado en los recursos.
    h5.mb-4(data-aos="fade") El ListView quedaría como se ve a continuación.

    figure.col-md-4(data-aos="fade-down")
      img(src="@/assets/curso/temas/t2/37.svg" )

      

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    caja1: true,
    caja2: false,
    caja3: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    mostrar1() {
      this.caja2 = false
      this.caja3 = false
      this.caja1 = true
    },
    mostrar2() {
      this.caja1 = false
      this.caja3 = false
      this.caja2 = true
    },
    mostrar3() {
      this.caja1 = false
      this.caja2 = false
      this.caja3 = true
    },
  },
}
</script>

<style lang="sass"></style>
