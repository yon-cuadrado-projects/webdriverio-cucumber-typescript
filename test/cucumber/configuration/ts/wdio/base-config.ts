import 'reflect-metadata';
import { CustomCommands } from '../../../custom-commands/custom-commands';
import Frameworks from '@wdio/types';
import { LoadContainer } from '../container/container';
import { messages } from 'cucumber-messages';
import path from 'path';
import Pickle = messages.Pickle;
import IPickle = messages.IPickle;
import IPickleStep = Pickle.IPickleStep;


// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-var-requires
const CucumberJsJsonReporter = require( 'wdio-cucumberjs-json-reporter' ).default;



const config: WebdriverIO.Config = {
  // autoCompileOpts: {
  //   autoCompile: true,
  //   // see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
  //   // for all available options
  //   tsNodeOpts: {
  //     transpileOnly: true,
  //     project: 'tsconfig.json'
  //   },
  //   // tsconfig-paths is only used if "tsConfigPathsOpts" are provided, if you
  //   // do please make sure "tsconfig-paths" is installed as dependency
  //   // tsConfigPathsOpts: {
  //   //   baseUrl: './'
  //   // }
  // },
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // From which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // Directory is where your package.json resides, so `wdio` will be called from there.
  //
  specs: ['test/cucumber/features/*.feature'],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // Time. Depending on the number of capabilities, WebdriverIO launches several test
  // Sessions. Within your capabilities you can overwrite the spec and exclude options in
  // Order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // Say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // Set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // Files and you set maxInstances to 10, all spec files will get tested at the same time
  // And 30 processes will get spawned. The property handles how many capabilities
  // From the same test should run tests.
  //

  maxInstances: 1,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //

  capabilities: [
    {
      browserName: 'chrome',
      platform: 'ANY',

      chromeOptions: {
        args: [
          // disable chrome's wakiness
          // 'no-sandbox',
          // '--disable-infobars',
          // '--disable-extensions'
        ],
      },

      // prefs: {
      // disable chrome's annoying password manager
      // 'profile.password_manager_enabled': false,
      // credentials_enable_service: false,
      // password_manager_enabled: false
      // },
    },
  ],
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

  //
  // Level of logging verbosity: silent | verbose | command | data | result | error
  logLevel: 'error',
  //
  // Enables colors for log output.
  // ColoredLogs: true,
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // Bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Saves a screenshot to a given path if a command fails.
  // ScreenshotPath: './report/allure-results',
  //
  // Set a base URL in order to shorten url command calls. If your url parameter starts
  // With "/", then the base url gets prepended.
  // baseUrl: 'http://automationpractice.com/',
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 15000,

  // Default interval for all waitForXXX commands.
  waitforInterval: 1000,
  //
  // Default timeout in milliseconds for request
  // If Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,
  //
  // Default request retries count
  connectionRetryCount: 3,

  // Make sure you have the wdio adapter package for the specific framework installed
  // Before running any tests.
  framework: 'cucumber',
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // See also: http://webdriver.io/guide/testrunner/reporters.html
  // Reporters: ['dot'],//
  // If you are using Cucumber you need to specify the location of your step definitions.
  reporters: [
    [
      'cucumberjs-json',
      {
        jsonFolder: '.tmp/cucumberjs-json/',
        language: 'en',
      },
    ],
    'dot',
    [
      'json',
      {
        outputDir: '.tmp/Results',
        outputFileFormat: ( opts: { cid: string; capabilities: string } ): string =>
          `results-${opts.cid}.${opts.capabilities}.json`,
      },
    ],
    'spec',
  ],
  // ReporterOptions: {
  //     OutputDir: './report/',
  //     Allure: {
  //         OutputDir: './report/allure-results',
  //         DisableWebdriverStepsReporting: false,
  //         DisableWebdriverScreenshotsReporting: true,
  //         UseCucumberStepReporter: true
  //     }
  // },
  cucumberOpts: {
    snippetSyntax: '',
    require: ['./test/cucumber/steps/*.ts'], // <string[]> (file/dir) require files before executing features
    backtrace: true, // <boolean> show full backtrace for errors
    // Compiler: ['js:babel-register'], // <string[]> ("extension:module") require files with the given
    failFast: false, // <boolean> abort the run on first failure
    // format: ['summary'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    snippets: false, // <boolean> hide step definition snippets for pending steps
    source: true, // <boolean> hide source uris
    profile: [], // <string[]> (name) specify the profile to use
    strict: false, // <boolean> fail if there are any undefined or pending steps
    tagsInTitle: true,
    // Tags: [], // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    timeout: 500000, // <number> timeout for step definitions
    ignoreUndefinedDefinitions: true, // <boolean> Enable this config to treat undefined definitions as warnings.
  },

  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // It and to build services around it. You can either apply a single function or an array of
  // Methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // Resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   *
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  // OnPrepare: function (config, capabilities) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   *
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // BeforeSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   *
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  before: (): void => {
    // NOTE: This calls below look to be broken.
    //       Leaving them in in case they get fixed.
    // Browser.windowHandleMaximize();
    // require( 'ts-node' ).register( { files: true } );
    try {
      browser.maximizeWindow();
    } catch ( e ) {}
    // Browser.timeouts('implicit', 1000);

    new CustomCommands().createCutomCommands();
    new LoadContainer();
  },
  /**
   * Hook that gets executed before the suite starts
   *
   * @param {Object} suite suite details
   */
  // BeforeSuite: function (suite) {
  // },
  /**
   * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
   * beforeEach in Mocha)
   */
  // BeforeHook: function () {
  // },
  /**
   * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
   * afterEach in Mocha)
   */
  // AfterHook: function () {
  // },
  /**
   * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   *
   * @param {Object} test test details
   */
  // BeforeTest: function (test) {
  // },
  /**
   * Runs before a WebdriverIO command gets executed.
   *
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // BeforeCommand: function (commandName, args) {
  // },
  /**
   * Runs after a WebdriverIO command gets executed
   *
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // AfterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   *
   * @param {Object} test test details
   */
  // AfterTest: function (test) {
  // },
  /**
   * Hook that gets executed after the suite has ended
   *
   * @param {Object} suite suite details
   */
  afterSuite: async (): Promise<void> => {
    // process.argv[2] = process.cwd() + '/.tmp/Results';
    // process.argv[3] = 'results-*';

    // mergeResults( process.cwd() + '/.tmp/Results', 'wdio-json-*' );
  },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   *
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // After (result:any, capabilities:any, specs:any) {
  // },

  /**
   * Gets executed right after terminating the webdriver session.
   *
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // AfterSession (config1: WebdriverIO.Config, capabilities: WebDriver.DesiredCapabilities, specs: string[]): void {
  // },

  /**
   * Gets executed after all workers got shut down and the process is about to exit. It is not
   * possible to defer the end of the process using a promise.
   *
   * @param {Object} exitCode 0 - success, 1 - fail
   */
  onComplete: async (): Promise<void> => {
    console.log( 'Test message' );
    process.argv[2] = process.cwd() + '/.tmp/Results';
    process.argv[3] = 'results-*';
    // console.log( 'baseConfig' + process.argv );
    // mergeResults( process.cwd() + '/.tmp/Results', 'wdio-json-*' );
    // await new GenerateReport().generate( {
    //   jsonDir: path.join( process.cwd(),'.tmp/cucumberjs-json' ),
    //   featuresFolder: path.join( process.cwd(),'test/cucumber/features/' )
    // } );
    console.log( 'report joined' );
  },

  afterStep: ( step: IPickleStep, scenario: IPickle, result: Frameworks.Frameworks.PickleResult ): void => {
    // If test fail save the screenshot.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    CucumberJsJsonReporter.attach( browser.takeScreenshot(), 'image/png' );
    // if ( typeof result.error != 'undefined' ) {
    //   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    //   // const screenshotLocation = process.cwd() + '/.tmp/screenshots/scenario- ' + <string>step?.step.scenario.name + ' step- ' + <string>step.step.text + '.png';
    //   // const screenshot = browser.saveScreenshot( screenshotLocation ); // Returns base64 string buffer
    //   // CucumberJsJsonReporter.attach( browser.takeScreenshot(), 'image/png' );
    //   // Reporter.createAttachment( 'screenshot', screenshot, 'image/png' );
    // }
  },
  services: [
    [
      'selenium-standalone',
      {
        logPath: './.tmp/selenium-logs',
        installArgs: {
          drivers: {
            chrome: {
              version: 'latest',
              arch: process.arch,
              baseURL: 'https://chromedriver.storage.googleapis.com',
            },
            firefox: {
              version: '0.28.0',
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
          version: '3.141.59',
          // baseURL: 'https://selenium-release.storage.googleapis.com',
          drivers: {
            chrome: {
              version: 'latest',
              arch: process.arch,
              baseURL: 'https://chromedriver.storage.googleapis.com',
            },
            firefox: {
              version: '0.28.0',
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
      }]],
};

export { config };

export interface parameter{
  error?: any;
  result?: any;
  passed: boolean;
  duration: number;
}
