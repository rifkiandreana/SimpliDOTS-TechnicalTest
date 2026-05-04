class ShortingMoiveFavoritPage {
  //   clickDropdownSorting() {
  //     cy.get(".sort_text:not(.hide)").click();
  //     cy.get('a[data-sort-by="created_at"]').click({ force: true });
  //     cy.url().should("include", "sort_by=created_at");
  //   }

  selectSortByPopularity() {
    // cy.get("#filter_by_popularity").should("be.visible").click();
    cy.visit("https://www.themoviedb.org/u/rifkiandre/favorites/movie?sort_by=popularity&sort_order=desc");
  }

  selectSortByReleaseDate() {
    cy.visit("  https://www.themoviedb.org/u/rifkiandre/favorites/movie?sort_by=release_date&sort_order=desc");
  }

  selectSortByDateAdded() {
    cy.visit("https://www.themoviedb.org/u/rifkiandre/favorites/movie?sort_by=created_at&sort_order=desc");
  }

  verifyUrlContains(sortBy, sortOrder) {
    cy.url().should("include", `sort_by=${sortBy}`);
    cy.url().should("include", `sort_order=${sortOrder}`);
  }

  clickProfile() {
    cy.get('a[aria-label="Profile and Settings"]').click();
  }

  clickMenuProfile(menuName) {
    cy.contains(".k-tooltip a", menuName).click();
  }
}

export default new ShortingMoiveFavoritPage();
