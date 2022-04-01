
export const configurationParameters =
{
  urls: {
    basicAuth: 'http://the-internet.herokuapp.com/basic_auth',
    registerUsers: 'http://newtours.demoaut.com/index.php',
    checkboxesPage: 'http://automationpractice.com/index.php?id_category=3&controller=category'
  },
  excel: {
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
  },
  files: {
    excelFileData: 'test/cucumber/testData/TestData.xlsx'
  }
};

export interface ConfigurationParameters {
  urls?: {
    loginUrl: string;
    registerUsers: string;
  };
  excel?: {
    excelColumns: {
      UsersDataSheetUserNameColumn: string;
      UserDataSheetUserPasswordColumn: string;
      UserDataSheetFirstNameColumn: string;
      UserDataSheetLastNameColumn: string;
      UserDataSheetPhoneColumn: string;
      UserDataSheetEmailColumn: string;
      UserDataSheetAddress1Column: string;
      UserDataSheetAddress2Column: string;
      UserDataSheetCityColumn: string;
      UserDataSheetStateProvince: string;
      UserDataSheetPostalCode: string;
      UserDataSheetCountry: string;
      UserDataSheetName: string;
    };
    excelSheet: string;
  };
  files?: {
    excelFileData: string;
  };
}
