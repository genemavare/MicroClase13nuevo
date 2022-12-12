array1 = [10,60,30];


function asientosDisponibles (disponibles, aOcupar){
    for (let i = 0; i <= disponibles.length; i++){

        if (aOcupar == disponibles[i]){
            let mensaje = "Felicitaciones, el asiento número " + aOcupar + " está disponible";
            return mensaje
        } 
        else if (i == disponibles.length){
            let mensaje = "Lo sentimos, el asiento número " + aOcupar + " está ocupado, pero aún quedan "+ disponibles.length + " asientos disponibles";
        return mensaje

    } 
    }
}
console.log(asientosDisponibles(array1,60));
