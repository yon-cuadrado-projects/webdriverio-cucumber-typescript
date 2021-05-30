Feature: actions in webpage
      As a product tester
      I want to check several actions in a webpage

      Scenario Outline: Activate checkboxes
            Given The user navigates to the page 'CheckboxesPage'
            When The user clicks on the checkbox '<checkbox>' of the 'CheckboxesPage' page
            Then The page displays the checkbox '<checkbox>' '<status>' of the 'CheckboxesPage' page
            Examples:
                  | checkbox     | status      |
                  | In stock (7) | activated   |
                  | M (7)        | activated   |

      Scenario: Search element
            Given The user navigates to the page 'CheckboxesPage'
            When The user types 'blouse' in the searchTextbox of the 'CheckboxesPage'
            And The user clicks on the 'magnifier glass' button
            Then The application displays the title 'SEARCH "BLOUSE' in the search results
            