function Validate_Username(username){
  const validar_user = /^(?=.*\w)(?!.*[\!|\@|\$|%|\^|\&|\*|\(|\)||\+|\=|\'|\;|\:|\"|\/|\\|\s|\-|\#]).{3,50}$/
  if(!validar_user.test(username)){
    return [false, 'El nombre de usuario no puede tener caracteres especiales ni espacios su longitud minima es de 3 caracteres y maximo 50.']
  };
  return [true];
};

export default Validate_Username;