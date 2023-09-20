<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Persistencia de datos

    .bloque-texto-a.color-primario.p-4.mb-5(data-aos="fade-down")
      .row.align-items-center.justify-content-around
        .col-lg-3.mb-4.mb-lg-0
          figure
            img.mx-auto(src='@/assets/curso/temas/t10/t3-i1.svg', alt='' style="width:180px;") 
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 La mayoría de las aplicaciones tienen como requisito la persistencia de los datos que lo componen, almacenamiento de preferencias del usuario en el sistema, hasta bases de datos relacionales con grandes datos.
      
    p.mb-4(data-aos="fade") Las principales opciones para la persistencia de datos son:

    .tarjeta--container.row.mb-5.justify-content-center
      .col-lg-5.tarjeta.bg-3.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4.p-5.text-center
          .col-6
            figure.mb-5
              img(src='@/assets/curso/temas/t10/t3-i2.svg', alt='')
          h3 Sistema predeterminado
      .col-lg-5.tarjeta.bg-2.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4.p-5.text-center
          .col-6
            figure.mb-5
              img(src='@/assets/curso/temas/t10/t3-i3.svg', alt='')     
          h3 SQLite

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-down")
      h4 Sistema predeterminado
      p Se refiere a una colección de listas de propiedades, estas se almacenan en la carpeta Biblioteca en una carpeta de preferencias.
      p.mb-0  #[b #[em UserDefaults]] es un mecanismo de Swift que se utiliza para almacenar pequeñas cantidades de datos.

    .row.mb-5.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade") 
          p.mb-0 #[b Figura 5.] Ejemplo #[em UserDefaults]
        .tarjeta--gris.p-3(data-aos="fade-down")
          figure.mb-5(data-aos-delay='0')
            img.w-auto(src='@/assets/curso/temas/t10/t3-c1.svg', alt='Ejemplo de un UserDefaults')

    .cajon.color-acento-botones.p-4.mb-5(data-aos="fade-down")
      .h4 #[em userDefaults.synchronize()]
      p.mb-3  Almacena valores utilizando clave- valor, las líneas de código de la configuración de valores define el tipo de dato y el nombre de la llave con la cual se llamarán los datos, para el ejemplo: 
      p.mb-0  #[b #[em userDefaults.setBool(true, forKey: "Key1")]] está configurando una entrada de valor de tipo #[b booleano] y el nombre de la llave será key1.
    
    .row.mb-5.justify-content-center
      .col-lg-12(data-aos="fade-right")
        p(data-aos="fade") El archivo #[b XML] queda almacenado en el disco en la ruta #[em Library] – #[em Preferences].
      //.col-lg-7(data-aos="fade-left")
        figure.mb-2
          img(src='@/assets/curso/temas/t10/t3-i4.png', alt='') 
        figcaption Nota. <a href='https://bit.ly/3swEV30' target='_blank'>https://bit.ly/3swEV30</a>

    .cajon.color-acento-botones.p-4.mb-5(data-aos="fade-down")
      .h4 SQLite
      p.mb-0 Es una biblioteca que trabaja con bases de datos relacionales que está basado en #[b SQL], entre sus principales características se encuentra que es muy ligera, portátil y liviana.
    
    p(data-aos="fade") A continuación, se nombran los principales componentes que se necesitan para el manejo de bases de datos #[b SQLite].
    p.mb-4(data-aos="fade") Lo primero que se realiza para la creación de un proyecto usando #[b SQLite] es agregar la librería manualmente teniendo en cuenta:
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.tarjeta--gris.p-4(titulo="SQLite.swift")
            .row.justify-content-center.align-items-center
              .col-lg-8
                p '~>0.12.0'
          .tarjeta.tarjeta--gris.p-4(titulo="Abrir Bd")
            .row.justify-content-center.align-items-center
              .col-lg-8
                p Para abrir la base se utiliza la función #[b #[em sqlite3_open (path_db, &db);]] la cual recibe el #[b #[em path]] de la base de datos y el contexto al #[b #[em struct]].              
          .tarjeta.tarjeta--gris.p-4(titulo="Implementar métodos")
            .row.justify-content-center.align-items-center
              .col-lg-8
                p Clase para implementar métodos: en esta clase #[b DB_Mananger] se implementarán métodos que interactúan con la base de datos como conexión a la base de datos, creación de la tablas, etc.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg-6.p-4
          .row
            .col-lg-2
              figure.mb-4
                img(src='@/assets/curso/temas/t10/t3-i5.svg', alt='') 
            .col-lg-10
              ul.lista-ul--color.sin-color.fa-ul.mb-0
                li  
                  i.fas.fa-check
                  span.mb-0 Puede informarse de los pasos sobre #[b SQLite], de forma detallada, visitando el enlace que encuentra a continuación:
              a.anexo.mb-4(href="https://adnan-tech.com/create-read-update-and-delete-from-sqlite-swift-swift-ui" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] #[em Swift UI SQLite – Create, Read, Update and Delete in Swift]
              ul.lista-ul--color.sin-color.fa-ul.mb-0
                li  
                  i.fas.fa-check
                  span.mb-0 Si desea observar un ejemplo completo sobre la #[b creación de bases de datos], se invita a consultar el siguiente enlace:
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=k4GK4MmE4Ag&t=27s" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] XCODE programación (PARTE 1) - Conexión a base de datos SQLITE


    Separador

    #t_10_1.titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 10.1 Core data

    .row.mb-5
      .col-lg-8(data-aos="fade-right")
        p.mb-4 Es un ORM (#[em object relational mapper]) que permite almacenar datos de forma persistente y después recuperarlos, la ventaja de usar Core data es que maneja objetos en lugar de datos sin procesar como filas en SQLite o datos para el caso de un archivo XML.
        .cajon.color-acento-botones.p-4
          p El uso de memoria de Core data, a diferencia de #[b SQLite,] es mayor, así como el espacio libre que tiene.
          p Core data realiza todos los procesos que se hacen manualmente en #[b SQLite] de forma automática, lo que permite agilidad en el código.
          p.mb-0 Una de sus principales características es que el #[b Xcode] tiene integrado el editor de modelos #[b Core data], el cual permite modelar el modelo de datos por medio de la interfaz gráfica.
      .col-lg-4(data-aos="fade-left")
        figure.mb-5
          img(src='@/assets/curso/temas/t10/t3-i6.svg', alt='') 
    
    //.row.mb-5.justify-content-center(data-aos="fade-down")
      .col-lg-7
        figure.mb-2
          img(src='@/assets/curso/temas/t10/t3-i7.png', alt='') 
        figcaption Nota. <a href='https://bit.ly/3swgGC6' target='_blank'>https://bit.ly/3swgGC6</a>

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg-6.p-4
          .row
            .col-lg-2
              figure.mb-4
                img(src='@/assets/curso/temas/t10/t3-i5.svg', alt='') 
            .col-lg-10
              ul.lista-ul--color.sin-color.fa-ul.mb-0
                li  
                  i.fas.fa-check
                  span.mb-0 En el siguiente enlace podrá observar un ejemplo de la utilización de #[b Core data] paso a paso:
              a.anexo.mb-4(href="https://mastermoviles.gitbook.io/persistencia-en-dispositivos-m-viles-ios/intro-2/3.2_stack" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] #[em El stack de Core Data]
              ul.lista-ul--color.sin-color.fa-ul.mb-0
                li  
                  i.fas.fa-check
                  span.mb-0 Igualmente se invita a consultar el siguiente video, en el que podrá profundizar respecto al tema #[b Core data: ]
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=2Za19Z60aRk" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] Programando Core Data en iOS



    Separador

    #t_10_2.titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2  10.2 Cloudkit

    .row.mb-5.justify-content-center
      .col-lg-4(data-aos="fade-right")
        p Es una plataforma que permite el almacenamiento de datos estructurados en todos los dispositos y en la web, una de sus principales novedades es la capacidad de flexiibilidad, potencia y administración.
      .col-lg-8(data-aos="fade-left")
        figure.mb-3
          img(src='@/assets/curso/temas/t10/t3-i9.png', alt='') 
        figcaption Nota. <a href='https://developer.apple.com/icloud/cloudkit/ ' target='_blank'>https://developer.apple.com/icloud/cloudkit/ </a>

    h3(data-aos="fade") Características de Cloudkit
    p.mb-4(data-aos="fade")  Entre sus características se encuentran:

    TabsA.color-primario.mb-5(data-aos="fade-down")
      .tarjeta.bg-1.p-4(titulo="Sincronización automática")
        .row.justify-content-center.align-items-center
          .col-lg-2
            figure.mb-5
              img.w-auto(src='@/assets/curso/temas/t10/t3-ic1.svg', alt='') 
          .col-lg-8
            h4 Sincronización automática
            p.mb-0 Permite la sincronización sin ningún inconveniente en la web y en #[b iOS, macOS, WatchOS, tvOs.]
      .tarjeta.bg-1.p-4(titulo="Datos encriptados")
        .row.justify-content-center.align-items-center
          .col-lg-2
            figure.mb-5
              img.w-auto(src='@/assets/curso/temas/t10/t3-ic2.svg', alt='') 
          .col-lg-8
            h4 Datos encriptados
            p.mb-0 Asegura el resguardo de los datos, permitiendo configurar como privados los datos en la base de datos que se requieren que se cifren, afianzando la protección de los datos en el almacenamiento y en el envío de su aplicación.
      .tarjeta.bg-1.p-4(titulo="Privacidad protegida")
        .row.justify-content-center.align-items-center
          .col-lg-2
            figure.mb-5
              img.w-auto(src='@/assets/curso/temas/t10/t3-ic3.svg', alt='') 
          .col-lg-8
            h4 Privacidad protegida
            p.mb-0 Permite un análisis y depuración de las aplicaciones sin exponer los datos personales del usuario.
      .tarjeta.bg-1.p-4(titulo="Automatización")
        .row.justify-content-center.align-items-center
          .col-lg-2
            figure.mb-5
              img.w-auto(src='@/assets/curso/temas/t10/t3-ic4.svg', alt='') 
          .col-lg-8
            h4 Automatización
            p.mb-0 Permite automatizar de una forma muy sencilla los procesos de desarrollo.

    p.mb-4(data-aos="fade") La consola de Cloudkit contiene un panel de control que permite:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down") 
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-4")
          .row(titulo="Bases de datos")
            .col-md-6.mb-4.mb-md-0 
              p Permite crear estructuras de bases de datos que se almacenan en la nube para ser accedidas por aplicaciones.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/t10/t3-i11.png', alt='')
          .row(titulo="Telemetría")
            .col-md-6.mb-4.mb-md-0 
              p Permite medir la confiabilidad de las aplicaciones.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/t10/t3-i12.png', alt='')
          .row(titulo="Registros del servidor")
            .col-md-6.mb-4.mb-md-0 
              p Analiza y evalúa el rendimiento de las aplicaciones.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/t10/t3-i13.png', alt='')
    
    .row.mb-5(data-aos="fade-down") 
      .col-lg-8
        .cajon.color-acento-botones.p-4
          p #[b Nota.] Para ingresar a la consola debe contar con un #[b ID de programador de Apple.]

    .row.mb-5.justify-content-center(data-aos="fade-down") 
      .tarjeta.bg-6.p-4
        .row
          .col-lg-2
            figure.mb-4
              img(src='@/assets/curso/temas/t10/t3-i5.svg', alt='') 
          .col-lg-10
            ul.lista-ul--color.sin-color.fa-ul.mb-0
              li  
                i.fas.fa-check
                span.mb-0 En el siguiente enlace encontrará información respecto a la configuración y habilitación de #[b  Cloudkit:]
            a.anexo.mb-4(href="https://developer.apple.com/documentation/cloudkit/enabling_cloudkit_in_your_app" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Enlace web.] #[em Enabling CloudKit in Your App]
            ul.lista-ul--color.sin-color.fa-ul.mb-0
              li  
                i.fas.fa-check
                span.mb-0 Para crear bases de datos en #[b  Cloudkit:] puede consultar el siguiente enlace, en el que  encontrará información detallada al respecto: 
            a.anexo.mb-4(href="https://developer.apple.com/documentation/cloudkit/designing_and_creating_a_cloudkit_database" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Enlace web.] #[em Designing and Creating a CloudKit Database]
            ul.lista-ul--color.sin-color.fa-ul.mb-0
              li  
                i.fas.fa-check
                span.mb-0 Finalmente, podrá consultar el material de estudio dispuesto, que sirve para el estudio de las unidades vistas en el módulo, a través de los siguientes enlaces:
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=MyzZnIR5gC4" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Enlace web.] XCODE: COMO Crear una APP (para Principiantes)



</template>

<script>
export default {
  name: 'Tema10',
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
