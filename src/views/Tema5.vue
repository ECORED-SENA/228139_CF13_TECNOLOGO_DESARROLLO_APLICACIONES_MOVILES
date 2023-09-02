<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Tareas asíncronas

    .bloque-texto-a.color-primario.p-4.mb-5(data-aos="fade-down")
      .row.align-items-center.justify-content-around
        .col-lg-3.mb-4.mb-lg-0
          figure.m-auto
            img(src="@/assets/curso/temas/t5/1.svg" style="margin: 0 auto; max-width:120px;")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Todos los componentes de una aplicación Android, tanto las actividades, los servicios, o los #[em broadcasts receivers] se ejecutan en el mismo hilo de ejecución, el llamado hilo principal, #[em main thread] o #[em GUI thread], que como éste último nombre indica también es el hilo donde se ejecutan todas las operaciones que gestionan la interfaz de usuario de la aplicación. Es por ello, que cualquier operación larga o costosa que se realice en este hilo va a bloquear la ejecución del resto de componentes de la aplicación y por supuesto también la interfaz, produciendo al usuario un efecto evidente de lentitud, bloqueo, o mal funcionamiento en general.

    h5(data-aos="fade") Android utiliza la clase AsyncTack para ejecutar tareas de segundo plano.
    p.mb-4(data-aos="fade") La forma básica de utilizar la clase AsyncTask consiste en crear una nueva clase que extienda de ella y sobrescribir varios de sus métodos entre los que repartiremos la funcionalidad de nuestra tarea. Estos métodos son los siguientes:

    .row.mb-3(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-4
        .p-5.bg-5.h-100.sombra-1
          h4 onPreExecute ().
          p Se ejecutará antes del código principal de nuestra tarea. Se suele utilizar para preparar la ejecución de la tarea, inicializar la interfaz, etc.

      .col-lg-4.col-md-6.mb-4
        .p-5.bg-6.h-100.sombra-1
          h4 doInBackground ().
          p Contendrá el código principal de nuestra tarea.

      .col-lg-4.col-md-6.mb-4
        .p-5.bg-5.h-100.sombra-1
          h4 onProgressUpdate ().
          p Se ejecutará cada vez que llamemos al método publishProgress () desde el método doInBackground ()

      .col-lg-4.col-md-6.mb-4
        .p-5.bg-6.h-100.sombra-1
          h4 onPostExecute (). 
          p Se ejecutará cuando finalice nuestra tarea, o, dicho de otra forma, tras la finalización del método doInBackground ()

      .col-lg-4.col-md-6.mb-4
        .p-5.bg-5.h-100.sombra-1
          h4 onCancelled ().
          p Se ejecutará cuando se cancele la ejecución de la tarea antes de su finalización normal.


    p.mb-4(data-aos="fade") Estos métodos tienen una particularidad esencial para nuestros intereses. El método doInBackground () se ejecuta en un hilo secundario (por tanto, no se puede interactuar con la interfaz), pero sin embargo todos los demás se ejecutan en el hilo principal, lo que quiere decir que dentro de ellos se pueden hacer referencia directa a los controles de usuario para actualizar la interfaz.

    .tarjeta.p-3.col-lg-10.m-auto.bg-gradiente(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.px-lg-4(src="@/assets/curso/temas/t1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0 
              h3 Tareas asincronas
              p.mb-0 Para conocer ejemplos de tareas asíncronas, lo invitamos a ver el siguiente PDF.
            .col-sm-auto
              a.boton.boton--b.color-acento-contenido(:href="obtenerLink('downloads/Ejemplo_Tareas_Asincronas.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download





</template>

<script>
export default {
  name: 'Tema5',
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
