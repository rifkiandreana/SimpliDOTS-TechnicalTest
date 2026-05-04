class HapusMovieFavoritPage {
  removeMovieByTitle(title) {
    cy.contains(".comp\\:media-card", title).within(() => {
      cy.get('li[id^="favourite_"].selected a.account_list_action').click({ force: true });
    });
  }
  validateMovieRemoved(title) {
    cy.contains(".card", title).should("not.exist");
  }

  validateDeleteFromFavoriteList(text) {
    cy.get(".notification.success p").last().should("contain", text);
  }

  validateDeleteFromDetailMovie() {
    cy.get(".glyphicons_v2.heart.white.true").should("be.visible");
  }
}

export default new HapusMovieFavoritPage();
