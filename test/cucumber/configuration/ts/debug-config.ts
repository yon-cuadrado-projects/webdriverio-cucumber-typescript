import { config } from './baseConfig';

config.execArgv = ["--inspect-brk=127.0.0.1:5859"];

config.params.urls = {
    loginUrl: 'https://www.idealista.com/en/',
    registerUsers: 'http://newtours.demoaut.com/index.php'
  };
//   config.params.excel = {
//     excelColumns: {
//         UsersDataSheetUserNameColumn: 'A',
//         UserDataSheetUserPasswordColumn: 'B',
//         UserDataSheetFirstNameColumn: 'C',
//         UserDataSheetLastNameColumn: 'D',
//         UserDataSheetPhoneColumn: 'E',
//         UserDataSheetEmailColumn: 'F',
//         UserDataSheetAddress1Column: 'G',
//         UserDataSheetAddress2Column: 'H',
//         UserDataSheetCityColumn: 'I',
//         UserDataSheetStateProvince: 'J',
//         UserDataSheetPostalCode: 'K',
//         UserDataSheetCountry: 'L',
//         UserDataSheetName: 'UsersData'
//     },
//     excelSheet: 'UsersData'
//   };
//   config.params.files = {
//     excelFileData: 'test/cucumber/testData/TestData.xlsx'
//   };
  
// config.services = ['selenium-standalone'];
// config.seleniumLogs = 'logs';
// // config.seleniumInstallArgs.drivers = {
// //   "chrome": {
// //     version: '77.0.3865.40',
// //     arch:  "x64",
// //     baseURL: ""
// //   }
// // };
// config.seleniumArgs.drivers = {
//   "chrome":{
//     version: '77.0.3865.40',
//     arch:  "x64",
//     baseURL: ""
//   }
// };

  export { config }
  