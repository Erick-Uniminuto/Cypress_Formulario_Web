describe('Ingresar contraseñas correctas en su respectivo campo', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/page/index.html?username=asda&password=dadadasda&email=dada%40da&date=2026-11-04');
    cy.EscribirUsername('adsa',0)
  });
  afterEach(() => {
    cy.revisarError('Ingresa un correo electronico valido.')
    cy.wait(1000);
  });
  // Las contraseñas deben tener minimo una minuscula, mayuscula, numero y caracter especial
  it('Contraseña con la longitud minima requerida', () => {
    cy.EscribirPassword('Ds&^a');
  })

  it('Contraseña con la longitud maxima requerida', () => {
    cy.EscribirPassword('12Ds&^a2ajk2');
  })

  it('Contraseñas Genericas', () => {
    cy.EscribirPassword('12Ds&^a2ajk2');
    cy.revisarError('Ingresa un correo electronico valido.');
    cy.get('[data-cy="password-field"]').clear();
    cy.wait(1500)
    cy.EscribirPassword('12Ds&jk2');
    cy.revisarError('Ingresa un correo electronico valido.');
    cy.get('[data-cy="password-field"]').clear();
    cy.wait(1500)
    cy.EscribirPassword('A8*uQ^28s1');
  })
});

// Contraseña que le haga falta numero