import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../pages/loginPage";

Given("user membuka halaman utama website TMDB", () => {
  loginPage.visitTMDB();
});

Given("user belum login", () => {
  // Start from homepage as an unauthenticated user.
  loginPage.visitTMDB();
});

Given("user sudah login", () => {
  loginPage.visitTMDB();
  loginPage.openTMDBLogin();
  loginPage.inputUsername("rifkiandre");
  loginPage.inputPassword("12343");
  loginPage.clickLogin();
  loginPage.validateSuccess();
});

Given("user login dengan akun tanpa data favorite", () => {
  loginPage.visitTMDB();
  loginPage.openTMDBLogin();
  loginPage.inputUsername("rifkiasoy");
  loginPage.inputPassword("12343");
  loginPage.clickLogin();
});

// When("user membuka halaman login TMDB", () => {
//   loginPage.openTMDBLogin();
// });

// // Given("user membuka halaman login saucedemo", () => {
// //   loginPage.visitSaucedemo();
// // });

// When("user mengisi username {string}", (username) => {
//   loginPage.inputUsername(username);
// });

// When("user mengisi password {string}", (password) => {
//   loginPage.inputPassword(password);
// });

// When("user klik tombol login", () => {
//   loginPage.clickLogin();
// });

// Then("user berhasil masuk ke dashboard", () => {
//   loginPage.validateSuccess();
// });

// // Then("user melihat pesan error", () => {
// //   loginPage.validateError();
// // });

// Then("user berhasil melihat pesan error", () => {
//   loginPage.validateError();
// });
