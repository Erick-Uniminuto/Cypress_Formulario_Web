function Validate_Password(password){
  const validate = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#\$%\^&\*\(\)\[\]\{\}\:\;\,\.\<\>\?\¿\"\']).{8,12}$/;
  if(!validate.test(password)){
    return [false, 'La contraseña debe tener de 8 a 12 caracteres, letras minusculas, mayusculas, numeros y caracteres especiales.']
  };
  return [true]
};

export default Validate_Password;

// Longitud de 8 a 12, minusculas, mayusculas, nums, especiales