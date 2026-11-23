import Validate_Username from "./validators/validate_username.js";
import Validate_Password from "./validators/validate_password.js";
import Validate_Email from "./validators/validate_email.js";
import Validate_Date from "./validators/validate_date.js";
import Validate_Genre from "./validators/validate_genre.js";

function Validate(username, password, email, day, month, year, genre = ''){
  let validar_usuario = Validate_Username(username);
  let validar_password = Validate_Password(password); 
  let validar_email = Validate_Email(email);
  let validar_fecha = Validate_Date(day,month,year);
  let validar_genero = Validate_Genre(genre);
  // Validando el usuario
  if (!validar_usuario.at(0)){
    return warning(false,validar_usuario.at(1));
  };
  // Validando la contraseña
  if(!validar_password.at(0)){
    return warning(false, validar_password.at(1));
  };
  // Validando el correo
  if(!validar_email.at(0)){
    return warning(false, validar_email.at(1));
  };
  // Validando fecha de nacimiento
  if(!validar_fecha.at(0)){
    return warning(false, validar_fecha.at(1));
  };
  // Validar Genero
  if(!validar_genero.at(0)){
    return warning(false, validar_genero.at(1));
  };
  return warning(true,username);
};

// Funcion para colocar el texto rojo
function warning(flag,message){
  let attention = document.querySelector('.advice');
  if(!flag){
    attention.style.color = '#DC3545';
    attention.style.display = 'block';
    attention.textContent = message
    return
  };
  attention.style.display = 'block';
  attention.style.color = '#198754';
  attention.textContent = `Bienvenido ${message}`;
  return
};


let boton_envio = document.querySelector('.button-submit');

boton_envio.addEventListener('click', () => {
  const inputs = document.querySelectorAll('.inputs');
  let values = new Map();
  for (let val of [...inputs]){
    values.set(val.id, val.value)
  }
  const check_boxes = document.querySelectorAll('input[type="radio"]:checked');
  for (let check of [...check_boxes]){
    values.set(check.id,check.value ?? undefined)
  };
  return Validate(values.get('username'),
           values.get('password'),
           values.get('email'),
           values.get('day'),
           values.get('month'),
           values.get('year'),
           values.get('genre'))
})