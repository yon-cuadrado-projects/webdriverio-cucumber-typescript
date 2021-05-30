import * as chai from 'chai';
import { Then, When } from '@cucumber/cucumber';
import { BasePage } from '../pages/common/BasePage';
const expect = chai.expect;

When( 'The user clicks on the checkbox {string} of the {string} page', function ( checkboxLabel: string, pageName: string ) {
  new BasePage().clickOnCheckbox( checkboxLabel , pageName );
} );

Then( 'The page displays the checkbox {string} {string} of the {string} page', function ( checkboxLabel: string, state: string, pageName: string ) {
  expect( new BasePage().getCheckboxStatus( checkboxLabel , pageName ) ).to.be.equal( state );
} );

When( 'The user types {string} in the searchTextbox of the {string} page', function( value: string ) {
  return true;
} );
