    let Compacto = 14000;
    let Mediano = 17000;
    let Camioneta = 28000;
    let silla1 = 1200; 
    let mensaje = 'Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los días utilizados'
    let mensaje2 = 'el monto total a pagar es de'
    





function totalApagar(tipo,dias,silla){

    if (tipo === 'compacto1' && silla == 'silla'){
        return mensaje + ',' + mensaje2 + ' ' + (Compacto*dias + silla1);
        
    } else if(tipo === 'compacto1' && silla !== 'silla'){
        return mensaje + ',' + mensaje2 + ' ' + (Compacto*dias);
        
    }


    if (tipo === 'Mediano1' && silla == 'silla'){
        return mensaje + ',' + mensaje2 + ' ' + (Mediano*dias + silla1);
        
    } else if(tipo === 'Mediano1' && silla !== 'silla'){
        return mensaje + ',' + mensaje2 + ' ' + (Mediano*dias);
        
    }

    if (tipo === 'Camioneta1' && silla == 'silla'){
        return mensaje + ',' + mensaje2 + ' ' + (Camioneta*dias + silla1);
        
    } else if(tipo === 'Camioneta1' && silla !== 'silla'){
        return mensaje + ',' + mensaje2 + ' ' + (Camioneta*dias);
        
    }   

        
    }


console.log(totalApagar('Camioneta1',3,'silla'));



