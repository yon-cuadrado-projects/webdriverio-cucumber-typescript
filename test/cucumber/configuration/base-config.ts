import 'reflect-metadata';
import CucumberJsJsonReporter from 'wdio-cucumberjs-json-reporter';
import { CustomCommands } from '../custom-commands/custom-commands';
import { registerPagesInContainer } from '../container/container';
import {generateReport} from 'cucumber-html-report-generator'
import path from 'path';

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
      'cucumberjs-json',
      {
        jsonFolder: '.tmp/cucumberjs-json/',
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
    CucumberJsJsonReporter.attach( await browser.takeScreenshot(), 'image/png' );
  },

  after: async (): Promise<void> => {
      await generateReport.generate({
            jsonDir: `${path.resolve( './' )}/.tmp`,
            openReportInBrowser: true
      })
  },

  services: [
    [
      'selenium-standalone',
      {
        logPath: './.tmp/',
        installArgs: {
          version: '4.0.0-beta-4',
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
              baseURL: 'http://selenium-release.storage.googleapis.com/',
            },
          },
        },
        args: {
          version: '4.0.0-beta-4',
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
              baseURL: 'https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver',
            },
          },
        },
      } ] ],
};

export { config };
