describe('Validar los textos del formulario', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/page/index.html?username=asda&password=dadadasda&email=dada%40da&date=2026-11-04');
  });

  it('Revisar el texto de los elementos del formulario', () => {
    cy.ValidarTexto('title','Registrarse', 'rgb(27, 152, 224)');
    cy.ValidarTexto('username-advice','Nombre de Usuario', 'rgb(128, 128, 128)');
    cy.ValidarTexto('password-advice','Contraseña', 'rgb(128, 128, 128)');
    cy.ValidarTexto('email-advice','Correo Electronico', 'rgb(128, 128, 128)');
    cy.ValidarTexto('fecha-nacimiento-advice','Fecha de Nacimiento', 'rgb(128, 128, 128)');
    cy.ValidarTexto('day-advice','Dia', 'rgb(128, 128, 128)');
    cy.ValidarTexto('month-advice','Mes', 'rgb(128, 128, 128)');
    cy.ValidarTexto('year-advice','Año', 'rgb(128, 128, 128)');
    cy.ValidarTexto('text-checkbox-1','Masculino', 'rgb(128, 128, 128)');
    cy.ValidarTexto('text-checkbox-2','Femenino', 'rgb(128, 128, 128)');
    cy.ValidarTexto('send-button','Registrarse', 'rgb(255, 255, 255)');
    cy.get(`[data-cy="send-button"]`).should('have.css', 'background-color', 'rgb(27, 152, 224)')
  });

  it('Revisar que los textos cambien de color cuando se seleccionan', () => {
    cy.CambioColor('username-advice','username-field','Nombre de Usuario','rgb(27, 152, 224)');
    cy.CambioColor('password-advice','password-field','Contraseña','rgb(27, 152, 224)');
    cy.CambioColor('email-advice','email-field','Correo Electronico','rgb(27, 152, 224)');
    cy.CambioColor('day-advice','day-field','Dia','rgb(27, 152, 224)');
    cy.CambioColor('month-advice','month-field','Mes','rgb(27, 152, 224)');
    cy.CambioColor('year-advice','year-field','Año','rgb(27, 152, 224)');
  });
});