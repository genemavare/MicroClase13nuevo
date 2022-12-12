array1 = [10,60,30,50,60];

function asientosDisponibles(a,b) {
    for (let index = 0; index <= a.length; index++) {
       if (b==a[index]) {
        let mensaje1 = 'Felicitaciones, el asiento número' + b + 'está disponible';
        return mensaje1;
       }
        else if(index==a.length){
            let mensaje2 = 'Lo sentimos, el asiento número' + b + 'está ocupado, pero aún quedan 5 asientos disponibles';
            return mensaje2;
        }
    }
    
} console.log(asientosDisponibles(array1,40));



