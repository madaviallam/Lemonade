Feature: The Lemanode homepage

  Scenario Outline: Verify Price quote for Renters without lemanode account
    Given user is on Lemonade insurance homepage
    When user click on Check Our Prices button
    Then user navigated to Account page
    When user select Nope radio button
    When user clicks on Next button
    When user click on Renters checkbox
    When user clicks on Next button
     When user enters first name and last name 
     When user clicks on Lets Do This button
     When user enters Street address
    When user clicks on Next button
    When user selects <alaram> 
    When user clicks on Next button
    Then verify the text "Do you share your home with any of the following?"

    Examples:
    |alaram|
    |Fire Alaram |
    |Burglar Alaram |

