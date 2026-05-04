Feature: View Favorite Movie List

  @automated
  Scenario: User berhasil mengakses halaman favorite movie
    Given user sudah login
    When user membuka halaman favorite movie
    Then sistem menampilkan halaman favorite movie

  @automated
  Scenario: Sistem menampilkan daftar movie yang difavoritkan
    Given user sudah login
    When user membuka halaman favorite movie
    Then sistem menampilkan daftar movie favorite user

  @automated
  Scenario: Movie terbaru muncul paling atas pada favorite list
    Given user sudah login
    When user membuka halaman favorite movie
    Then movie yang terakhir difavoritkan muncul di urutan paling atas

  @automated
  Scenario: User tidak memiliki movie favorite
    Given user login dengan akun tanpa data favorite
    And user membuka halaman favorite movie
    Then sistem menampilkan pesan bahwa favorite list kosong