let autosImportados = require("./autos");

let concesionaria = {
    autos: autosImportados
};


function buscarAuto(patente) {
    autoEncontrado = this.autos.find(function(auto){
        return auto.patente == patente
        console.log(autoEncontrado(auto))
    })
 return autoEncontrado? autoEncontrado: null;

} ; 
