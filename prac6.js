//Para ayudar a la empresa escribamos una función reporteDePasajeros(), la cual cuando 
//reciba la cantidad de estaciones que avanzó el tren nos devuelva un reporte de la cantidad de 
//cada una de las estaciones y la cantidad de pasajeros que lleva el tren. La empresa nos provee los siguientes datos:

//El tren sale de la estación terminal siempre con 200 pasajeros.
//En cada estación el tren sube 50 pasajeros y se bajan 30.
//En la estación Florida (la estación número 5), como es una estación central es la única donde bajan 80 personas y suben 120.

function reporteDePasajeros(cantidadEstaciones) {
    let respuesta = []
    let pasajeros = 200
    for (let i = 0; i <=cantidadEstaciones; i++) {
      if (i == 5) {

pasajeros += 40;
      }
        if (i != 5 && i != 0) {
            pasajeros += 20;
        }
        respuesta.push('En la estación' + i + 'hay' + pasajeros + 'pasajeros arriba del tren');
    
    } 
    return respuesta;

} 
console.log(reporteDePasajeros(2));
