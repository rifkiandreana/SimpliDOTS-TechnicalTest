Feature: Remove Movie from Favorite
  @automated
  Scenario: User menghapus movie dari halaman favorite list
    Given user sudah login
    When user membuka halaman favorite movie
    And user menghapus movie dari favorite list
    Then movie langsung hilang dari halaman favorite list

  @automated
  Scenario: User menghapus movie dari halaman movie list
    Given user sudah login
    When user membuka halaman movie popular
    And user menandai movie sebagai favorite
    And user menghapus movie dari halaman movie list
    Then status favorite movie berubah menjadi tidak aktif

  @automated
  Scenario: User menghapus movie dari halaman detail movie
    Given user sudah login
    When user membuka halaman movie popular
    When user menandai movie sebagai favorite dari detail
    And user menghapus movie dari favorite di halaman detail movie
    Then status favorite movie berubah menjadi tidak aktif di detail movie

  
  Scenario: Status favorite movie terupdate di seluruh halaman
    Given user sudah login
    And user memiliki movie yang sudah difavoritkan
    When user menghapus movie dari favorite
    Then status favorite movie berubah pada seluruh halaman aplikasi

  Scenario: Movie langsung hilang setelah dihapus dari favorite list
    Given user sudah login
    And user memiliki beberapa movie favorite
    When user menghapus salah satu movie dari favorite
    Then movie tersebut tidak muncul lagi di favorite list