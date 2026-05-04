class TambahFavoritPage {
  clickMovie() {
    cy.contains("a", "Movies").click();
  }
  clickMoviePopular() {
    cy.contains("a", "Popular").click();
  }

  clickOptionMovie(name) {
    cy.contains("h2", name).parents("[data-object-id]").trigger("mouseover").find('[aria-label="View Item Options"]').should("be.visible").click();
  }

  clickAddToFavoriteList() {
    cy.get(".k-tooltip-content").contains("p", "Favorite").click();
  }

  ValidateAddToFavoriteList() {
    cy.get("h2").should("contain.text", "Success");
  }

  clickDetailMovie(name) {
    cy.contains("h2", name).click();
  }

  clickAddToFavoriteDetail() {
    cy.get("#favourite").click();
  }

  ValidateAddToFavoriteDetail() {
    cy.get(".glyphicons_v2.heart.white.true").should("be.visible");
  }

  validateAddToFavoriteNotLogin() {
    cy.get(".k-tooltip-content").should("be.visible").and("contain", "Masuk");
  }
}
export default new TambahFavoritPage();
