
class CustomCommands{
    constructor () {

    }

    createCutomCommands(){
        browser.addCommand(
            'waitForClickable',
            function(ms = null) {
                return this.waitForDisplayed(ms);
                // return browser.waitForDisplayed(this.element().selector,ms) && browser.waitForEnabled(this.element().selector,ms);
            },
            true
        );
    
        browser.addCommand(
            'waitForNotVisible',
            function(ms = null) {
                return this.waitForDisplayed(ms, true);
            },
            true
        );
    
        browser.addCommand(
            'waitUntilIsEnabled',
            function(ms = null) {
                return this.waitForDisplayed(ms, false);
            },
            true
        );
    
    
        browser.addCommand(
            'waitForNotExist',
            function(ms = null) {
                return this.waitForExist(ms, true);
            },
            true
        );
    
        browser.addCommand('getRandomInt', function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        });
    
        browser.addCommand(
            'hoverAndClick',
            function() {
                var location = this.getLocation();
                browser.performActions([
                    {
                        type: 'pointer',
                        id: 'pointer1',
                        parameters: {
                            pointerType: 'mouse'
                        },
                        actions: [
                            {"type": "pointerMove", "duration": 0, "x": parseInt(location.x), "y": location.y},
                            {"type": "pointerDown", "button": 0},
                            {"type": "pause", "duration": 500},
                            {"type": "pointerUp", "button": 0}
                        ]
                    }
                ]);
            },
            true
        );
    }
}

export { CustomCommands };