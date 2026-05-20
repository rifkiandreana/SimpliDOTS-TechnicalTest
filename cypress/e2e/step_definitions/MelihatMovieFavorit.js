import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MelihatMoviewFavoritPage from "../pages/MelihatMoviewFavoritPage";

// ─────────────────────────────────────────
// Scenario 1: User berhasil mengakses halaman favorite movie
// ─────────────────────────────────────────
When("user membuka halaman favorite movie", () => {
  MelihatMoviewFavoritPage.clickMenu("Overview");
  MelihatMoviewFavoritPage.clickSubMenu("Favorite");
  MelihatMoviewFavoritPage.clickMenuItem("Movies");
});

Then("sistem menampilkan halaman favorite movie", () => {
  MelihatMoviewFavoritPage.validateHalamanFavorit();
});

// ─────────────────────────────────────────
// Scenario 2: Sistem menampilkan daftar movie yang difavoritkan
// ─────────────────────────────────────────
Then("sistem menampilkan daftar movie favorite user", () => {
  MelihatMoviewFavoritPage.validateMovieExists("Swapped");
  MelihatMoviewFavoritPage.validateMovieExists("Apex");
});

// ─────────────────────────────────────────
// Scenario 3: Movie terbaru muncul paling atas pada favorite list
// ─────────────────────────────────────────
Then("movie yang terakhir difavoritkan muncul di urutan paling atas", () => {
  MelihatMoviewFavoritPage.validateFirstMovie("Swapped");
});

// ─────────────────────────────────────────
// Scenario 4: User tidak memiliki movie favorite
// ─────────────────────────────────────────
Then("sistem menampilkan pesan bahwa favorite list kosong", () => {
  MelihatMoviewFavoritPage.validateEmptyFavoriteState();
});
