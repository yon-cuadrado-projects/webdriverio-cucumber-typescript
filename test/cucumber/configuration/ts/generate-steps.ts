import { config } from './baseConfig';

config.cucumberOpts = {
    require: [
        './test/cucumber/step-definitions/*.js',
        './test/cucumber/helpers/*.js'
    ], // <string[]> (file/dir) require files before executing features
    backtrace: true, // <boolean> show full backtrace for errors
    dryRun: true, // <boolean> invoke formatters without executing steps
    failFast: true, // <boolean> abort the run on first failure
    format: ['snippets'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true, // <boolean> disable colors in formatter output
    snippets: false, // <boolean> hide step definition snippets for pending steps
    source: true, // <boolean> hide source uris
    profile: [], // <string[]> (name) specify the profile to use
    strict: false, // <boolean> fail if there are any undefined or pending steps
    timeout: 50000, // <number> timeout for step definitions
    ignoreUndefinedDefinitions: false // <boolean> Enable this config to treat undefined definitions as warnings.
};
export { config }