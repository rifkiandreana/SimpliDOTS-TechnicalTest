class HalamanFavorit {
  clickMenu(menuName) {
    cy.contains("li.k-item", menuName).should("be.visible").realHover();
  }

  clickSubMenu(subMenuName) {
    cy.contains("li.k-item", subMenuName).should("be.visible").realHover().wait(200); // penting untuk animasi Kendo
  }

  clickMenuItem(menuItemName) {
    cy.get(".k-menu-popup")
      .should("be.visible")
      .last() // ambil popup TERAKHIR (submenu aktif)
      .contains("a.k-menu-link", menuItemName)
      .click();
    cy.get("body").click(0, 0);
  }

  validateHalamanFavorit() {
    cy.url().should("include", "u/rifkiandre/favorites");
  }

  validateMovieExists(movieName) {
    cy.contains(".comp\\:media-card", movieName).should("be.visible");
  }

  validateFirstMovie(expectedTitle) {
    cy.get(".comp\\:media-card").first().find("h2 span").should("have.text", expectedTitle);
  }

  validateEmptyFavoriteState() {
    cy.get(".items_wrapper").should("be.visible").and("contain", "You haven't added any favorite movies.");
  }
}

export default new HalamanFavorit();
