class DateTimeHelper {
    isDate = (ano,mes,dia) => { 
    let fecha = `${ano}-${mes}-${dia}`;
    let fechaPar = null;
    fechaPar = Date.parse(fecha);
    return isNaN(fechaPar)
 };
    getOnlyDate = (fecha = new Date()) => { };
    getEdadActual = (ano,dia,mes) => 
    { 
        let hoy = new Date();
        var edad = hoy.getFullYear() - ano;
        var m = hoy.getMonth - mes;
        if (m < 0 || (m === 0 && hoy.getDate() < dia)) {
            edad--;
        }
        return edad;
     };
    getDiasHastaMiCumple = (fechaNacimiento) => {  };
    getDiaTexto = (fecha, retornarAbreviacion = false) => {  };
    getMesTexto = (fecha, retornarAbreviacion = false) => { };
    }
    export default new DateTimeHelper();