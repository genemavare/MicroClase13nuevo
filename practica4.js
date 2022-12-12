let carne1 = 'Carne a la parrilla: $1800';
let pollo1 = 'Pollo: $1500'
let vegetal1 = 'Vegetariana: $1200'

//Jamón = $30
//Queso = $25
//Salsa de tomate = $5
////Mayonesa = $5
//Mostaza = $5
//Tomate = $15


function callBack(tipo){
    switch (tipo) {
        case 'carne':

        return carne1;
            
            break;
    }

    switch (tipo) {
        case 'pollo':
        
        return pollo1;
                    
                    break;
    

}

    switch (tipo) {
       case 'vegetal':
    
    return vegetal1;
                
                break;


}
    }

    console.log(callBack('vegetal'));
