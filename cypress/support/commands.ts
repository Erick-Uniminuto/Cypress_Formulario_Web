declare global{
  namespace Cypress{
    interface Chainable{
      revisarError(msg:string): Chainable<void>;
      EscribirUsername(texto:string, time?:number):Chainable<void>;
      EscribirPassword(password:string, time?:number):Chainable<void>;
      EscribirEmail(email:string, time?:number):Chainable<void>;
      EscribirDia(day:string, time?:number):Chainable<void>;
      EscribirMes(month:string, time?:number):Chainable<void>;
      EscribirAnio(year:string, time?:number):Chainable<void>;
      ValidarTexto(id:string, text:string, color:string):Chainable<void>;
      CambioColor(id_texto:string, id_campo:string, text:string, color:string):Chainable<void>
    }
  }
}

Cypress.Commands.add('revisarError', (msg) => {
  cy.wait(200);
  cy.get('[data-cy="send-button"]').click();
  cy.get('[data-cy="error-text"]').should('have.text',msg);
});

Cypress.Commands.add('EscribirUsername', (texto, time = 2000) => {
  cy.get('[data-cy="username-field"]').click();
  cy.get('[data-cy="username-field"]').type(texto);
  cy.wait(time);
})

Cypress.Commands.add('EscribirPassword', (password, time = 2000) => {
  cy.get('[data-cy="password-field"]').click();
  cy.get('[data-cy="password-field"]').type(password);
  cy.wait(time);
});

Cypress.Commands.add('EscribirEmail', (email, time = 2000) => {
  cy.get('[data-cy="email-field"]').click();
  cy.get('[data-cy="email-field"]').type(email)
  cy.wait(time);
});

Cypress.Commands.add('EscribirDia', (day, time = 2000) => {
  cy.get('[data-cy="day-field"]').click();
  cy.get('[data-cy="day-field"]').type(day)
  cy.wait(time);
});

Cypress.Commands.add('EscribirMes', (month, time = 2000) => {
  cy.get('[data-cy="month-field"]').click();
  cy.get('[data-cy="month-field"]').type(month)
  cy.wait(time);
});

Cypress.Commands.add('EscribirAnio', (year, time = 2000) => {
  cy.get('[data-cy="year-field"]').click();
  cy.get('[data-cy="year-field"]').type(year)
  cy.wait(time);
});

Cypress.Commands.add('ValidarTexto', (id, text, color) => {
  cy.get(`[data-cy="${id}"]`).should('have.text',text);
  cy.get(`[data-cy="${id}"]`).should('have.css', 'color', color)
  cy.get(`[data-cy="${id}"]`).should('be.visible')
  cy.wait(1500);
});

Cypress.Commands.add('CambioColor', (id_texto, id_campo, text, color) => {
  cy.get(`[data-cy="${id_campo}"]`).click();
  cy.get(`[data-cy="${id_texto}"]`).should('have.text',text);
  cy.get(`[data-cy="${id_texto}"]`).should('have.css', 'color', color)
  cy.wait(1500);
});

export {};