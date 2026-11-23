describe('Ingresar correos electronicos validos', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/page/index.html?username=asda&password=dadadasda&email=dada%40da&date=2026-11-04');
    cy.EscribirUsername('adsa',0)
    cy.EscribirPassword('1ASD%4sda3',0)
  });
  afterEach(() => {
    cy.revisarError('El dia debe estar entre 01-31')
    cy.wait(1000);
  });

  it('Correo electronico con el arroba puesto', () => {
    cy.EscribirEmail('pikachupokemon.com');
  });

  it('Correo electronico con una parte anterior al arroba', () => {
    cy.EscribirEmail('lily@gmail.com');
  });

  it('Correo electronico con un dominio', () => {
    cy.EscribirEmail('lily@midominio.com'); 
  });

  it('Correo electronico con una extension de dominio valida', () => {
    // Solo tendre en cuenta los mas populares como .com, .gov o .co
    cy.EscribirEmail('lily@outlook.com');
    cy.revisarError('El dia debe estar entre 01-31');
    cy.get('[data-cy="email-field"]').clear();
    cy.EscribirEmail('lily@outlook.co');
    cy.revisarError('El dia debe estar entre 01-31');
    cy.get('[data-cy="email-field"]').clear();
    cy.EscribirEmail('lily@outlook.gov');
  });
});

// Correo electronico sin arroba