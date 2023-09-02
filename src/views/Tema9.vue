<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Entorno de desarrollo Xcode

    .row
      .col-lg-6(data-aos="fade-right")
        figure.mb-3
          img.w-auto(src='@/assets/curso/temas/t9/t2-ic1.png', alt='') 
        p #[b Xcode] es un entorno de desarrollo integrado (IDE) para #[b macOS] que contiene un completo conjunto de herramientas para desarrolladores, permite crear apps para #[b Mac, iPhone, iPad, Apple Watch y Apple TV. Xcode.] Combina las funcionalidades de diseño de interfaz de usuario, programación, pruebas, depuración y envío a App Store en un flujo de trabajo unificado.
      .col-lg-6(data-aos="fade-left")
        figure.mb-5
          img.w-auto(src='@/assets/curso/temas/t9/t2-i1.png', alt='') 
    
    p.mb-4(data-aos="fade") Las características de desarrollo de Xcode las podrá visualizar a continuación:

    TabsC.color-acento-contenido(data-aos="fade-down")
      .py-3.py-md-4(titulo="Simulador")
        .row.mb-5
          .col-md-6
            figure
              img.w-auto(src='@/assets/curso/temas/t9/t2-i3-0.png', alt='Ejmplo de codigo')       
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Simulador
            p Proporciona una rápida simulación para las pruebas en entornos de dispositivos iPhone, iPad, Apple Watch y Apple Tv con diferentes versiones de sistemas operativos para cuando no se tenga un dispositivo físico disponible.
      .py-3.py-md-4(titulo="<em>Instruments</em>")
        .row.mb-5
          .col-md-6
            figure
              img.w-auto(src='@/assets/curso/temas/t9/t2-i3.png', alt='Ejmplo de codigo')       
          .col-md-6.mb-4.mb-md-0.p-4
            h4 #[em Instruments]
            p Facilita una herramienta de análisis de la aplicación que permite encontrar problemas de memoria y mejora el rendimiento de la aplicación.        
      .py-3.py-md-4(titulo="Modelos de aprendizaje automático")
        .row.mb-5
          .col-md-6
            figure
              img.w-auto(src='@/assets/curso/temas/t9/t2-i4.png', alt='Ejmplo de codigo')       
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Modelos de aprendizaje automático
            p Por medio del uso del Create ML, se pueden crear y entrenar modelos personalizados de aprendizaje automático. Por ejemplo, se pueden entrenar modelos para que reconozcan zapatos, mostrándoles una variedad de imágenes de estos.
      .py-3.py-md-4(titulo="<em>Reality Composer</em>")
        .row.mb-5
          .col-md-6
            figure
              img.w-auto(src='@/assets/curso/temas/t9/t2-i4.png', alt='Ejmplo de codigo')       
          .col-md-6.mb-4.mb-md-0.p-4
            h4 #[em Reality Composer]
            p Ofrece una herramienta que permite construir objetos 3D y experiencias de realidad aumentada (AR).


    Separador

    #t_9_1.titulo-segundo.color-acento-contenido(data-aos="fade") 
      .h2 9.1  Instalación

    .row.mb-3
      .col-lg-2.mb-3
        figure
          img.w-auto(src='@/assets/curso/temas/t9/t2-ic2.svg', alt='Ejmplo de codigo')
      .col-lg-10.mb-3
        p La descarga del entorno de desarrollo #[b Xcode] se realiza a través de la #[b Mac App Store].
        p En la siguiente tabla puede ver los requisitos mínimos para su instalación:
    
    .titulo-sexto.color-acento-contenido(data-aos="fade") 
      p.mb-0 #[b Tabla 9.] Versiones recientes de Xcode y requisitos para instalación
    .tabla-a.color-primario.mb-5
      table.text-center
        thead
          tr.bg-6
            th Versión de Xcode
            th Mínimo SO requerido
            th Arquitectura
        tbody
          tr
            td Xcode 13 beta
            td macOS Big Sur 11.3
            td x86_64<br>armv7<br>armv7s<br>arm64<br>arm64e 
          tr
            td Xcode 12.5.1
            td macOS Big Sur 11
            td x86_64<br>armv7<br>armv7s<br>arm64<br>arm64e 
          tr
            td Xcode 12.4
            td macOS Catalina 10.15.4 (Mac basado en Intel) <br> macOS Big Sur 11 (Mac de silicona de Apple)
            td x86_64<br>armv7<br>armv7s<br>arm64<br>arm64e 
          tr
            td Xcode 12.3
            td macOS Catalina 10.15.4 (Mac basado en Intel)<br> macOS Big Sur 11 (Mac de silicona de Apple)
            td x86_64<br>armv7<br>armv7s<br>arm64<br>arm64e 
          tr
            td Xcode 12
            td macOS Catalina 10.15.4
            td x86_64<br>armv7<br>armv7s<br>arm64<br>arm64e                

          tr
            td Xcode 11.7
            td macOS Catalina 10.15.2
            td x86_64<br>armv7<br>armv7s<br>arm64<br>arm64e

    .row.mb-5.justify-content-center(data-aos="fade-down") 
      .col-lg-10
        .tarjeta.bg-6.p-4
          .row
            .col-lg-2
              figure.mb-4.mb-lg-0
                img(src='@/assets/curso/temas/t9/t3-i5.svg', alt='') 
            .col-lg-10
              p.mb-5  A continuación, puede #[b profundizar sobre el lenguaje de programación Swift] de forma más detallada, para esto se invita a que visite la página:
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=xTy6BWV4NR8" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] https://www.youtube.com/watch?v=xTy6BWV4NR8


    Separador

    #t_9_2.titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 9.2 Configuración
    
    .bloque-texto-a.color-primario.p-4.mb-5(data-aos="fade-down")
      .row.align-items-center.justify-content-around
        .col-lg-3.mb-4.mb-lg-0
          figure
            img.py-lg-4.px-lg-5(src='@/assets/curso/temas/t9/t1-logo.svg', alt='') 
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-03 Antes de iniciar un proyecto se debe preparar la información de la configuración que permite la identificación de la aplicación y del desarrollador, para lo que debe tener en cuenta estos ítems:

    h3(data-aos="fade")  Switch

    TabsA.color-primario.mb-5(data-aos="fade-down")
      .tarjeta.bg-1.p-4(titulo="Nombre del proyecto")
        .row.justify-content-center.align-items-center
          .col-lg-12.mb-5
            h4 Nombre del proyecto
            p.mb-0 El nombre que se utiliza cuando se configura el proyecto es el mismo nombre que figurará cuando instale la aplicación en el dispositivo.
          .col-lg-7
            figure.mb-5
              img.w-auto(src='@/assets/curso/temas/t9/t2-i7-0.png', alt='') 
      .tarjeta.bg-1.p-4(titulo="Identificador de organización")
        .row.justify-content-center.align-items-center
          .col-lg-12.mb-5
            h4 Identificador de organización
            p.mb-0 Hace parte del id del paquete, el identificador es una cadena de DNS inversa que identifica de forma exclusiva a la empresa.
          .col-lg-7
            figure.mb-5
              img.w-auto(src='@/assets/curso/temas/t9/t2-i7.png', alt='') 
      .tarjeta.bg-1.p-4(titulo="Nombre de la organización")
        .row.justify-content-center.align-items-center
          .col-lg-12.mb-5
            h4 Nombre de la organización
            p.mb-0 Se define para derechos de autor el archivo fuente y el nombre de encabezado va a tener el nombre de la empresa.
          .col-lg-10
            figure.mb-5
              img.w-auto(src='@/assets/curso/temas/t9/t2-i8.png', alt='') 

    p.mb-5(data-aos="fade")  Una vez preparada la información y la identificación de la aplicación y del desarrollador podrá proceder a la creación de un proyecto, para dar inicio a un proyecto en Xcode se selecciona la ruta que se muestra en la siguiente figura:
    
    h3(data-aos="fade") Archivo>Nuevo>Proyecto
    
    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-lg-6
        figure.mb-3
          img.w-auto(src='@/assets/curso/temas/t9/d1.png', alt='Ejemplo de creacion de proyecto X-code') 
        figcaption Nota. https://developer.apple.com/documentation/xcode/creating-an-xcode-project-for-an-app

    p(data-aos="fade") Cuando se crea un proyecto, la ventana solicita seleccionar la plataforma, que para este caso es iOS y la plantilla.
    p.mb-4(data-aos="fade") Luego, se configura la información preparada anteriormente, como nombre, identificador, lenguaje, selección en la interfaz de usuairo SwiftUI.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-6
        figure.mb-2
          img.w-auto(src='@/assets/curso/temas/t9/d2.png', alt='Ejemplo de creacion de proyecto X-code') 
        figcaption Nota. https://apple.co/3suZfli

    .row.mb-5(data-aos="fade-down")
      .col-lg-10 
        .cajon.color-acento-botones.p-4
          p.mb-0 #[b Ventana principal:] en ella se encuentran los recursos y archivos necesarios para construir la aplicación.   
    
    p.mb-5(data-aos="fade") #[b Partes de la ventana:] téngalas en cuenta de acuerdo con el siguiente listado:

    SlyderB.mb-5(:datos="datosSlyder" data-aos="fade-down")

    p.mb-4 En la figura 4 puede observar la presentación de la ventana principal de Xcode.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-2
          p.mb-0 #[strong Figura 4.] Partes de la ventana principal de Xcode
        figure.mb-3
          img.w-auto(src='@/assets/curso/temas/t9/d3.png', alt='Se presentan las partes de la ventana principal de Xcode.') 
        figcaption Nota. https://docs-assets.developer.apple.com/published/7df07db6e97c54d87701e9fa161ef946/10300/creating-an-xcode-project-for-an-app-3@2x.png


    Separador

    #t_9_3.titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 9.3  SwiftUI

    .row.mb-3
      .col-lg-7.mb-4(data-aos="fade-right") 
        p Es un marco que sirve para desarrollar la aplicación por medio de una vista previa interactiva que puede ser visualizada a medida que el usuario diseña su interfaz. Cada que se realiza un cambio Xcode lo actualiza en el código fuente, así que cuando se editan atributos en el inspector, se agrega el código que le corresponde al archivo fuente.
        p Una de las características de #[b SwiftUI] es su diseño adaptativo y debido a su estructura sencilla puede incorporar de forma sencilla generadores de código de herramientas como adobe XD, que crean generadores de código que traducen un diseño a código para programador.
      .col-lg-5.mb-4(data-aos="fade-left") 
        figure
          img.w-auto(src='@/assets/curso/temas/t9/t1-g1.svg', alt='') 

    .row.justify-content-center
      .col-lg-4(data-aos="fade-right")
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 El funcionamiento de #[b SwiftUI] se da en las últimas versiones de los sistemas Apple, debido a que está cargado en el sistema operativo      
      .col-lg-8.mb-4(data-aos="fade-left")
        figure.mb-3
          img(src='@/assets/curso/temas/t9/g2.png', alt='Ejemplo de creacion de interfaz SwiftUI') 
        figcaption Nota. https://i.blogs.es/bc4cb2/screenshot-2019-06-04-at-20.38.41-2-/1366_2000.jpg

    p.mb-4(data-aos="fade") Lo primero que se debe seleccionar al crear un proyecto con #[b Swift]  es el fichero llamado #[b ContentView], que se encarga de crear la pantalla de inicio con código, el cual contiene una estructura que incluye la variable #[b body] que se encarga de devolver diferentes constructores.  
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .tarjeta.tarjeta--gris.p-4.r-0
          figure
            img.w-auto(src='@/assets/curso/temas/t9/t2-cod1.png', alt='Ejemplo de creacion de interfaz SwiftUI') 

    p.mb-4(data-aos="fade") Lo que se encuentra dentro del #[b body] es un constructor que crea un texto y lo ubica en el centro de la pantalla, si se quisiera, por ejemplo, agregar la propiedad de negrita al texto, solo hay que agregar la función #[b bold().] Así:  
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9
        .tarjeta.tarjeta--gris.p-4.r-0
          figure
            img.w-auto(src='@/assets/curso/temas/t9/t2-cod-2.png', alt='Ejemplo de creacion de interfaz SwiftUI') 

    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right")
        p.mb-4 Mostrando el texto #[b #[em Hello World]] en negrita. 
      .col-lg-3.col-10(data-aos="fade-left")
        figure.mb-3
          img.px-lg-3(src='@/assets/curso/temas/t9/t2-end.png', alt='ejemplo SwiftUI Hello Word') 
        figcaption Nota. https://bit.ly/3D6jfzU

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg-6.p-4
          .row
            .col-lg-2
              figure.mb-5.mb-lg-0
                img(src='@/assets/curso/temas/t9/t3-i5.svg', alt='') 
            .col-lg-10
              p Para ver los pasos de creación de un nuevo proyecto y la exploración de lienzos visite los anexos del archivo nombrado como #[b “Creación proyecto y exploración lienzo”], y si desea profundizar y conocer más sobre vistas, se invita a que consulte el enlace
              a.anexo.mb-4.mb-lg-0(href="https://developer.apple.com/tutorials/swiftui/creating-and-combining-views" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] https://developer.apple.com/tutorials/swiftui/creating-and-combining-views



</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: '<em>Navigator area</em>',
        texto:
          '<b>(Área de navegación)</b> <br>Permite ver y seleccionar la estructura de archivos del proyecto.',
        imagen: require('@/assets/curso/temas/t9/t2-s1.jpg'),
      },
      {
        titulo: '<em>Editor area</em>',
        texto:
          '<b>(Área de edición)</b> <br>Muestra el contenido de los archivos a editar.',
        imagen: require('@/assets/curso/temas/t9/t2-s2.jpg'),
      },
      {
        titulo: '<em>Inspector area</em>',
        texto:
          '<b>(Inspector de área)</b> <br>Permite visualizar los atributos para editar las propiedades de un archivo o elemento de la interfaz.',
        imagen: require('@/assets/curso/temas/t9/t2-s3.jpg'),
      },
      {
        titulo: '<em>Toolbar</em>',
        texto:
          '<b>(Barra de herramientas)</b> <br>Permite crear y ejecutar la aplicación en un dispositivo, usando el emulador o un dispositivo real.',
        imagen: require('@/assets/curso/temas/t9/t2-s4.jpg'),
      },
    ],
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
