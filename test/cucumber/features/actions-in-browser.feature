Feature: actions in webpage
      As a product tester
      I want to check several actions in a webpage

      Scenario Outline: Activate checkboxes
            Given The user navigates to the page 'checkboxesPage'
            When The user clicks on the checkbox '<checkbox>' of the 'CheckboxesPage' page
            Then The page displays the checkbox '<checkbox>' '<status>' of the 'CheckboxesPage' page
            Examples:
                  | checkbox     | status      |
                  | In stock (7) | activated   |
                  | M (7)        | activated   |
            