function calcularEdad(fecha) {
    // Si la fecha es correcta, calculamos la edad
    var values = fecha.split("-");
    var dia = values[2];
    var mes = values[1];
    var ano = values[0];
    // Tomamos los valores actuales
    var fecha_hoy = new Date();
    var ahora_ano = fecha_hoy.getFullYear();
    var ahora_mes = fecha_hoy.getMonth() + 1;
    var ahora_dia = fecha_hoy.getDate();
    // Calculamos los años
    var edad = (ahora_ano + 1900) - ano;
    if (ahora_mes < mes) {
        edad--;
    }
    if ((mes == ahora_mes) && (ahora_dia < dia)) {
        edad--;
    }
    if (edad > 1900) {
        edad -= 1900;
    }
    // calculamos los meses
    var meses = 0;
    if (ahora_mes > mes && dia > ahora_dia) {
        meses = ahora_mes - mes - 1;
    }
    else if (ahora_mes > mes) {
        meses = ahora_mes - mes;
    }
    if (ahora_mes < mes && dia < ahora_dia) {
        meses = 12 - (mes - ahora_mes);
    }
    else if (ahora_mes < mes) {
        meses = 12 - (mes - ahora_mes + 1);
    }
    if (ahora_mes == mes && dia > ahora_dia) {
        meses = 11;
    }
    //Calculamos los dias
    var dias = 0;
    var ultimoDiaMes;
    if (ahora_dia > dia) {
        dias = ahora_dia - dia;
    }
    if (ahora_dia < dia) {
        ultimoDiaMes = new Date(ahora_ano, ahora_mes - 1, 0);
        dias = ultimoDiaMes.getDate() - (dia - ahora_dia);
    }
    return "Tengo " + edad + " años, " + meses + " meses y " + dias + " días";
}
console.log(calcularEdad("1993-03-13"));
console.log(calcularEdad("1987-10-17"));
console.log(calcularEdad("1996-04-24"));
