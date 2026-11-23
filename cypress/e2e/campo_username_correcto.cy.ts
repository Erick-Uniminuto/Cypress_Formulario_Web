describe('Validar el campo del nombre de usuario con datos correctos', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/page/index.html?username=asda&password=dadadasda&email=dada%40da&date=2026-11-04');
  });
  afterEach(() => {
    cy.revisarError('La contraseña debe tener de 8 a 12 caracteres, letras minusculas, mayusculas, numeros y caracteres especiales.')
    cy.wait(1000);
  });

  it('Nombre de usuario con la longitud minima aceptada', () => {
    cy.EscribirUsername('ya');
  })

  it('Nombre de usuario con la longitud maxima aceptada', () => {
    cy.EscribirUsername('agshagshagshagshagshagshagshasshagshagshagshagshdf');
  });

  it('Nombres de usuario genericos', () => {
    cy.EscribirUsername('camila');
    cy.revisarError('La contraseña debe tener de 8 a 12 caracteres, letras minusculas, mayusculas, numeros y caracteres especiales.')
    cy.get('[data-cy="username-field"]').clear();
    cy.wait(800)
    cy.EscribirUsername('lauren25');
    cy.revisarError('La contraseña debe tener de 8 a 12 caracteres, letras minusculas, mayusculas, numeros y caracteres especiales.')
    cy.get('[data-cy="username-field"]').clear();
    cy.wait(800)
    cy.EscribirUsername('37lola82');
  });
});

// Longitud menor a la exigida