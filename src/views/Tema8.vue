<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Lenguaje Swift 

    .row.justify-content-center
      .col-lg-10    
        .bloque-texto-a.color-primario.p-4.mb-5(data-aos="fade-down")
          .row.align-items-center.justify-content-around
            .col-lg-3.mb-4.mb-lg-0
              figure
                img.py-lg-4.px-lg-5(src='@/assets/curso/temas/t8/t1-i1.svg', alt='') 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-3 #[b El lenguaje de programación Swift fue creado por Apple] para el desarrollo de aplicaciones exclusivamente para iOS, Mac, Apple TV y Apple Watch.
                p.mb-0  #[b Swift es un sucesor de los lenguajes C y Objective-C,] incluye primitivas de bajo nivel como tipos, control de flujo y operadores. También proporciona funciones orientadas a objetos como clases, protocolos y genéricos, lo que les da a los desarrolladores de Cocoa y Cocoa Touch el rendimiento y la potencia que exigen.
        
        .cajon.color-acento-botones.p-4(data-aos="fade") 
          p.mb-0 Aunque su creación fue en el año 2010 fue presentado en el 2014 en la WWDC, inicialmente el lenguaje usado para desarrollar aplicaciones era Objective-C, pero en el año 2014 Swift se convirtió en el nuevo lenguaje de código abierto, siendo este un lenguaje fácil de escribir, rápido, eficiente y seguro. 
    

    Separador 

    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 8.1  Características

    p.mb-4(data-aos="fade") Las modernas características que incluye Swift deslumbran a los desarrolladores, principalmente por el fácil manejo que tiene en su funcionamiento. A continuación, se presentan algunas de ellas.

    TabsB.color-acento-botones(data-aos="fade-down") 
      .py-4.py-md-5(titulo="Código abierto" :icono="require('@/assets/curso/temas/t8/t1-ic1.svg')")
        .row.justify-content-center
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t8/t1-i0.jpg', alt='')        
          .col-md-6.mb-4.mb-md-0
            h4 Código abierto
            p Swift proporciona una gran comunidad de apoyo y una variedad de herramientas de terceros.       
      .py-4.py-md-5(titulo="Sintaxis concisa pero expresiva" :icono="require('@/assets/curso/temas/t8/t1-ic2.svg')")
        .row.justify-content-center
          .col-md-4
            figure
              img.shadow-box(src='@/assets/curso/temas/t8/t1-i1-1.jpg', alt='')        
          .col-md-6.mb-4.mb-md-0
            h4 Sintaxis concisa pero expresiva
            p Al ser #[b Swift] un lenguaje muy conciso requiere menos código para realizar una misma tarea.
      .py-4.py-md-5(titulo="Código seguro por su diseño" :icono="require('@/assets/curso/temas/t8/t1-ic3.svg')")
        .row.justify-content-center
          .col-md-4
            figure
              img.shadow-box(src='@/assets/curso/temas/t8/t1-i2.jpg', alt='')        
          .col-md-6.mb-4.mb-md-0
            h4 Código seguro por su diseño
            p #[b Swift] proporciona medidas de seguridad para evitar errores y mejorar la legibilidad.
      .py-4.py-md-5(titulo="Ejecución de código a gran velocidad" :icono="require('@/assets/curso/temas/t8/t1-ic4.svg')")
        .row.justify-content-center
          .col-md-4
            figure
              img.shadow-box(src='@/assets/curso/temas/t8/t1-i3.jpg', alt='')        
          .col-md-6.mb-4.mb-md-0
            h4 Ejecución de código a gran velocidad
            p La sintaxis y gramática simplificada de Swift permite un proceso de desarrollo rápido, haciéndolo un lenguaje limpio y más fácil de leer y escribir. 
      .py-4.py-md-5(titulo="Fácil de escalar" :icono="require('@/assets/curso/temas/t8/t1-ic5.svg')")
        .row.justify-content-center
          .col-md-4
            figure
              img.shadow-box(src='@/assets/curso/temas/t8/t1-i4.jpg', alt='')        
          .col-md-6.mb-4.mb-md-0
            h4 Fácil de escalar
            p Permite el aumento de nuevas características según las necesidades, haciéndolo mucho más fácil de escalar.


    Separador

    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 8.2  Tipos de datos

    .row
      .col-lg-2.mb-3(data-aos="fade-right") 
        figure
          img(src='@/assets/curso/temas/t8/t1-ic6.svg', alt='')    
      .col-lg-10.mb-3(data-aos="fade-left") 
        p Son aquellos en donde se almacena la información por medio de variables y constantes, por ejemplo, si queremos almacenar un texto se necesita un tipo de dato <i>String</i>, y si se quiere almacenar un valor numérico se necesita un tipo de dato <i>Int</i>.
        p En #[b el lenguaje de programación Swift] se encuentran los tipos de datos básicos que se enuncian en la siguiente tabla:
    
    .titulo-sexto.color-acento-contenido(data-aos="fade") 
      p.mb-0 #[b Tabla 8.] Tipos de datos básicos en Swift
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-down")
      table
        thead
          tr.bg-6
            th Tipo de dato
            th Descripción
        tbody
          tr
            th Int
            td Número entero de 32 #[em bits] con un rango de entre -2.147.483.648 y 2,147,483,647.
          tr
            th Double
            td Número flotante de 64 #[em bits] con hasta 15 decimales de precisión.
          tr
            th Float
            td Número flotante de 32 #[em bits] con hasta 6 decimales de precisión.
          tr
            th Bool
            td Número booleano que puede ser 0 #[em (false)] o 1 #[em (true)].
          tr
            th String
            td Cadena de caracteres, tratada internamente con una matriz (#[em array]) de ellos.

    p(data-aos="fade") Las constantes y variables presentes en los tipos de datos relacionan valores, recordando que una constante es un elemento de datos con nombre  y con un valor predefinido, mientras que una variable es un elemento de datos con nombre cuyo valor puede cambiar durante el curso de la ejecución de un programa. 
    p(data-aos="fade") #[b Constantes y variables] son segmentos de memoria que asocian un nombre con un valor de un tipo en particular, cuando se establece un valor en una constante este no se puede cambiar, mientras que una variable permite cambiar su valor en tiempo de ejecución.
    p.mb-4(data-aos="fade")  Encontrando elementos particulares en cada una de estas, tal como puede verse a continuación:

    TabsC.color-acento-contenido.mb-5(data-aos="fade-down")
      .py-3.py-md-4(titulo="Declaración de constantes y variables")
        .row.mb-5
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Declaración de constantes y variables
            p En el lenguaje Swift las constantes y variables se deben declarar antes de ser usadas, para declarar una constante se usa la palabra reservada #[em let] y para declarar una variable se utiliza la palabra reservada var.
          .col-md-6
            .titulo-sexto.color-acento-contenido(data-aos="fade") 
                p.mb-0 #[b Ejemplo.] Declaración de constante
            .tarjeta.tarjeta--gris.p-4
              figure.mb-2
                img(src='@/assets/curso/temas/t8/t1-c1.svg', alt='Ejemplo de codigo')
        .row.mb-5.justify-content-center
          .col-lg-10
            .cajon.color-acento-contenido.p-4
              p.mb-0  Las constantes no pueden cambiar su valor inicial, si se le asigna otro valor a edad o nombre genera un error.       
      .py-3.py-md-4(titulo="Declaración de variable")
        .row.mb-5
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Declaración de variable
            p Las variables sí pueden cambiar su valor, en el ejemplo se ve en que el valor inicial de la variable es Nirvana y después se le cambia el valor por Romeo.
          .col-md-6
            .titulo-sexto.color-acento-contenido 
              p.mb-0 #[b Ejemplo.] Declaración de variable
            .tarjeta.tarjeta--gris.p-4
              figure
                img(src='@/assets/curso/temas/t8/t1-c2.svg', alt='Ejmplo de codigo')      
      .py-3.py-md-4(titulo="Nomenclatura de variables y constantes")
        .row.mb-5
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Nomenclatura de variables y constantes
            p.mb-3 En Swift se deben cumplir las siguientes reglas para el nombramiento de constantes y variables:
            ul.lista-ul--color.fa-ul.mb-0
              li
                i.fas.fa-check
                | Los nombres de las constantes o variables no pueden contener caracteres de espacio en blanco, símbolos matemáticos, flechas o caracteres especiales.
              li
                i.fas.fa-check
                | No pueden comenzar con un número, aunque los números pueden incluirse en otros lugares dentro del nombre, en el medio o al final.
              li
                i.fas.fa-check
                | No se puede declarar una constante o variable de un cierto tipo, dos veces con el mismo nombre o cambiar el tipo de dato para almacenar valores de un tipo diferente.
          .col-md-6
            .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Ejemplo.]
            .tarjeta.tarjeta--gris.p-4
              figure
                img(src='@/assets/curso/temas/t8/t1-c3.svg', alt='Ejmplo de codigo')
      .py-3.py-md-4(titulo="Nomenclatura de variables y constantes")
        .row.mb-5
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Función print
            p.mb-3 Es una función global que permite imprimir uno o varios valores que contienen las constantes o las variables.
            ul.lista-ul--color.fa-ul.mb-0
              li
                i.fas.fa-check
                | Los nombres de las constantes o variables no pueden contener caracteres de espacio en blanco, símbolos matemáticos, flechas o caracteres especiales.
              li
                i.fas.fa-check
                | No pueden comenzar con un número, aunque los números pueden incluirse en otros lugares dentro del nombre, en el medio o al final.
              li
                i.fas.fa-check
                | No se puede declarar una constante o variable de un cierto tipo, dos veces con el mismo nombre o cambiar el tipo de dato para almacenar valores de un tipo diferente.
          .col-md-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Ejemplo.] 
            .tarjeta.tarjeta--gris.p-4
              figure
                img(src='@/assets/curso/temas/t8/t1-c4.svg', alt='Ejmplo de codigo')
    
    .row.justify-content-center(data-aos="fade")
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p.mb-0 #[b Nota.] Swift no requiere que escriba un punto y coma (;) después de cada declaración en su código, a diferencia de muchos otros lenguajes.


    Separador

    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2  8.3  Operadores básicos

    .bloque-texto-a.color-primario.p-4.mb-5(data-aos="fade-down")
      .row.align-items-center.justify-content-around
        .col-lg-3.mb-4.mb-lg-0
          figure
            img.py-lg-4.px-lg-5(src='@/assets/curso/temas/t8/t1-ic7.svg', alt='') 
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Los operadores son los símbolos que se utilizan para #[b asignar, comparar o combinar valores,] a continuación, podrá observar los tipos de operadores básicos:
    
    TabsA.color-primario(data-aos="fade-down")
      .tarjeta.bg-1.p-4(titulo="Operadores de asignación")
        .row
          .col-lg-2.col-4
            figure
              img(src='@/assets/curso/temas/t8/t1-ic8.svg', alt='')
          .col-lg-10
            h4 Operadores de asignación
            p (=) se encarga de inicializar o de actualizar un valor.
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Ejemplo.]
            .tarjeta.tarjeta--gris.p-4
              figure
                img.w-auto(src='@/assets/curso/temas/t8/c1.png', alt='Ejemplo de codigo')
      .tarjeta.bg-1.p-4(titulo="Operadores aritméticos")
        .row
          .col-lg-2.col-4
            figure
              img(src='@/assets/curso/temas/t8/t1-ic9.svg', alt='')
          .col-lg-10
            h4 Operadores aritméticos: los 5 operadores básicos que admite Swift son:
            .row
              .col-lg-4
                ul.lista-ul--color.fa-ul.mb-0
                  li
                    i.fas.fa-check
                    | Suma (+)
                  li
                    i.fas.fa-check
                    | Resta (-)
                  li
                    i.fas.fa-check
                    | Multiplicación (*)
              .col-lg-4
                ul.lista-ul
                  li
                    i.fas.fa-check
                    | División (/)
                  li
                    i.fas.fa-check
                    | Módulo (%)
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Ejemplo.]
            .tarjeta.tarjeta--gris.p-4
              figure
                img.w-auto(src='@/assets/curso/temas/t8/c2.png', alt='Ejemplo de codigo')
      .tarjeta.bg-1.p-4(titulo="Operadores de comparación")
        .row
          .col-lg-2.col-4
            figure
              img(src='@/assets/curso/temas/t8/t1-ic10.svg', alt='')
          .col-lg-10
            h4 Operadores de comparación: los operadores del lenguaje Swift son:
            .row
              .col-lg-4
                ul.lista-ul--color.fa-ul.mb-0
                  li
                    i.fas.fa-check
                    | Igual a ( )a == b
                  li
                    i.fas.fa-check
                    | No es igual a ( )a !=
                  li
                    i.fas.fa-check
                    | Mayor que ( )a > b
              .col-lg-6
                ul.lista-ul--color.fa-ul.mb-0
                  li
                    i.fas.fa-check
                    | Menor que ( )a < b
                  li
                    i.fas.fa-check
                    | Mayor o igual a ( )a >= b
                  li
                    i.fas.fa-check
                    | Menor o igual a ( )a <= b  
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Ejemplo.]
            .tarjeta.tarjeta--gris.p-4
              figure
                img(src='@/assets/curso/temas/t8/c3.png', alt='Ejemplo de codigo')



    Separador

    #t_8_4.titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2  8.4 Condicionales

    .row.mb-5
      .col-lg-2(data-aos="fade-right") 
         figure
          img(src='@/assets/curso/temas/t8/t1-ic11.svg', alt='')
      .col-lg-10(data-aos="fade-left") 
        p.mb-3  #[b Swift] proporciona dos formas determinadas para trabajar con condicionales en su código, la declaración #[b if] y la declaración #[b switch].
        p.mb-3  La declaración #[b if] usualmente se trabaja cuando se necesita evaluar condiciones simples, mientras que #[b switch]  se adapta mejor a condiciones con múltiples respuestas.
    
    h3.titulo-tercero(data-aos="fade") Estructura condicional if simple

    .row.mb-5.justify-content-center(data-aos="fade-down") 
      .col-lg-8
        .tarjeta.tarjeta--gris.p-4.mb-5  
          figure
            img.w-auto(src='@/assets/curso/temas/t8/p1.png', alt='Ejemplo de codigo')

        .titulo-sexto.color-acento-contenido(data-aos="fade") 
          p.mb-0 #[b Ejemplo.]
        .tarjeta.tarjeta--gris.p-4
          figure
            img.w-auto(src='@/assets/curso/temas/t8/p2.png', alt='Ejemplo de codigo')

    .row.mb-5.justify-content-center(data-aos="fade-down") 
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-5
          p.mb-0 El ejemplo anterior verifica si la edad es mayor o igual a 18, si se cumple imprime un mensaje informando que es mayor de edad, en caso contrario no se imprime ningún mensaje.

    p.mb-4(data-aos="fade") El condicional if contiene declaraciones alternativas como la cláusula else que se utiliza cuando la condición es falsa, para el ejemplo anterior no se ejecutaba ninguna acción si la condición era falsa, con la cláusula else se puede realizar esta verificación así:
    
    .titulo-sexto.color-acento-contenido(data-aos="fade") 
      p.mb-0 #[b Ejemplo.] cláusula else
    .row.mb-5.justify-content-center(data-aos="fade-down")
      .col-lg-8
        .tarjeta.tarjeta--gris.p-4
          figure
            img.w-auto(src='@/assets/curso/temas/t8/p3.png', alt='Ejemplo de codigo')

    .row.mb-5(data-aos="fade-down")
      .col-lg-6
        .cajon.color-acento-contenido.p-4
          p.mb-0 Para este ejemplo se ejecuta una de las dos instrucciones.

    h3(data-aos="fade") Switch
    p.mb-4(data-aos="fade") Una declaración switch considera un valor y lo compara con varios de los valores de coincidencia posibles, ejecutando un bloque de código en el cual encuentra la coincidencia, esto quiere decir que compara un valor con uno o más valores del mismo tipo.
    
    .titulo-sexto.color-acento-contenido(data-aos="fade") 
      p.mb-0 #[b Sintaxis]
    .row.mb-5.justify-content-center(data-aos="fade-down")
      .col-lg-8
        .tarjeta.tarjeta--gris.p-4
          figure
            img.w-auto(src='@/assets/curso/temas/t8/p4.png', alt='Ejemplo de codigo')

    .titulo-sexto.color-acento-contenido(data-aos="fade") 
      p.mb-0 #[b Ejemplo.]
    .row.mb-5.justify-content-center(data-aos="fade-down")
      .col-lg-8
        .tarjeta.tarjeta--gris.p-4
          figure
            img.w-auto(src='@/assets/curso/temas/t8/p5.png', alt='Ejemplo de codigo')

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p.mb-0 El ejemplo anterior compara los días de la semana, el resultado que imprime es Tercer día de la semana porque la variable día coincide con el valor que tiene este mensaje.


    Separador

    #t_8_5.titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2  8.5 Ciclos

    .row.mb-5
      .col-lg-2(data-aos="fade-right") 
        figure
          img(src='@/assets/curso/temas/t8/t1-ic-12.svg', alt='')
      .col-lg-10(data-aos="fade-") 
        p.mb-3 Los ciclos o bucles iteran elementos de rangos de números, matrices o caracteres de una cadena sobre una secuencia. Entre los bucles más utilizados se encuentra el ciclo #[b for] y el ciclo #[b while].
    
    h3(data-aos="fade") Estructura ciclo for

    .row.mb-5.justify-content-center
      .col-lg-8
        .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-down")   
          figure
            img.w-auto(src='@/assets/curso/temas/t8/p6.png', alt='Ejemplo de codigo')

        .titulo-sexto.color-acento-contenido(data-aos="fade") 
          p.mb-0 #[b Ejemplo.]
        .tarjeta.tarjeta--gris.p-4.mb-4(data-aos="fade-down") 
          figure
            img.w-auto(src='@/assets/curso/temas/t8/p7.png', alt='Ejemplo de codigo')

        .cajon.color-acento-botones.p-4.mb-4(data-aos="fade-down") 
          p.mb-0 El ejemplo muestra una iteración de los números del 0 al 5, imprimiendo cada valor, a diferencia de otros lenguajes y, cómo la condicional if en Swift no requiere de paréntesis. 
        
        .row.justify-content-center.mb-5(data-aos="fade-down") 
          .col-lg-8
            .tarjeta.tarjeta--gris.p-4
              figure
                img.w-auto(src='@/assets/curso/temas/t8/p8.png', alt='Ejemplo de codigo')
    
    h3.titulo-tercero(data-aos="fade") Estructura ciclo while
    ul.lista-ul--color.fa-ul.mb-0(data-aos="fade")
      li
        i.fas.fa-check
        span.mb-0 Una declaración #[b while] hace un proceso de iteración hasta que la condición sea falsa.
      li
        i.fas.fa-check
        span El uso de este tipo de bucles se hace normalmente cuando no se conoce el número de iteraciones.
    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-lg-8
        .tarjeta.tarjeta--gris.p-4
          figure
            img.w-auto(src='@/assets/curso/temas/t8/p9.png', alt='Ejemplo de codigo')

    .titulo-sexto.color-acento-contenido(data-aos="fade")
      p.mb-0 #[b Ejemplo.]
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-down")
        .tarjeta.tarjeta--gris.p-4.mb-4(data-aos-delay='0')
          figure
            img.w-auto(src='@/assets/curso/temas/t8/p10.png', alt='Ejemplo de codigo')
        .tarjeta.tarjeta--gris.p-4(data-aos-delay='0')
          figure
            img.w-auto(src='@/assets/curso/temas/t8/p11.png', alt='Ejemplo de codigo')
    
    .row.mb-5.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg-6.p-4
          .row
            .col-lg-2
              figure.mb-4.mb-lg-0
                img(src='@/assets/curso/temas/t8/t3-i5.svg', alt='') 
            .col-lg-10
              ul.lista-ul--color.fa-ul.mb-0
                li  
                  i.fas.fa-check
                  span.mb-0 A continuación, puede profundizar sobre el lenguaje de programación Swift de forma más detallada, para esto se invita a que visite la página: 
              a.anexo.mb-4.mb-lg-0(href="https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html " target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] Enlace web. https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html 





</template>

<script>
export default {
  name: 'Tema8',
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
