function calcular() {
    var largoPieza = parseFloat(document.getElementById("largoPieza").value);
    var largoCorte = parseFloat(document.getElementById("largoCorte").value);
    var piezasCliente = parseInt(document.getElementById("piezasCliente").value);

    // Verificamos que el largo del corte no sea cero para evitar divisiones por cero
    if (largoCorte === 0) {
        alert("El largo del corte no puede ser cero.");
        return;
    }

    var cortesPorPieza = Math.floor(largoPieza / largoCorte);
    var residuo = largoPieza % largoCorte;
    
    // Si cortesPorPieza es cero, muestra cero en el input "Piezas necesarias"
    if (cortesPorPieza === 0) {
        document.getElementById("piezasNecesarias").value = 0;
        return;
    }

    var piezasNecesarias = Math.ceil(piezasCliente / cortesPorPieza);
    
    // Calculamos alfa
    var alfa = cortesPorPieza * (piezasNecesarias - 1);

    // Si alfa es cero, establecer resultado como 0 y detener la función
    if (alfa === 0) {
        document.getElementById("resultadoOperacion").value = 0;
        return;
    }
    
    // Calculamos beta
    var beta = (piezasCliente - alfa) * largoCorte;
    
    // Calculamos el resultado de la operación
    var resultado = largoPieza - beta;

    document.getElementById("piezasNecesarias").value = piezasNecesarias;
    document.getElementById("residuo").value = residuo.toFixed(2); // Muestra el residuo con dos decimales
    document.getElementById("resultadoOperacion").value = resultado.toFixed(2); // Muestra el resultado de la operación con dos decimales
}


function limpiar() {
    document.getElementById("largoPieza").value = "";
    document.getElementById("largoCorte").value = "";
    document.getElementById("piezasCliente").value = "";
    document.getElementById("piezasNecesarias").value = "";
    document.getElementById("residuo").value = "";
    document.getElementById("resultadoOperacion").value = "";
}
