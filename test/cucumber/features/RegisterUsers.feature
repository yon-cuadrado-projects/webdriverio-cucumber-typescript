Feature: Create users in the website http://newtours.demoaut.com/index.php
	As an app I want to register users with an excel file

@Register_Users
Scenario: Register users with data from Excel File
	Given I navigate to the page 'RegistrationUsersUrl'
	When I get the data from the excel file
	And I register users with the data of the excel file "TestData"
	Then The users are created correctly
