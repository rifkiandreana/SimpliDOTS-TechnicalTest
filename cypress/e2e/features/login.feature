Feature: Login TMDB

  Scenario: Login berhasil dengan user valid
    Given user membuka halaman utama website TMDB
    When user membuka halaman login TMDB
    And user mengisi username "rifkiandre"
    And user mengisi password "12343"
    And user klik tombol login
    Then user berhasil masuk ke dashboard

  Scenario: Login gagal dengan user tidak valid
    Given user membuka halaman utama website TMDB
    When user membuka halaman login TMDB
    And user mengisi username "rifkiandre"
    And user mengisi password "123434333"
    And user klik tombol login
    Then user berhasil melihat pesan error

