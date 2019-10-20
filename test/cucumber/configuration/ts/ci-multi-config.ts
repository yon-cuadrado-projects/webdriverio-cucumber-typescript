import { config } from './baseConfig';

config.maxInstances = 2
config.capabilities = [
  {
      browserName: 'chrome'
  },

  {
    browserName: 'firefox'
}
];

config.params.urls = {
  loginUrl: 'https://www.idealista.com/en/',
  registerUsers: 'http://newtours.demoaut.com/index.php'
};
config.params.excel = {
  excelColumns: {
      UsersDataSheetUserNameColumn: 'A',
      UserDataSheetUserPasswordColumn: 'B',
      UserDataSheetFirstNameColumn: 'C',
      UserDataSheetLastNameColumn: 'D',
      UserDataSheetPhoneColumn: 'E',
      UserDataSheetEmailColumn: 'F',
      UserDataSheetAddress1Column: 'G',
      UserDataSheetAddress2Column: 'H',
      UserDataSheetCityColumn: 'I',
      UserDataSheetStateProvince: 'J',
      UserDataSheetPostalCode: 'K',
      UserDataSheetCountry: 'L',
      UserDataSheetName: 'UsersData'
  },
  excelSheet: 'UsersData'
};
config.params.files = {
  excelFileData: 'test/cucumber/testData/TestData.xlsx'
};

export { config }
