<meta charset= "UTF-8"> 

<script> 
 var inicioDeSesioRegistrado = "alura";
    var contrasenhaRegistrada = "alura321";

    var maximoIntentos = 3;
    var intentoAtual = 1;

    while(intentoAtual <= maximoIntentos){
        var inicioDeSesionIngresado = prompt("Ingrese su usuario");
        var contrasenhaIngresada = prompt("Ingrese su contraseña");

        if(inicioDeSesionRegistrado == inicioDeSesionIngresado && contrasenhaRegistrada == contrasenhaIngresada){
            alert("Bienvenido al sistema" + inicioDeSesionIngresado);
            intentoActual = maximoIntentos; // Lo hice bien, así que paso todos los intentos que falten y salgo del loop. Allá abajo aumentará +1! 
        } else {
            if (intentoActual == 3) {
                alert("Agotaste el número permitido de intentos!");
            } else {
                alert("Inicio de sesión inválido. Favor intente de nuevo");
            }
        }

       // vaya al próximo intento 
        intentoActual = intentoActual +1  
    }
</script>