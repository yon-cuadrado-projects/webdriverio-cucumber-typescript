import { Params } from '../configuration/ts/models/wddio-conf-additional-properties';

export {};
declare global {
  namespace WebdriverIO {
  // import( './ConfigurationData' ); // Don't delete this line.
  // import { User } from './user';
  // Adding command to `browser`

    // interface Options.WebdriverIO{
    //   Params: Params;
    // }
    interface Browser {
      browserCustomCommand: ( arg: string ) => void;
      config: Config;
      params: Params;
      destUrl: string;
      // options: {
      // };
    }

    interface Element {
    // Don't forget to wrap return values with Promise
      // waitForClickable: ( timeout: number ) => boolean;
      waitUntilIsEnabled: ( ms: number ) => boolean;
      // waitForDisplayed: ( timeout: number ) => boolean;
      GetWebElementLineNumbers: () => void;
      hoverAndClick: () => void;
      WaitUntilCheckIsEnabled( result: boolean, timeout: number ): () => void;
      getCheckboxStatus( checkboxLabel: string ): string;
      getCheckBox ( label: string ): WebdriverIO.Element;
      clickOnCheckbox( checkboxLabel: string, page: string ): void;
    }

    interface Config {
      params?: Params;
    }
  }
}
