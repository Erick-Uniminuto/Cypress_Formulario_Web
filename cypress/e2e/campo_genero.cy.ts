describe('Validar los check radios para seleccion del genero', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/page/index.html?username=asda&password=dadadasda&email=dada%40da&date=2026-11-04');
    cy.EscribirUsername('adsa',0)
    cy.EscribirPassword('1ASD%4sda3',0)
    cy.EscribirEmail('lily@gmail.com',0);
    cy.EscribirDia('01',0);
    cy.EscribirMes('12',0);
    cy.EscribirAnio('2009',0);
  });

  it('Dejo los checkbox sin marcar', () => {
    cy.wait(1000);
    cy.revisarError('Debes seleccionar un genero');
  });

  it('Seleccionar el checkbox de genero masculino', () => {
    cy.get('[data-cy="checkbox-1"]').check();
    cy.wait(1000)
    cy.get('[data-cy="checkbox-1"]').should('be.checked');
    cy.get('[data-cy="checkbox-2"]').should('not.be.checked');
    cy.revisarError('Bienvenido adsa');
  });

  it('Seleccionar el checkbox de genero femenino', () => {
    cy.get('[data-cy="checkbox-2"]').check();
    cy.wait(1000)
    cy.get('[data-cy="checkbox-2"]').should('be.checked');
    cy.get('[data-cy="checkbox-1"]').should('not.be.checked');
    cy.revisarError('Bienvenido adsa');
  });
});