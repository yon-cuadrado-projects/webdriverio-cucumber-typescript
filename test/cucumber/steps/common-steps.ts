import { Given, Then, When } from '@cucumber/cucumber';
import { BasePage } from '../pages/common/BasePage';
import { CheckboxesPage } from '../pages/checkboxes/checkboxes-page';
import { IBasePage } from '../models/base-page';
import { container } from 'tsyringe';
import { expect } from 'chai';

Given( /^The user navigates to the page '(.*)'$/, ( url: string ) => {
  new BasePage().navigateToUrl( url );
} );

When( /^The user clicks on the checkbox '(.*)' of the '(.*)' page$/, ( checkboxLabel: string, pageName: string ) =>{
  const pageObject: BasePage = container.resolve<CheckboxesPage>( pageName );
  pageObject.clickOnCheckbox( checkboxLabel );
} );

Then( /^The page displays the checkbox '(.*)' '(.*)' of the '(.*)' page$/, ( checkboxLabel: string, state: string, pageName: string ) =>{
  const pageObject: IBasePage = container.resolve<CheckboxesPage>( pageName );
  expect( pageObject.getCheckboxStatus( checkboxLabel ) ).to.be.equal( state );
} );
