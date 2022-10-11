### Hola Bienvenido a mi PokeApp ###

La aplicacion que encuentras en este repo fue desarrollada completamente con React Native y TypeScript

El motivo de usar TypeScript es optimizar codigo y agilizar el proceso de la app, ya que el API de Pokemon es algo pesado, por la cantidad de información que genera

la app *NO* Cuenta con Redux, ya que la forma en que se utiliza el typeScript genera ciertas tipados a las funciones y los datos para que se muestren de cierta forma y no se tenga que manejar un estado general de la App.

El buscador está hecho con un DebouncedValue, una función que se dispara despues de escribir, esta funcion filtra entre todos los pokemon que están dentro de una peticion tipo get y va a mostrar los similares de acuerdo a lo que se escribió dentro del input


### Ejecucion del proyecto ###

Para levantar nuestro aplicativo debemos correr el comando Npx React-native run-android esto ejecutara nuestra APP en nuestro dispositivo fisico o nuestro dispositivo android virtual, se recomienda uitilizar el comando Adb devices para verificar los dispositivos disponibles para la ejecucion de nuestro Aplicativo

### Modo de producción! ###

La app ya cuenta con modo de producción Puedes visitarlo en la PlayStore con el siguiente link