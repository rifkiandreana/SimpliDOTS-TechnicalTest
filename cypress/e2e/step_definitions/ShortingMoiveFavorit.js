import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ShortingMoiveFavoritPage from "../pages/ShortingMoiveFavoritPage";
import MelihatMoviewFavoritPage from "../pages/MelihatMoviewFavoritPage";

// ─────────────────────────────────────────
// Scenario 1: User dapat mengurutkan favorite movie berdasarkan popularity
// ─────────────────────────────────────────
When("user memilih sorting berdasarkan popularity", () => {
  ShortingMoiveFavoritPage.selectSortByPopularity();
});

Then("sistem menampilkan daftar favorite movie yang diurutkan berdasarkan popularity", () => {
  MelihatMoviewFavoritPage.validateFirstMovie("Swapped");
  ShortingMoiveFavoritPage.verifyUrlContains("popularity", "desc");
});

// ─────────────────────────────────────────
// Scenario 2: User dapat mengurutkan favorite movie berdasarkan release date
// ─────────────────────────────────────────
When("user memilih sorting berdasarkan release date", () => {
  ShortingMoiveFavoritPage.selectSortByReleaseDate();
});
Then("sistem menampilkan daftar favorite movie yang diurutkan berdasarkan release date", () => {
  MelihatMoviewFavoritPage.validateFirstMovie("Swapped");
  ShortingMoiveFavoritPage.verifyUrlContains("release_date", "desc");
});

// ─────────────────────────────────────────
// Scenario 3: Preferensi sorting bedasarkan popularity tersimpan setelah user login kembali
// ─────────────────────────────────────────
When("user logout akun", () => {
  ShortingMoiveFavoritPage.clickProfile();
  ShortingMoiveFavoritPage.clickMenuProfile("Logout");
});
