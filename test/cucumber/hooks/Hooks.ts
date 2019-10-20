const { BeforeAll, Before } = require('cucumber');
var { setDefaultTimeout } = require('cucumber');

Before(async function (scenario) {
    // new extensionsHelper(this.driver).initializeExtensions();
    setDefaultTimeout(30000);
});
