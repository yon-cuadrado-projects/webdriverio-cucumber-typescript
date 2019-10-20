
import { BasePage } from '../page-objects/BasePage';
import { HomePage } from '../page-objects/HomePage';
import { RegistrationPage } from '../page-objects/RegistrationPage';

var RegisterUsersHelper = require('../helpers/RegisterUsersHelper');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var registeredUsers = [];
var { Given, Then, When } = require('cucumber');
var usersList = [];

Given('I navigate to the page {string}', function (url: string) {
    new BasePage().navigateToUrl(url);
});

When('I get the data from the excel file {string}', async function (excelFile: string) {
    usersList = await new RegisterUsersHelper().getUserData();
});

When('I register users with the data of the excel file {string}', function (excelFile: string) {
    for (const user of usersList) {
        new HomePage().clickOnRegisterButton();
        var result = new RegistrationPage().registerUsers(user);
        registeredUsers.push(result);
    }
});

Then('The users are created correctly', function () {
    registeredUsers.every(i => expect(i).to.be.true);
});
