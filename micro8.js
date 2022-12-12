cursos = [['html5',4000],['css3',5000], ['javascript', 10000],['react',7000], ['nodejs',15000]];
elegidos = ['HTML5','JAVASCRIPT'];






function callBack1(a,b) {
    let precio = 0

    for (let i = 0; i < a.length; i++) {
        let mayuscula = a[i][0].toUpperCase();

        if (b.includes(mayuscula)) {
            precio = precio + a[i][1];
        }
        
    } return precio;
    
}

//console.log(callBack1(cursos,elegidos));

function facturacion(nombre,apellido,array,array2,callBack){
  return 'estimado' + ' ' +  nombre + ' ' + apellido + ' ' + 'en función de los cursos seleccionados su monto a pagar es de' + ' ' + callBack(array,array2);


} 
console.log(elegidos,facturacion('genesis','mavare',cursos,elegidos,callBack1));
