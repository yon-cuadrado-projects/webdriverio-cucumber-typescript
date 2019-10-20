import { config } from './baseConfig';
config.execArgv = ["--inspect-brk=127.0.0.1:5859"];
// config.services = ['selenium-standalone'];
// config.seleniumLogs = 'logs';
// config.seleniumInstallArgs.drivers = {
//   "chrome": {
//     version: '77.0.3865.40',
//     arch:  "x64",
//     baseURL: ""
//   }
// };
// config.seleniumArgs.drivers = {
//   "chrome":{
//     version: '77.0.3865.40',
//     arch:  "x64",
//     baseURL: ""
//   }
// };

export { config }
