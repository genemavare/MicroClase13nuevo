function reporteDePasajeros(cantEstaciones) {
    let cantidadPasajeros = 200;
    let resp = [];
    for (let i = 0; i <= cantEstaciones; i++) {
        if (i == 5) {
            cantidadPasajeros += 40;
        }
        if (i != 5 && i != 0) {
            cantidadPasajeros += 20;
        }
        resp.push("En la estación " + i + " hay "+ cantidadPasajeros + " pasajeros arriba del tren");
    }
    return resp;
} console.log(reporteDePasajeros(1));

