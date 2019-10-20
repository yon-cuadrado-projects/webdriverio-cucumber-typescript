// import { Interface } from "readline";

// import * as params from '../configuration/params';
// import  {config} from '../configuration/params.js'

declare module WebdriverIO {
    // adding command to `browser`
    interface Browser {
        
        browserCustomCommand: (arg: string) => void
        config: Params;
    }

    interface Element {
        // don't forget to wrap return values with Promise
        hoverAndClick: () => void
        WaitUntilCheckIsEnabled(result: boolean, timeout: number): () => void
        GetWebElementLineNumbers: () => void
        waitUntilIsEnabled: (timeout: number) => boolean
    }

    interface Config{
        params?: Params
        urls?: Urls
        }
    }
