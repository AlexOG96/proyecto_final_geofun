# C.F.G.S Desarrollo de Aplicaciones Web - Módulo de Proyecto Integrado -   Documentación de Alejandro Ortega García

## Introducción
El objetivo de este proyecto ha sido desarrollar un juego en el que el usuario recibe una imagen **StreetView** aleatoria de la ciudad de Jerez de la frontera y tiene que adivinar marcando en un mapa de la ciudad en que lugar se encuentra en la imagen (similar a [Geoguessr](www.geoguessr.com))

## Tecnologías utilizadas

 - Javascript
 - React
 - Next.js
 - CSS
 - MapBox GL (permite añadir mapas similares a los de **Google Maps**, pero con muchas posibilidades de  personalización)
 - AntDesign (similar a Bootstrap, ofrece componentes personalizados)
 - Google API (para poder usar la StreetView)
 - Visual Studio Code
 - Netlify (para el hosting)
 - GitHub

## Dificultades encontradas

 - El hosting siempre ha funcionado bien hasta cierto momento en el que todos los elementos como botones, switches, etc. dejaron de funcionar, a pesar de que en local funciona perfectamente (probablemente haya algún tipo de incompatibilidad con las herramientas de **StreetView** que utilizo, y en ningún hosting funciona).
 - Para poder utilizar la API de **Google** he tenido que crearme un proyecto en la **Google Cloud Platform**. Aunque esto es de pago, al usarlo por primera vez, **Google** te ofrece tres meses gratis y unos 300$ para emplear en sus tecnologías. Una vez configurado todo, recibí el token para poder usar la API de Google necesaria para la **StreetView**.

## Componentes de la aplicación

## header
Este componente es compartido con la mayoría de las páginas de la aplicación. Es la cabecera que incluye el logo de la aplicación y un menú para poder navegar por las diferentes páginas.

## footer
Al igual que *header*, este componente es compartido por casi todas las páginas de la aplicación. Es el el footer donde se se incluye los enlaces a algunas de las páginas de información.

## vistamapa
Este componente es básicamente el motor principal del juego y podemos encontrarlo en la página *iniciojuego*. Tiene todos los métodos que utiliza el juego (el cálculo de la distancia del punto marcado en el mapa, el cronómetro, etc.) además de ser el componente donde se renderizan el mapa de **Mapbox GL** y la **StreetView**.

## vistasv
Este componente se encuentra dentro del componente *vistamapa* y se encarga de renderizar la **StreetView**.

## mapafinal
Este componente se encuentra dentro del componente *vistamapa*. Sirve para renderizar el mapa que indica al final del juego el lugar que había que adivinar y el lugar que el jugador ha señalado. 

## Páginas de la aplicación

## index
Es la página inicial de la aplicación. En ella se encuentra una pequeña introducción y un botón con el que viajar a la página donde se encuentra el juego.

## [relativo]
Esta página se muestra cuando se escribe una url que no existe en la apliación. Muestra un mensaje de error explicando que no se encontró la página y un botón para volver a *index*

## iniciojuego
En esta página se encuentra el juego en sí. Dentro nos encontramos la configuración inicial del juego (que podemos modificar para tener una mayor o menor dificultad) y el botón que inicia el juego. Al pulsarlo se deja de mostrar lo anterior y se muestra el componente *vistamapa*. Éste recibe la configuración inicial además de unas coordenadas aleatorias de *streetviewsjerez.json*.

## privacidad, proteccion, y terminos
Estas páginas muestran la **política de privacidad**, **los términos y condiciones de uso** y la **protección de datos**, respectivamente.

## Guía de usuario
Para aprender a utilizar la aplicación, empezaremos explicando para que sirven las diferentes opciones de la configuración inicial del juego.

![enter image description here](https://i.ibb.co/XZPkR3m/image.png)

 - **Movimiento permitido**: al desactivarlo, no podremos movernos entre diferentes StreetView dentro del juego. Tendremos que adivinar donde nos encontramos viendo solo la primera StreetView.
 -  **Leyenda mapa**: Depende de lo que elijamos tendremos más o menos información en el mapa en el que realizamos la predicción.
 - **Temporizador**: Sirve para activar el límite de tiempo. Una vez activado se mostrará un *input numérico* donde podemos seleccionar la cantidad de tiempo que queremos, de 1 a 15 minutos.

Una vez seleccionada la configuración deseada, podremos iniciar el juego pulsando el botón de arriba:

![enter image description here](https://i.ibb.co/tmx7FzT/image.png)

Cuándo se inicie nos encontraremos con lo siguiente:
![enter image description here](https://i.ibb.co/PYQtbwj/image.png)

Arriba a la izquierda encontramos el mapa donde podemos marcar el lugar en el que creemos que está tomada la StreetView. El temporizador que se ve encima del mapa solo aparece si hemos marcado la opción de tener tiempo, y al llegar a 0 dará el juego por terminado automáticamente, tomando en cuenta la última predicción tomada. El botón de confirmar selección se activa una vez hayamos hecho una predicción y al pulsarlo el juego acabará y nos dará el resultado. El botón a la derecha con el símbolo de la banderita sirve para volver a la StreetView inicial, en caso de que nos hayamos movido. Una vez confirmada la selección, veremos el resultado de nuestra predicción.

![enter image description here](https://i.ibb.co/3vnrKCG/image.png)

También aparece un botón con el que volver a *iniciojuego*.

## Bibliografía

 - [React](https://es.reactjs.org/)
 - [Next.js](https://nextjs.org/)
 - [AntDesign](https://ant.design/)
 - [Mapbox](https://www.mapbox.com/)
 - [https://www.netlify.com/](https://www.netlify.com/)

