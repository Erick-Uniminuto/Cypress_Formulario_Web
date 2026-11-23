describe('Validar los campos de fechas', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/page/index.html?username=asda&password=dadadasda&email=dada%40da&date=2026-11-04');
    cy.EscribirUsername('adsa',0)
    cy.EscribirPassword('1ASD%4sda3',0)
    cy.EscribirEmail('lily@gmail.com',0);
  });

  it('Ingresar valores para el dia que son invalidos', () => {
    cy.EscribirDia('00'); // escribir un numero menor a 01 como -1 o 00
    cy.revisarError('El dia debe estar entre 01-31');
    cy.get('[data-cy="day-field"]').clear();
    cy.EscribirDia('-1');
    cy.revisarError('El dia debe estar entre 01-31');
    cy.get('[data-cy="day-field"]').clear();
    cy.EscribirDia('32'); // escribir un numero mayor a 31
    cy.revisarError('El dia debe estar entre 01-31');
    cy.get('[data-cy="day-field"]').clear();
    cy.EscribirDia('47');
    cy.revisarError('El dia debe estar entre 01-31');
    cy.get('[data-cy="day-field"]').clear();
    cy.EscribirDia('hol@ que tal'); // intentar escribir texto
    cy.revisarError('El dia debe estar entre 01-31');
  });

  it('Dejar el campo del dia vacio', () => {
    cy.wait(1000);// dejar el campo vacio
    cy.revisarError('El dia debe estar entre 01-31');
  });

  it('Ingresar valores para el dia que son validos', () => {
    cy.EscribirDia('31'); 
    cy.revisarError('El mes debe estar entre 01-12');
    cy.get('[data-cy="day-field"]').clear();
    cy.EscribirDia('01');
    cy.revisarError('El mes debe estar entre 01-12');
    cy.get('[data-cy="day-field"]').clear();
    cy.EscribirDia('13'); 
    cy.revisarError('El mes debe estar entre 01-12');
  });

  it('Ingresar valores para el mes que son invalidos', () => {
    cy.EscribirDia('31',0); 
    cy.EscribirMes('00'); // escribir un mes menor a 01 como 00 o -1
    cy.revisarError('El mes debe estar entre 01-12');
    cy.get('[data-cy="month-field"]').clear();
    cy.EscribirMes('-1');
    cy.revisarError('El mes debe estar entre 01-12');
    cy.get('[data-cy="month-field"]').clear();
    cy.EscribirMes('13'); // escribir un mes mayor a 12
    cy.revisarError('El mes debe estar entre 01-12');
    cy.get('[data-cy="month-field"]').clear();
    cy.EscribirMes('20');
    cy.revisarError('El mes debe estar entre 01-12');
    cy.get('[data-cy="month-field"]').clear();
    cy.EscribirMes('hol@ que tal'); // intentar escribir texto
    cy.revisarError('El mes debe estar entre 01-12');
  });

  it('Dejar el campo del mes vacio', () => {
    cy.EscribirDia('31',0); 
    cy.wait(1000);// dejar el campo vacio
    cy.revisarError('El mes debe estar entre 01-12');
  });

  it('Ingresar valores para el mes que son validos', () => {
    cy.EscribirDia('12',0); 
    cy.EscribirMes('12'); 
    cy.revisarError('El año debe estar entre 1000-2999');
    cy.get('[data-cy="month-field"]').clear();
    cy.EscribirMes('01');
    cy.revisarError('El año debe estar entre 1000-2999');
    cy.get('[data-cy="month-field"]').clear();
    cy.EscribirMes('05'); 
    cy.revisarError('El año debe estar entre 1000-2999');
  });

  it('Ingresar valores para el año que son invalidos', () => {
    cy.EscribirDia('31',0); 
    cy.EscribirMes('12',0);
    cy.EscribirAnio('12'); // escribir un año menor a 1000
    cy.revisarError('El año debe estar entre 1000-2999');
    cy.get('[data-cy="year-field"]').clear();
    cy.EscribirAnio('999');
    cy.revisarError('El año debe estar entre 1000-2999');
    cy.get('[data-cy="year-field"]').clear();
    cy.EscribirAnio('3000'); // escribir un año mayor a 2999
    cy.revisarError('El año debe estar entre 1000-2999');
    cy.get('[data-cy="year-field"]').clear();
    cy.EscribirAnio('5099');
    cy.revisarError('El año debe estar entre 1000-2999');
    cy.get('[data-cy="year-field"]').clear();
    cy.EscribirAnio('hol@ como est@s?'); // intentar escribir texto
    cy.revisarError('El año debe estar entre 1000-2999');
  });

  it('Dejar el campo del año vacio', () => {
    cy.EscribirDia('31',0); 
    cy.EscribirMes('12',0);
    cy.wait(1000);// dejar el campo vacio
    cy.revisarError('El año debe estar entre 1000-2999');
  });

  it('Ingresar valores para el año que son validos', () => {
    cy.EscribirDia('12',0); 
    cy.EscribirMes('12',0); 
    cy.EscribirAnio('2026');
    cy.revisarError('Debes seleccionar un genero');
    cy.get('[data-cy="year-field"]').clear();
    cy.EscribirAnio('1987');
    cy.revisarError('Debes seleccionar un genero');
    cy.get('[data-cy="year-field"]').clear();
    cy.EscribirAnio('2011');
    cy.revisarError('Debes seleccionar un genero');
  });
});