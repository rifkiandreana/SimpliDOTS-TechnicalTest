Feature: Sorting Favorite Movies

  @automated 
  Scenario: User dapat mengurutkan favorite movie berdasarkan popularity
    Given user sudah login
    When user membuka halaman favorite movie
    And user memilih sorting berdasarkan popularity
    Then sistem menampilkan daftar favorite movie yang diurutkan berdasarkan popularity

  @automated
  Scenario: User dapat mengurutkan favorite movie berdasarkan release date
    Given user sudah login
    When user membuka halaman favorite movie
    And user memilih sorting berdasarkan release date
    Then sistem menampilkan daftar favorite movie yang diurutkan berdasarkan release date

  @automated 
  Scenario: Preferensi sorting bedasarkan popularity tersimpan setelah user login kembali
    Given user sudah login
    When user memilih sorting berdasarkan popularity
    And user logout akun
    And user sudah login
    And user membuka halaman favorite movie
    Then sistem menampilkan daftar favorite movie yang diurutkan berdasarkan popularity

  @automated 
  Scenario: Preferensi sorting bedasarkan release date tersimpan setelah user login kembali
    Given user sudah login
    And user memilih sorting berdasarkan release date
    When user logout akun
    And user sudah login
    And user membuka halaman favorite movie
    Then sistem menampilkan daftar favorite movie yang diurutkan berdasarkan release date