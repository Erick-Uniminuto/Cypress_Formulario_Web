function Validate_Email(gmail){
  const validate = /^\w+@\w+\.(com|co|gov|edu|net|org|io|app)$/;
  if(!validate.test(gmail)){
    return [false, 'Ingresa un correo electronico valido.']
  };
  return [true]
};

export default Validate_Email;