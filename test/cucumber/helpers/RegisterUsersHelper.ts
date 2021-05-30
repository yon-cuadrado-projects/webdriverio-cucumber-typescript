import { ExcelFileHelper } from '../helpers/ExcelFileHelper';
import { User } from '../dtos/User';
import path from 'path';

export class RegisterUsersHelper {
  public constructor() {}

  public async getUserData(): Promise<User[]> {
    const absoluteFileNameAndPath = path.resolve( process.cwd(), browser.params.files.excelFileData );
    const usersData: User[] = [];
    const excelFileHelper = await new ExcelFileHelper(
      absoluteFileNameAndPath,
      browser.params.excel.excelSheet,
    ).init();

    const rowCount = ( excelFileHelper.getWorkSheetRowCount( browser.params.excel.excelSheet ) ) - 1;
    const excelColumns = browser.params.excel.excelColumns;
    for ( let rowIndex = 2; rowIndex <= rowCount; rowIndex++ ) {
      const user: User = new User();
      user.FirstName = excelFileHelper.getCellText( `${excelColumns.UsersDataSheetUserNameColumn}${rowIndex}` );
      user.LastName = excelFileHelper.getCellText( `${excelColumns.UserDataSheetLastNameColumn}${rowIndex}` );
      user.Phone = excelFileHelper.getCellText( `${excelColumns.UserDataSheetPhoneColumn}${rowIndex}` );
      user.Email = excelFileHelper.getCellText( `${excelColumns.UserDataSheetEmailColumn}${rowIndex}` );
      user.Address1 = excelFileHelper.getCellText( `${excelColumns.UserDataSheetAddress1Column}${rowIndex}` );
      user.Address2 = excelFileHelper.getCellText( `${excelColumns.UserDataSheetAddress2Column}${rowIndex}` );
      user.City = excelFileHelper.getCellText( `${excelColumns.UserDataSheetCityColumn}${rowIndex}` );
      user.StateProvince = excelFileHelper.getCellText( `${excelColumns.UserDataSheetStateProvince}${rowIndex}` );
      user.PostalCode = excelFileHelper.getCellText( `${excelColumns.UserDataSheetPostalCode}${rowIndex}` );
      user.Country = excelFileHelper.getCellText( `${excelColumns.UserDataSheetCountry}${rowIndex}` );
      user.UserName = excelFileHelper.getCellText( `${excelColumns.UsersDataSheetUserNameColumn}${rowIndex}` );
      user.Password = excelFileHelper.getCellText( `${excelColumns.UserDataSheetUserPasswordColumn}${rowIndex}` );
      user.ConfirmPassword = excelFileHelper.getCellText( `${excelColumns.UserDataSheetUserPasswordColumn}${rowIndex}` );
      usersData.push( user );
    }

    return usersData;
  }
}
