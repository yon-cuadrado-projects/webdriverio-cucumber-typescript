class CustomCommands {
  public constructor() { }

  public createCutomCommands (): void {
    browser.addCommand( 'waitAndClick', function ( this: WebdriverIO.Element ) {
      // `this` is return value of $(selector)
      this.waitForDisplayed();
      this.click();
    }, true );

    browser.addCommand( 'waitForClickable', function ( this: WebdriverIO.Element ,ms = 5 ): boolean | void {

      return this.waitForDisplayed( { timeout: <number>ms } );
      // Return browser.waitForDisplayed(this.element().selector,ms) && browser.waitForEnabled(this.element().selector,ms);
    }, true );

    browser.addCommand( 'waitForNotVisible', function ( this: WebdriverIO.Element, ms = 0 ): boolean | void {
      return this.waitForDisplayed( { reverse: true, timeout: <number>ms } );
    }, true );

    browser.addCommand( 'waitUntilIsEnabled', function ( this: WebdriverIO.Element, ms = 0 ): boolean | void {
      return this.waitForDisplayed( { reverse: false, timeout: <number>ms } );
    }, true );

    browser.addCommand( 'waitForNotExist', function ( this: WebdriverIO.Element, ms = 0 ): boolean | void {
      return this.waitForExist( { reverse: false, timeout: <number>ms } );
    }, true );

    browser.addCommand( 'getRandomInt', ( min: number, max: number ) => Math.floor( Math.random() * ( max - min + 1 ) ) + min );

    browser.addCommand( 'hoverAndClick', function ( this: WebdriverIO.Element ): void {
      const location = this.getLocation();
      browser.performActions( [
        {
          actions: [
            { duration: 0, type: 'pointerMove', x: parseInt( location.x.toString(), 10 ), y: location.y },
            { button: 0, type: 'pointerDown' },
            { duration: 500, type: 'pause' },
            { button: 0, type: 'pointerUp' },
          ],
          id: 'pointer1',
          parameters: {
            pointerType: 'mouse',
          },
          type: 'pointer',
        },
      ] );
    },
    true );
  }
}

export { CustomCommands };
