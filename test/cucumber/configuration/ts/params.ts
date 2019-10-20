class Params {
        urls?: {
            loginUrl: string
            registerUsers: string
        }
        excel?: {
            excelColumns: {
                UsersDataSheetUserNameColumn: string,
                UserDataSheetUserPasswordColumn: string,
                UserDataSheetFirstNameColumn: string,
                UserDataSheetLastNameColumn: string,
                UserDataSheetPhoneColumn: string,
                UserDataSheetEmailColumn: string,
                UserDataSheetAddress1Column: string,
                UserDataSheetAddress2Column: string,
                UserDataSheetCityColumn: string,
                UserDataSheetStateProvince: string,
                UserDataSheetPostalCode: string,
                UserDataSheetCountry: string,
                UserDataSheetName: string
            }
            excelSheet: string
        }
        files?: {
            excelFileData: string
        }
}
