import * as chai from 'chai';
import { Given, Then, When } from '@cucumber/cucumber';
import { BasePage } from '../pages/common/BasePage';
import { HomePage } from '../pages/register-users/home-page';
import { RegisterUsersHelper } from '../helpers/RegisterUsersHelper';
import { RegistrationPage } from '../pages/register-users/registration-page';
import { User } from '../dtos/User';
import chaiAsPromised from 'chai-as-promised';
chai.use( chaiAsPromised );
const expect = chai.expect;
let registeredUsers: boolean[];
let usersList: User[];

Given( 'I navigate to the page {string}', function( url: string ): void {
  new BasePage().navigateToUrl( url );
} );

When(
  'I get the data from the excel file',
  async (): Promise<void> => {
    usersList = await new RegisterUsersHelper().getUserData();
  },
);

When( 'I register users with the data of the excel file', (): void => {
  registeredUsers = [];
  for ( const user of usersList ) {
    new HomePage().clickOnRegisterButton();
    const result = new RegistrationPage().registerUsers( user );
    registeredUsers.push( result );
  }
} );

Then( 'The users are created correctly', (): void => {
  registeredUsers.every( ( i: boolean ) => expect( i ).to.be.true );
} );
