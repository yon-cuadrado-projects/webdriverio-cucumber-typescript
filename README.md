This project is an example of the use of the reporter: https://github.com/yon-cuadrado-projects/cucumber-html-report-generator with webdriverio.

## Configuration
There are two scripts that allow to execute a test with webdriverio and to view the html report with the results of the test when it finishes.

1. test:local:chrome:1Test
2. test:local:chrome:1TestwithServer

The difference between them is that the scond one executes the test and then it stores the result ( json file ) in a mongodb database. In order to be able to run this second script correctly, mongodb has to be started locally and the script startServer of the package cucumber-html-reports-server has to be installed.