import { Given, Then, When } from '@cucumber/cucumber';
import type { CheckboxesPage } from '../../pages/checkboxes/checkboxes-page';
import { CommonPage } from '../../pages/common/common-page';
import type { Urls } from '../../models/wdio-conf-additional-properties';
import { container } from 'tsyringe';
import { expect } from 'chai';

Given( /^The user navigates to the page '(.*)'$/, async ( url: keyof Urls ) => {
  const commonPage = container.resolve( CommonPage );
  await commonPage.navigateToUrl( url );
} );

When( /^The user clicks on the checkbox '(.*)' of the '(.*)' page$/, async ( checkboxLabel: string, pageName: string ) =>{
  const pageObject = container.resolve<CheckboxesPage>( pageName );
  await pageObject.clickOnCheckbox( checkboxLabel );
} );

Then( /^The page displays the checkbox '(.*)' '(.*)' of the '(.*)' page$/, async ( checkboxLabel: string, state: string, pageName: string ) =>{
  const pageObject = container.resolve<CheckboxesPage>( pageName );
  const checkboxStatus = await pageObject.getCheckboxStatus( checkboxLabel );
  expect( checkboxStatus).to.be.equal( state );
} );
