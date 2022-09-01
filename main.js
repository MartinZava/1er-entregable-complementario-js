let nivel = prompt (`Ingrese su nivel de Javascript: 

Inicial
Intermedio
Avanzado

Ingrese ESC para salir`)

while (nivel != "ESC" && nivel != "esc" && nivel != "Esc") {

    switch (nivel) {
        case `Inicial`:
            alert ("Usted tiene clases los lunes y miercoles.");
            break;

        case `Intermedio`:
            alert ("Usted tiene clases los martes y jueves.");
            break;

        case `Avanzado`:
            alert ("Usted tiene clases los sabados.");
            break;

        default:
            alert ("Ingrese un nivel.")
            break;
    }
    nivel = prompt (`Ingrese su nivel de Javascript: 

Inicial
Intermedio
Avanzado

Ingrese ESC para salir`)

    if (nivel === "ESC" || nivel === "esc" || nivel === "Esc") {
        alert ("Muchas Gracias")
    }
}




