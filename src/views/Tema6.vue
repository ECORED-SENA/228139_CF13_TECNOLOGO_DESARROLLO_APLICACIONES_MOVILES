<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Persistencia de datos

    p(data-aos="fade") En el desarrollo móvil siempre es indispensable que las aplicaciones puedan guardar datos ya sea para no perder la información en una nueva ejecución o para manejo de información en bases de datos. La persistencia de datos es una habilidad esencial para que un desarrollador cree aplicaciones de alta calidad. Uno de los métodos más comunes de almacenamiento en Android es el de las Bases de Datos en SQLite.

    
    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_6_1 6.1 Bases de datos local SQLite

    p(data-aos="fade") SQLite es un motor de bases de datos relacional de código abierto y actualmente muy popular ya que ofrece particularidades muy útiles como su pequeño tamaño y su ligereza, no necesita servidor, requiere poca configuración y guarda toda la base de datos en un solo fichero. Su uso es muy habitual en aplicaciones de tamaño pequeño. 
    p.mb-4 #[strong Android incluye soporte a SQLite y utiliza el paquete Android. database.sqlite para utilizar las bases de datos.]

    .p-4.p-lg-5.bg-4.sombra-1.mb-5
      p El proceso de las bases de datos inicia con la creación de la base de datos, y las tablas, se trabajan con la clase SQliteOpenHelper.
      p Para crear un esquema de base de datos o actualizar el mismo se debe crear una clase que herede de SQLiteOpenHelper, donde se implementa el constructor y dos métodos abstractos (obligatorio implementarlos) onCreate () y onUpgrade () respectivamente.
      p Por medio de los métodos getReadableDatabase y getWritableDatabase se abre y se consigue una instancia de la base de datos de sólo lectura o de lectura y escritura respectivamente. 
      p Para la creación de las tablas se ejecutan las sentencias SQL dentro del método onCreate utilizando el método db. execute.
      p Para la administración de una base de datos SQLitese utiliza la Clase SQLiteDatabase.
      p.mb-0 SQLiteDatabase: tiene métodos para crear, eliminar, ejecutar comandos SQL y realizar otras tareas comunes de administración de bases de datos.

    h5.mb-4 Los métodos más utilizados son:

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade") 
      p.mb-0 #[strong Tabla 7.] Métodos de administración de bases de datos de la clase SQLiteDatabase

    .table-a.col-md-10.mb-5(data-aos="fade-down") 
      table(width="100%")
        tbody
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 Acción
            td(style="width:70%") 
              h5.mb-0 Método
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 Insertar Datos
            td(style="width:70%") db.insert
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 Consultar Datos
            td(style="width:70%") db.rawQuery() y db.query()
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 Eliminar Datos
            td(style="width:70%") db.delete
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 Actualizar Datos
            td(style="width:70%") db.update
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 Ejecutar sentencia SQL
            td(style="width:70%") db.execute

    p.mb-4 Para reflejar la utilidad de las bases de datos SQLite se realizará un ejemplo de una base de datos para registro de usuarios y de entidades, donde se tendrá una actividad de solicitud de datos para creación actualización y borrado en el BD de información almacenada de forma persistente.

    .tarjeta.p-3.col-lg-10.m-auto.bg-gradiente(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.px-lg-4(src="@/assets/curso/temas/t1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3 Base de datos Sqlite en Android
              p.mb-0 Para consultar el ejemplo de bases de datos Sqlite, lo invitamos a ver el siguiente PDF.
            .col-sm-auto
              a.boton.boton--b.color-acento-contenido(:href="obtenerLink('downloads/Ejemplo_Bases_DatosSqlite.pdf')" target="_blank")
                span Descargar
                i.fas.fa-download


    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2#t_6_2 6.2 Bases de datos en tiempo real

    p(data-aos="fade") Una base de datos en tiempo real se refiere a un sistema de base de datos que se basa en el procesamiento en tiempo real que toma los datos entrantes a medida que fluyen del servidor.
    p.mb-4(data-aos="fade") La base de datos en tiempo real de Firebase (Firebase #[em Realtime Database]) es sin duda uno de los servicios más populares de la plataforma.

    .row-align-items-center.mb-4
      .col-md-3.mb-3(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/t6/1.svg" data-aos="fade-left")
      .col-md-9(data-aos="fade-left")
        p Firebase es una plataforma para el desarrollo de aplicaciones web y aplicaciones móviles creada por James Tamplin y Andrew Lee en 2011, y adquirida por Google en 2014. Provee servicios muy útiles que podemos incorporar en nuestras aplicaciones Android (además de otros sistemas operativos) tales como:

    .row.mb-3(data-aos="fade-down")
      .col-md-4.mb-3
        figure.text-center
          img.sombra-1(src="@/assets/curso/temas/t6/2.svg" style="display:inline;max-width:150px;")
      .col-md-8
        .p-4.p-lg-5.bg-2.caja__1.position-relative
          p.mb-0 #[strong #[em Analytics:]] #[em firebase analytics] proporciona una visión profunda sobre el uso de la aplicación por parte de los usuarios, con datos que nos sirven para analizar el comportamiento de los usuarios con la aplicación.
    .row.mb-3(data-aos="fade-down")
      .col-md-4.mb-3
        figure.text-center
          img.sombra-1(src="@/assets/curso/temas/t6/3.svg" style="display:inline;max-width:150px;")
      .col-md-8
        .p-4.p-lg-5.bg-8.caja__2.position-relative
          p.mb-0 #[strong #[em Auth:]] servicio que puede autenticar los usuarios utilizando únicamente código del lado del cliente. Incluye la autenticación mediante Facebook, GitHub, Twitter y Google. Además, incluye un sistema de administración del usuario por el cual los desarrolladores pueden habilitar la autenticación de usuarios con email y contraseña.
    .row.mb-3(data-aos="fade-down")
      .col-md-4.mb-3
        figure.text-center
          img.sombra-1(src="@/assets/curso/temas/t6/4.svg" style="display:inline;max-width:150px;")
      .col-md-8
        .p-4.p-lg-5.bg-2.caja__1.position-relative
          p.mb-0 #[strong #[em Database]:] proporciona un base de datos en tiempo real y #[em back-end]. El servicio proporciona a los desarrolladores de aplicaciones una API que permite que la información de las aplicaciones sea sincronizada y almacenada en la nube de Firebase.
    .row.mb-3(data-aos="fade-down")
      .col-md-4.mb-3
        figure.text-center
          img.sombra-1(src="@/assets/curso/temas/t6/5.svg" style="display:inline;max-width:150px;")
      .col-md-8
        .p-4.p-lg-5.bg-8.caja__2.position-relative
          p.mb-0 #[strong #[em Storage:]] proporciona cargas y descargas seguras de archivos para aplicaciones Firebase, sin importar la calidad de la red. El desarrollador lo puede utilizar para almacenar imágenes, audio, vídeo, u cualquier otro contenido generado por el usuario.
    .row.mb-5(data-aos="fade-down")
      .col-md-4.mb-3
        figure.text-center
          img.sombra-1(src="@/assets/curso/temas/t6/6.svg" style="display:inline;max-width:150px;")
      .col-md-8
        .p-4.p-lg-5.bg-2.caja__1.position-relative
          p.mb-0 #[strong #[em Notifications]:] con Firebase se puede usar el API FirebaseMessaging que permite el envío de mensajes desde Firebase hacia un dispositivo concreto o múltiples dispositivos, pudiendo gestionar las notificaciones desde la consola de Firebase.

    
    .mb-5.p-5.bg-8.sombra-1(data-aos="fade-down")
      h5 #[strong Sus principales características son:]
      ul.lista-ul--color.fa-ul.mb-0
        li 
          i.fas.fa-check
          span.mb-0 No requiere la instalación de un servidor ni requiere instalación de #[em software] ya que la base de datos está alojada en la nube.
        li 
          i.fas.fa-check
          span.mb-0 El formato de almacenamiento de los datos es en formato JSON, con base de datos no relacional.
        li 
          i.fas.fa-check
          span.mb-0 La actualización de los datos se hace en milisegundos debido a que la sincronización es en tiempo real. 
        li 
          i.fas.fa-check
          span.mb-0 Permite apps multiplataforma iOS, Android y Web (JavaScript). 
        li 
          i.fas.fa-check
          span.mb-0 Aun cuando el dispositivo se encuentre sin Internet la aplicación sigue funcionando gracias a la caché.


    h4.mb-4(data-aos="fade") Para crear un proyecto con Firebase se deberá tener lo siguiente:

    .mb-5.p-5.bg-8.sombra-1(data-aos="fade-down")
      ul.lista-ul--color.fa-ul.mb-0
        li 
          i.fas.fa-check
          span.mb-0 Una cuenta de Gmail para acceder a la consola de Firebase https://console.firebase.google.com
        li 
          i.fas.fa-check
          span.mb-0 Un proyecto de Android Studio para poder hacer la conexión con la base de datos de  Firebase.

    h5.mb-4(data-aos="fade") Para la configuración de Firebase en el proyecto de Android Studio se enumeran los pasos siguientes:

    TabsA.color-primario.mb-5(data-aos="fade-down")
      .tarjeta.bg-1.p-4(titulo="1. Crear un Proyecto en la consola de Firebase.")
        h5 1. Crear un Proyecto en la consola de Firebase."
        figure.justify-content-center.d-flex
          img(src="@/assets/curso/temas/t6/p1.png")
      .tarjeta.bg-1.p-4(titulo="2. Agregar el proyecto.")
        h5 2. Agregar el proyecto.
        figure.justify-content-center.d-flex
          img(src="@/assets/curso/temas/t6/p2.png" style="max-width:400px;")    
      .tarjeta.bg-1.p-4(titulo="3. Seleccionar la plataforma para agregar a la APP. ")
        h5 3. Seleccionar la plataforma para agregar a la APP. 
        figure.justify-content-center.d-flex
          img(src="@/assets/curso/temas/t6/p3.png" style="max-width:400px;")
      .tarjeta.bg-1.p-4(titulo="4. Ingresar el nombre del paquete de la APP en  el campo Nombre del paquete")
        h5 4. Ingresar el nombre del paquete de la APP en  el campo Nombre del paquete
        figure.mb-3.justify-content-center.d-flex
          img(src="@/assets/curso/temas/t6/p4.png" style="max-width:400px;")
        p Lo más importante es copiar el paquete de tu proyecto de Android Studio que se encuentra en el manifest com.dominio.proyecto
      .tarjeta.bg-1.p-4(titulo="5. Descargar archivo Json google-services.json y copiarlo en la raíz del proyecto de Android Studio.")
        h5 5. Descargar archivo Json google-services.json y copiarlo en la raíz del proyecto de Android Studio.
        figure.justify-content-center.d-flex
          img(src="@/assets/curso/temas/t6/p5.png")
      .tarjeta.bg-1.p-4(titulo="6. Agregar SDK de Firebase.")
        h5 6. Agregar SDK de Firebase.
        figure.mb-3.justify-content-center.d-flex
          img(src="@/assets/curso/temas/t6/p6.png")
        p Copiar las librerías al gradle del proyecto en Android Studio y ya que esté lista la configuración de Android Studio con Firebase.
        p.mb-4 Esta misma configuración también se puede hacer automáticamente desde el entorno de Android Studio en la opción Tools-Firebase, pero necesita una buena velocidad de internet.
        figure.justify-content-center.d-flex
          img(src="@/assets/curso/temas/t6/13.svg" style="max-width:400px;")
              
    
    .tarjeta.p-3.col-lg-10.m-auto.bg-gradiente(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.px-lg-4(src="@/assets/curso/temas/t1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3 Amplíe sus conocimientos
              p.mb-0 Lo invitamos a consultar un ejemplo competo sobre el uso de base de datos de Firebase en Android Studio en el siguiente PDF.
            .col-sm-auto
              a.boton.boton--b.color-acento-contenido(:href="obtenerLink('downloads/Ejemplo_Firebase.pdf')" target="_blank")
                span Descargar
                i.fas.fa-download




</template>

<script>
export default {
  name: 'Tema6',
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
