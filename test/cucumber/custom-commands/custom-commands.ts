class CustomCommands {
  public constructor() { }

  public createCutomCommands (): void {
    browser.addCommand( 'waitAndClick', function () {
      // `this` is return value of $(selector)
      this.waitForDisplayed();
      this.click();
    }, true );

    browser.addCommand( 'waitForClickable', function ( ms = 5 ): boolean {

      return this.waitForDisplayed( { timeout: <number>ms } );
      // Return browser.waitForDisplayed(this.element().selector,ms) && browser.waitForEnabled(this.element().selector,ms);
    }, true );

    browser.addCommand( 'waitForNotVisible', function ( ms = 0 ): boolean {
      return this.waitForDisplayed( { reverse: true, timeout: <number>ms } );
    }, true );

    browser.addCommand( 'waitUntilIsEnabled', function ( ms = 0 ): boolean {
      return this.waitForDisplayed( { reverse: false, timeout: <number>ms } );
    }, true );

    browser.addCommand( 'waitForNotExist', function ( ms = 0 ): boolean {
      return this.waitForExist( { reverse: false, timeout: <number>ms } );
    }, true );

    browser.addCommand( 'getRandomInt', ( min: number, max: number ) => Math.floor( Math.random() * ( max - min + 1 ) ) + min );

    browser.addCommand( 'hoverAndClick', function (): void {
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
