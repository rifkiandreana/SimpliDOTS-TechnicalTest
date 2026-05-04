Feature: Ubah Bahasa
  
  Scenario: user ubah bahasa tanpa login
    Given user membuka halaman utama website TMDB
    When user klik ubah bahasa tanpa login
    When user klik pilih bahasa
    When user input pilih bahasa 'Afrika'
    When user pilih bahasa Afrika
    When user klik reload page
    Then halaman utama user menampilkan dengan bahasa Afrika

  Scenario: user ubah bahasa saat sudah login
    Given user sudah login dan membuka halaman utamanya
    When user klik ubah pilih bahasa
    When user klik pilih bahasa
    When user input pilih bahasa "Argentina"
    When user klik reload page
    Then halaman utama user menampilkan dengan bahasa Argentina

  Scenario: user ubah bahasa dengan yang bahasa yang tidak ada datanya
    Given user sudah login dan membuka halaman utamanya
    When user klik ubah pilih bahasa
    When user klik pilih bahasa
    When user input pilih bahasa "Argentina"
    Then pop-up menampilkan text "No data found"



