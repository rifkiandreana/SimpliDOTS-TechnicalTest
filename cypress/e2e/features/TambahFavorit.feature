Feature: Mark as Favorite

  @automated
  Scenario: User menandai movie sebagai favorite dari movie listing
    Given user sudah login
    When user membuka halaman movie popular
    And user menandai movie sebagai favorite
    Then sistem menampilkan indikator bahwa movie sudah di favorite

  @automated
  Scenario: User menandai movie sebagai favorite dari detail movie
    Given user sudah login
    When user membuka halaman movie popular
    And user menandai movie sebagai favorite dari detail
    Then sistem menampilkan indikator bahwa movie sudah di favorite dari detail

  @automated
  Scenario: User belum login mencoba menandai movie sebagai favorite
    Given user belum login
    When user mencoba menandai movie sebagai favorite tanpa login
    Then sistem meminta user untuk login terlebih dahulu


   


 