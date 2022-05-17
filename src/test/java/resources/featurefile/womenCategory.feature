Feature: Women Category Page Test
  As user I want to navigate to Women category page & add product to the cart

  @Sanity @Smoke @Regression
  Scenario: Verify User Should Navigate To Women Category Page Successfully
    When    I am on homepage
    And     I select tab "Women"
    Then    I can navigate to Women Category Page Successfully

  @Smoke @Regression
  Scenario Outline: Verify User Should Add Product To The Cart Successfully
    When    I am on homepage
    And     I select tab "Women"
    And     I select product "<product>"
    And     I add quantity "<qty>"
    And     I select size "<size>"
    And     I select colour "<colour>"
    And     I click on add to cart button
    Then    I can add products to the cart successfully
    Examples:
      |product                               | qty | size | colour |
      |Blouse                                | 2   | M    | White  |
      |Printed Dress                         | 3   | L    | Orange |
      |Printed Chiffon Dress                 | 4   | S    | Green  |
      |Printed Summer Dress                  | 2   | M    | Blue   |


