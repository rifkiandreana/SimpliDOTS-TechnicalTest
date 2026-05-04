import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TambahFavoritPage from "../pages/TambahFavoritPage";

// ─────────────────────────────────────────
// Scenario 1: Favorite dari Movie Listing
// ─────────────────────────────────────────
When("user membuka halaman movie popular", () => {
  TambahFavoritPage.clickMovie();
  TambahFavoritPage.clickMoviePopular();
});

When("user menandai movie sebagai favorite", () => {
  TambahFavoritPage.clickOptionMovie("Michael");
  TambahFavoritPage.clickAddToFavoriteList();
});

Then("sistem menampilkan indikator bahwa movie sudah di favorite", () => {
  TambahFavoritPage.ValidateAddToFavoriteList();
});

// ─────────────────────────────────────────
// Scenario 2: Favorite dari Detail Movie
// ─────────────────────────────────────────
When("user menandai movie sebagai favorite dari detail", () => {
  TambahFavoritPage.clickDetailMovie("Michael");
  TambahFavoritPage.clickAddToFavoriteDetail(); //Klik untuk mengaktifkan tombol favorite
  TambahFavoritPage.clickAddToFavoriteDetail(); //Klik kedua untuk menandai sebagai favorite setelah tombol aktif
});

Then("sistem menampilkan indikator bahwa movie sudah di favorite dari detail", () => {
  TambahFavoritPage.ValidateAddToFavoriteDetail();
});

// ─────────────────────────────────────────
// Scenario 3: Favorite Tanpa Login
// ─────────────────────────────────────────
When("user mencoba menandai movie sebagai favorite tanpa login", () => {
  TambahFavoritPage.clickDetailMovie("Michael");
  TambahFavoritPage.clickAddToFavoriteDetail();
});

Then("sistem meminta user untuk login terlebih dahulu", () => {
  TambahFavoritPage.validateAddToFavoriteNotLogin();
});
