function calcularEdad(fecha: string) {

    const values: any = fecha.split("-");
    const dia: number = values[2];
    const mes: number = values[1];
    const ano: number = values[0];
  
//Tomamos los valores actuales
    const fecha_hoy: Date = new Date();
    const ahora_ano: number = fecha_hoy.getFullYear();
    const ahora_mes: number = fecha_hoy.getMonth() + 1;
    const ahora_dia: number = fecha_hoy.getDate();
  
//Calculamos los años
    let edad: number = (ahora_ano + 1900) - ano;
    
    if(ahora_mes < mes) {
      edad--;
    }
  
    if((mes == ahora_mes) && (ahora_dia < dia)) {
      edad--;
    }
  
    if (edad > 1900) {
      edad -= 1900;
    }
  
//Calculamos los meses
    let meses: number = 0;
  
    if(ahora_mes > mes && dia > ahora_dia) {
      meses = ahora_mes - mes - 1;
    } else if(ahora_mes > mes) {
      meses = ahora_mes - mes;
    }
  
    if(ahora_mes < mes && dia < ahora_dia) {
      meses = 12 - (mes - ahora_mes);
    } else if(ahora_mes < mes) {
      meses = 12 - (mes - ahora_mes + 1);
    }
    
    if(ahora_mes == mes && dia > ahora_dia) {
      meses = 11;
    }
  
//Calculamos los dias
    let dias: number = 0;
    let ultimoDiaMes: any;
    
    if(ahora_dia > dia) {
      dias = ahora_dia - dia;
    }
    
    if(ahora_dia < dia) {
      ultimoDiaMes = new Date(ahora_ano, ahora_mes - 1, 0);
      dias = ultimoDiaMes.getDate() - (dia - ahora_dia);
    }
  
    return "Tengo " + edad + " años, " + meses + " meses y " + dias + " días";
  }
  
  console.log(calcularEdad("1993-03-13"));
  console.log(calcularEdad("1987-10-17"));
  console.log(calcularEdad("1996-04-24"));