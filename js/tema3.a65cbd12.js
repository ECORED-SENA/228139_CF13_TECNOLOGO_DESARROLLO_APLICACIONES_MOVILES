(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema3"],{"17b7":function(e,t,a){e.exports=a.p+"img/5.a7930898.png"},"6b00":function(e,t,a){e.exports=a.p+"img/6.90c2e8fc.png"},"93ea":function(e,t,a){e.exports=a.p+"img/7.10288d17.png"},"96d6":function(e,t,a){e.exports=a.p+"img/3.2de9182b.svg"},a5e4:function(e,t,a){e.exports=a.p+"img/1.1c53489c.svg"},eb46:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"curso-main-container pb-3"},[s("BannerInterno"),s("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[e._m(0),e._m(1),e._m(2),s("p",{staticClass:"mb-0",attrs:{"data-aos":"fade"}},[e._v("La ejecución de los eventos se realiza en el código Java ubicado en la carpeta /java")]),e._m(3),e._m(4),s("AcordionA",{staticClass:"mb-5",attrs:{tipo:"a","clase-tarjeta":"tarjeta bg-4","data-aos":"fade-down"}},[s("div",{staticClass:"row justify-content-center",attrs:{titulo:"1. Crear el <em>Button</em> en el <em>Layout</em> con su propiedad ID ya que es la que nos va a permitir referenciarlos desde el código Java."}},[s("div",{staticClass:"col-lg-10 mb-3"},[s("figure",[s("img",{attrs:{src:a("17b7")}})])]),s("div",{staticClass:"col-lg-11"},[s("p",[e._v("Se muestra la creación de un botón en el "),s("em",[e._v("layout")]),e._v(" llamado activity_main.xml, el código XML tiene creado un contenedor de tipo "),s("em",[s("b",[e._v("LinearLayout")])]),e._v(" con su propiedad vertical y el "),s("em",[s("b",[e._v("Button")])]),e._v(" es creado con sus propiedades básicas, la propiedad que se necesita para referenciar es la del id el nombre del identificador que se colocó para el ejemplo fue "),s("em",[s("b",[e._v("btnclic")])]),e._v(", y en la vista de diseño se puede ver cómo queda el "),s("em",[e._v("button")]),e._v(". ")]),s("p",[s("b",[e._v("Estas son las diferentes vistas en las que se puede trabajar en el "),s("em",[e._v("layout")]),e._v(".")])]),s("p",{staticClass:"mb-0"},[s("b",[s("em",[e._v("Code")])]),e._v(": permite visualizar solo el código XML.")]),s("p",{staticClass:"mb-0"},[s("b",[s("em",[e._v("Split")]),e._v(":")]),e._v(" permite visualizar el código y el diseño como se ve en la figura.")]),s("p",[s("b",[s("em",[e._v("Desing")]),e._v(":")]),e._v(" permite visualizar solo el editor de diseño.")])])]),s("div",{staticClass:"row justify-content-center",attrs:{titulo:"2. En la clase Java declarar el tipo de <em>view</em> y referenciarlo."}},[s("div",{staticClass:"col-lg-10 mb-3"},[s("figure",[s("img",{attrs:{src:a("6b00")}})])]),s("div",{staticClass:"col-lg-11"},[s("p",[e._v("La clase en Java está compuesta por un método principal que se llama Oncreate, todo el código que esté dentro de este método se ejecuta inmediatamente se corra la aplicación.")]),s("p",[e._v("Cada clase tiene relacionado su "),s("em",[e._v("layout")]),e._v(" en el método setContentView por lo tanto se debe referenciar los "),s("em",[e._v("view")]),e._v(" en cada clase que lo contenga, en el ejemplo la clase Java MainActivity contiene al "),s("em",[e._v("layout")]),e._v(" activity_main que fue donde se creó el "),s("em",[e._v("Button")]),e._v(".")])])]),s("div",{staticClass:"row justify-content-center",attrs:{titulo:" 3. Implementar el evento <em>listener</em>."}},[s("div",{staticClass:"col-lg-10 mb-3"},[s("figure",[s("img",{attrs:{src:a("93ea")}})])]),s("div",{staticClass:"col-lg-11"},[s("p",[e._v("En la figura se ve la implementación del evento setOnClickListener para que cuando el usuario de clic en el botón se ejecute una instrucción, el código debe escribirse en el método onClick.")]),s("p",{staticClass:"mb-4"},[e._v("Los "),s("em",[e._v("View")]),e._v(" tiene diferentes métodos escuchadores, en la tabla que se encuentra a continuación se pueden observar los más utilizados:")]),s("div",{staticClass:"table-a mt-4"},[s("table",{staticClass:"tabla__1",attrs:{width:"100%"}},[s("thead",[s("tr",{staticClass:"bg-1"},[s("th",{staticClass:"h5",staticStyle:{"border-right":"2px #AFAFAF solid",width:"30%"}},[s("em",[e._v("View")])]),s("th",{staticClass:"h5",staticStyle:{width:"30%"}},[e._v("Método")])])]),s("tbody",[s("tr",{staticStyle:{"background-color":"#C1F8FF"}},[s("td",{staticStyle:{"border-right":"2px #AFAFAF solid",width:"30%"}},[s("h6",{staticClass:"mb-0"},[s("em",[e._v("ListView")])])]),s("td",{staticStyle:{width:"70%"}},[s("em",[s("b",[e._v("SetOnItemClickListener")])])])]),s("tr",{staticStyle:{"background-color":"#A9EBF4"}},[s("td",{staticStyle:{"border-right":"2px #AFAFAF solid",width:"30%"}},[s("h6",{staticClass:"mb-0"},[s("em",[e._v("Spinner")])])]),s("td",{staticStyle:{width:"70%"}},[s("em",[s("b",[e._v("SetOnItemSelectedListener")])])])]),s("tr",{staticStyle:{"background-color":"#C1F8FF"}},[s("td",{staticStyle:{"border-right":"2px #AFAFAF solid",width:"30%"}},[s("h6",{staticClass:"mb-0"},[s("em",[e._v("ImageView")])])]),s("td",{staticStyle:{width:"70%"}},[s("em",[s("b",[e._v("SetOnClickListener")])])])]),s("tr",{staticStyle:{"background-color":"#A9EBF4"}},[s("td",{staticStyle:{"border-right":"2px #AFAFAF solid",width:"30%"}},[s("h6",{staticClass:"mb-0"},[s("em",[e._v("RadioButton")])])]),s("td",{staticStyle:{width:"70%"}},[s("em",[s("b",[e._v("SetOnClickListener")])])])])])])])])])]),e._m(5)],1)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"titulo-principal color-acento-contenido"},[a("div",{staticClass:"titulo-principal__numero"},[a("span",[e._v("3")])]),a("h1",[e._v("Eventos "),a("em",[e._v("listeners")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"mb-4",attrs:{"data-aos":"fade"}},[e._v("En Android para crear la interacción del usuario con la aplicación se hace a través de eventos. Por ejemplo, cuando se toca una vista (como un botón) se llama al método "),a("em",[a("b",[e._v("onTouchEvent")])]),e._v(" () del objeto utilizando los objetos de escucha de eventos para detectar la interacción del usuario.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bloque-texto-a color-primario p-4 mb-5",attrs:{"data-aos":"fade-down"}},[s("div",{staticClass:"row align-items-center justify-content-around"},[s("div",{staticClass:"col-lg-3 mb-4 mb-lg-0"},[s("figure",[s("img",{staticClass:"mx-auto",staticStyle:{width:"180px"},attrs:{src:a("a5e4")}})])]),s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"bloque-texto-a__texto p-4"},[s("p",{staticClass:"mb-0"},[e._v("Los "),s("em",[e._v("Event Listeners")]),e._v(" (objetos de escucha de eventos) son interfaces de la clase "),s("em",[e._v("view")]),e._v(" que contienen un método de llamado el cual será invocados cuando la vista registre una interacción del usuario con el elemento de la interfaz gráfica. Esto quiere decir que los "),s("em",[e._v("view")]),e._v(" como "),s("em",[s("b",[e._v("Button")])]),e._v(", "),s("em",[s("b",[e._v("ImageView")])]),e._v(", "),s("em",[s("b",[e._v("RadioButton")])]),e._v(", "),s("em",[s("b",[e._v("Checkbox")])]),e._v(", al interactuar con el usuario el objeto escuchará y llamará al método correspondiente a estos view el cual ejecutará una acción determinada.")])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{attrs:{"data-aos":"fade"}},[e._v("Para fijar un "),a("em",[e._v("listener")]),e._v(" se debe implementar y agregar los métodos del evento correspondiente a cada "),a("em",[e._v("view")]),e._v(" mediante el método setOn.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h5",{staticClass:"mb-4",attrs:{"data-aos":"fade"}},[e._v("Para realizar el ejemplo del evento "),a("em",[e._v("listener")]),e._v(" de un "),a("em",[e._v("Button")]),e._v(", se deben seguir algunos pasos que se presentan a continuación.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tarjeta p-3 col-lg-10 m-auto bg-gradiente",attrs:{"data-aos":"fade-down"}},[s("div",{staticClass:"row justify-content-around align-items-center"},[s("div",{staticClass:"col-4 col-sm-2 col-lg-2"},[s("img",{staticClass:"px-lg-4",attrs:{src:a("96d6")}})]),s("div",{staticClass:"col"},[s("div",{staticClass:"row justify-content-between align-items-center"},[s("div",{staticClass:"col mb-3 mb-sm-0"},[s("h3",[e._v("Amplíe sus conocimientos")]),s("p",{staticClass:"mb-0"},[e._v("Para ampliar la información, lo invitamos a ver el video Capítulo 14 – Interacción con Botones, "),s("em",[e._v("TextView")]),e._v(", "),s("em",[e._v("ImageView")]),e._v(".")])]),s("div",{staticClass:"col-sm-auto"},[s("a",{staticClass:"boton boton--b color-acento-contenido",attrs:{href:"https://www.youtube.com/watch?v=-z8zTGTo7vA",target:"_blank"}},[s("span",[e._v("Ir al sitio web")]),s("i",{staticClass:"fas fa-globe"})])])])])])])}],o={name:"Tema3",data:function(){return{}},mounted:function(){var e=this;this.$nextTick((function(){e.$aosRefresh()}))},updated:function(){this.$aosRefresh()}},n=o,l=a("2877"),c=Object(l["a"])(n,s,i,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=tema3.a65cbd12.js.map