import type CommandLineParameters from '../models/command-line-parameters';
import { config } from './base-config';
import { configurationParameters } from './configuration-data';
import yargs from 'yargs';
import path from 'path';
import { generateReport } from 'cucumber-html-report-generator';
import CucumberHtmlReporter from 'wdio-reporter-html';

const rootPath = path.join( path.dirname( require.resolve( `./base-config.ts` ) ), '../../../' );

const argv: CommandLineParameters = yargs.options( {
  browser: { type: 'string', demandOption: false },
  debug: { type: 'boolean', default: false },
  maxInstances: { type: 'number', demandOption: false },
  storeInDatabase: { type: 'boolean', demandOption: false }
} ).parseSync();

config.capabilities = [
  {
    platform: 'ANY',
  },
];

config.reporters = [
      [
        CucumberHtmlReporter,
        {
          outputDir: path.join(rootPath, '.tmp/cucumberjs-json/'),
          language: 'en',
        },
      ],
      'dot',
      'spec',
    ];

config.cucumberOpts = {
//   snippetSyntax: '',
  require: [ './test/cucumber/steps/**/*.ts' ],
  backtrace: true,
  failFast: false,
  snippets: false,
  source: true,
  profile: [],
  strict: true,
  tagsInTitle: true,
  timeout: 500000,
  ignoreUndefinedDefinitions: false,
  failAmbiguousDefinitions: true
};

config.specs = [ 'test/e2e/features/*.feature' ];

if ( argv.debug ) {
  config.execArgv = [ '--inspect' ];
}

if ( argv.browser === 'chrome' ) {

  config.capabilities = [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        // To run chrome headless the following flags are required
        // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
        // Args: ['--headless', '--disable-gpu'],
        args: [ 'disable-infobars' ],
      },
    },
  ];
}

if ( argv.browser === 'firefox' ) {
  config.capabilities = [
    {
      // MaxInstances can get overwritten per capability. So if you have an in house Selenium
      // Grid with only 5 firefox instance available you can make sure that n ot more than
      // 5 instance gets started at a time.
      maxInstances: 5,
      browserName: 'firefox',
      specs: [ 'test/ffOnly/*' ],
      'moz:firefoxOptions': {
        // Flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
        // Args: ['-headless']
      },
      // If outputDir is provided WebdriverIO can capture driver session logs
      // It is possible to configure which logTypes to exclude.
      // ExcludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
      // ExcludeDriverLogs: ['bugreport', 'server'],
    },
  ];
}

if ( typeof argv.generateSteps !== 'undefined' ) {
  config.cucumberOpts = {
    snippets: false,
    ignoreUndefinedDefinitions: false,
    require: [ './test/cucumber/step-definitions/*.ts' ], // <string[]> (file/dir) require files before executing features
  };
}

if ( typeof argv.maxInstances !== 'undefined' ) {
  config.maxInstances = argv.maxInstances;
}

config.onComplete = async (): Promise<void> => {     
      await generateReport.generate({
            jsonDir: path.join(rootPath, '/.tmp/cucumberjs-json/'),
            openReportInBrowser: true,
            mongooseServerUrl:"http://localhost:3000",
            saveReportInMongoDb: argv.storeInDatabase ?? false,
            saveEnrichedJSON: true
      })
  }

config.params = configurationParameters ;

export { config };
