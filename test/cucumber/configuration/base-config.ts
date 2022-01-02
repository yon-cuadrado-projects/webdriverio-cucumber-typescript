import 'reflect-metadata';
import { CustomCommands } from '../custom-commands/custom-commands';
import { registerPagesInContainer } from '../container/container';
import { generateReport } from 'cucumber-html-report-generator';
import CucumberHtmlReporter from 'wdio-reporter-html';
import path from 'path';
const rootPath = path.join( path.dirname( require.resolve( `./base-config.ts` ) ), '../../../' );

const config: WebdriverIO.Config = {
  autoCompileOpts: {
    autoCompile: true,
    // see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
    // for all available options
    tsNodeOpts: {
      transpileOnly: true,
      project: 'tsconfig.json'
    },
    // tsConfigPathsOpts:{
    //   baseUrl: './',
    //   paths: { '@models': [ 'src/lib/models/models.ts' ], '@common-functions': [ 'src/lib/common-functions/common-functions.ts' ] }
    // }
  },
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // From which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // Directory is where your package.json resides, so `wdio` will be called from there.
  //
  maxInstances: 1,
  capabilities: [],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // By default WebdriverIO commands are executed in a synchronous way using
  // The wdio-sync package. If you still want to run your tests in an async way
  // E.g. using promises you can set the sync option to false.
  // Sync: true,

  logLevel: 'error',
  bail: 0,
  waitforTimeout: 15000,
  waitforInterval: 1000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'cucumber',
  reporters: [
    [
      CucumberHtmlReporter,
      {
        outputDir: path.join(rootPath, '.tmp/cucumberjs-json/'),
        language: 'en',
      },
    ],
    'dot',
    'spec',
  ],

  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // It and to build services around it. You can either apply a single function or an array of
  // Methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // Resolved to continue.

  before: async (): Promise<void> => {
    try {
      await browser.maximizeWindow();
    } catch ( error: unknown ) {
      console.log( ( <Error>error ).message );
    }
    new CustomCommands().createCutomCommands();
    registerPagesInContainer();
  },

  afterStep: async ( ): Promise<void> => {
      CucumberHtmlReporter.attach( await browser.takeScreenshot(), 'image/png' );
  },

  onComplete: async (): Promise<void> => {     
      await generateReport.generate({
            jsonDir: path.join(rootPath, '/.tmp/cucumberjs-json/'),
            openReportInBrowser: true,
            mongooseServerUrl:"http://localhost:3000",
            saveReportInMongoDb: true,
            saveEnrichedJSON: true
      })
  },

  services: [
    [
      'selenium-standalone',
      {
        logPath: './.tmp/',
      //   skipSeleniumInstall: true,
        installArgs: {
          version: '4.1.0',
          
          drivers: {
            chrome: {
              version: 'latest',
              arch: process.arch,
              baseURL: 'https://chromedriver.storage.googleapis.com',
            },
            firefox: {
              version: 'latest',
              arch: process.arch,
              baseURL: 'https://github.com/mozilla/geckodriver/releases/download',
            },
            chromiumedge: {
              version: 'latest',
              arch: process.arch,
              baseURL: 'https://msedgedriver.azureedge.net/',
            },
          },
        },
        args: {
          version: '4.1.0',
          drivers: {
            chrome: {
              version: 'latest',
              arch: process.arch,
              baseURL: 'https://chromedriver.storage.googleapis.com',
            },
            firefox: {
              version: 'latest',
              arch: process.arch,
              baseURL: 'https://github.com/mozilla/geckodriver/releases/download',
            },
            chromiumedge: {
              version: 'latest',
              arch: process.arch,
              baseURL: 'https://msedgedriver.azureedge.net/',
            },
          },
        },
      } ] ],
};

export { config };
