Feature: Login
    As a product tester
    I want to check the login functionality

    Scenario Outline: Login to page
        Given The user navigates to the page 'basic auth'
        When The user sets the user '<UserId>' in the 'basic auth' page
        And The user sets the password '<Password>' in the 'basic auth' page
        Then The message 'Congratulations! You must have the proper credentials.' appears
        Examples:
            | UserId        | Password          |
            | admin         | admin             |
            | incorrectUser | incorrectPassword |