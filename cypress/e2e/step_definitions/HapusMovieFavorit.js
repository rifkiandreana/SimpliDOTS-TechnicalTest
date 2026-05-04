import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HapusMovieFavoritPage from "../pages/HapusMovieFavoritPage";
import MelihatMoviewFavoritPage from "../pages/MelihatMoviewFavoritPage";
import TambahFavoritPage from "../pages/TambahFavoritPage";

// ─────────────────────────────────────────
// Scenario 1: User menghapus movie dari halaman favorite list
// ─────────────────────────────────────────
When("user menghapus movie dari favorite list", () => {
  HapusMovieFavoritPage.removeMovieByTitle("Michael");
});

Then("movie langsung hilang dari halaman favorite list", () => {
  HapusMovieFavoritPage.validateMovieRemoved("Michael");
});

// ─────────────────────────────────────────
// Scenario 2: User menghapus movie dari halaman movie list
// ─────────────────────────────────────────
When("user menghapus movie dari halaman movie list", () => {
  TambahFavoritPage.clickOptionMovie("Michael");
  TambahFavoritPage.clickAddToFavoriteList();
});

Then("status favorite movie berubah menjadi tidak aktif", () => {
  HapusMovieFavoritPage.validateDeleteFromFavoriteList("removed");
});

// ─────────────────────────────────────────
// Scenario 3: User menghapus movie dari halaman detail movie
// ─────────────────────────────────────────
When("user menghapus movie dari favorite di halaman detail movie", () => {
  TambahFavoritPage.clickAddToFavoriteDetail();
});

Then("status favorite movie berubah menjadi tidak aktif di detail movie", () => {
  HapusMovieFavoritPage.validateDeleteFromDetailMovie();
});
