Feature: The Lemanode homepage

  Scenario: Verify user able to access Lemonade account page from Renters
    Given user is in Lemonade homepage
    When user clicks on Renters link
    Then verify user is on Check our Price page
    When user clicks on Check Our Prices button
    Then user navigated to Account page

  Scenario: Verify user able to access Lemonade account page from Homeowners
    Given user is in Lemonade homepage
    When user clicks on Homeowners link
    Then verify user is on Check our Price page
    When user clicks on Check Our Prices button
    Then user navigated to Account page

  Scenario: Verify user able to access Lemonade account page from Car
    Given user is in Lemonade homepage
    When user clicks on Car link
    Then verify user is on Check our Price page
    When user clicks on Check Our Prices button
    Then user navigated to Account page

  Scenario: Verify user able to access Lemonade account page from Pet
    Given user is in Lemonade homepage
    When user clicks on Pet link
    Then verify user is on Check our Price page
    When user clicks on Check Our Prices button
    Then user navigated to Account page

  Scenario: Verify user able to access Lemonade account page from Life
    Given user is in Lemonade homepage
    When user clicks on Life link
    Then verify user is on Check our Price page
    When user clicks on Check Our Prices button
    Then user navigated to Account page
 