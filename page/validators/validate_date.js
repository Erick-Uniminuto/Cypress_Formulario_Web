function Validate_Date(day, month, year){
  let validar_dia = /^[0-3][0-9](?<!00)(?<!3[2-9])$/;
  let validar_mes = /^[0-1][0-9](?<!1[3-9])(?<!00)$/; 
  let validar_anio = /^[1-2][0-9][0-9][0-9]$/;
  if(!validar_dia.test(day)){
    return [false, 'El dia debe estar entre 01-31']
  };
  if(!validar_mes.test(month)){
    return [false, 'El mes debe estar entre 01-12']
  };
  if(!validar_anio.test(year)){
    return [false, 'El año debe estar entre 1000-2999'];
  };
  return [true]
};

export default Validate_Date;