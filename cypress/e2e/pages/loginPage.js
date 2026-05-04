class LoginPage {
  visitTMDB() {
    cy.visit("https://www.themoviedb.org/");
  }

  inputUsername(username) {
    cy.get("#username").clear().type(username);
  }

  inputPassword(password) {
    cy.get("#password").clear().type(password);
  }

  openTMDBLogin() {
    cy.get('a[href="/login"]').first().should("be.visible").click();
  }

  clickLogin() {
    cy.get("#login_button").first().click();
  }

  validateSuccess() {
    cy.url().should("include", "/u/rifkiandre");
    // cy.get(".title").should("contain", "rifkiandre");
  }

  validateError() {
    // cy.get('[data-test="error"]').should("be.visible");
    cy.get(".background_color > :nth-child(1)").should("be.visible");
    // cy.contains("We couldn't validate your information").should("be.visible");
  }
}

export default new LoginPage();
