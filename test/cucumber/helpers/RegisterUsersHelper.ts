import { ExcelFileHelper } from "./ExcelFileHelper";

var userDto = require('../dtos/User');
// var ExcelFileHelper = require('../helpers/ExcelFileHelper');
// import ExcelFileHelper from '../helpers/ExcelFileHelper';
var path = require('path');

class RegisterUsersHelper {
    constructor () {
    }

    async getUserData (userDataFile) {
        var absoluteFileNameAndPath = path.resolve(process.cwd(), browser.config.files.excelFileData);
        var excelFileHelper = await new ExcelFileHelper(absoluteFileNameAndPath, browser.config.excel.excelSheet).init();

        var usersData = [];
        var rowCount = await excelFileHelper.getWorkSheetRowCount(browser.config.excel.excelSheet) - 1;
        for (var rowIndex = 2; rowIndex <= rowCount; rowIndex++) {
            var user = new userDto();
            user.FirstName = await excelFileHelper.getCellText(browser.config.excel.excelColumns.UsersDataSheetUserNameColumn + rowIndex);
            user.LastName = await excelFileHelper.getCellText(browser.config.excel.excelColumns.UserDataSheetLastNameColumn + rowIndex);
            user.Phone = await excelFileHelper.getCellText(browser.config.excel.excelColumns.UserDataSheetPhoneColumn + rowIndex);
            user.Email = await excelFileHelper.getCellText(browser.config.excel.excelColumns.UserDataSheetEmailColumn + rowIndex);
            user.Address1 = await excelFileHelper.getCellText(browser.config.excel.excelColumns.UserDataSheetAddress1Column + rowIndex);
            user.Address2 = await excelFileHelper.getCellText(browser.config.excel.excelColumns.UserDataSheetAddress2Column + rowIndex);
            user.City = await excelFileHelper.getCellText(browser.config.excel.excelColumns.UserDataSheetCityColumn + rowIndex);
            user.StateProvince = await excelFileHelper.getCellText(browser.config.excel.excelColumns.UserDataSheetStateProvince + rowIndex);
            user.PostalCode = await excelFileHelper.getCellText(browser.config.excel.excelColumns.UserDataSheetPostalCode + rowIndex);
            user.Country = await excelFileHelper.getCellText(browser.config.excel.excelColumns.UserDataSheetCountry + rowIndex);
            user.UserName = await excelFileHelper.getCellText(browser.config.excel.excelColumns.UsersDataSheetUserNameColumn + rowIndex);
            user.Password = await excelFileHelper.getCellText(browser.config.excel.excelColumns.UserDataSheetUserPasswordColumn + rowIndex);
            user.ConfirmPassword = await excelFileHelper.getCellText(browser.config.excel.excelColumns.UserDataSheetUserPasswordColumn + rowIndex);
            usersData.push(user);
        }

        
        return usersData;
    }
}

module.exports = RegisterUsersHelper;
