function Validate_Genre(genre){
  console.log(genre)
  if (genre == "m" || genre == "f"){
    return [true];
  };
  return [false, 'Debes seleccionar un genero']
};

export default Validate_Genre;