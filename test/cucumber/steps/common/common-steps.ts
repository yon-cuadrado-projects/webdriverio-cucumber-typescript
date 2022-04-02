import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';
import { container } from 'tsyringe';
import type { Urls } from '../../models/wdio-conf-additional-properties';
import type { CheckboxesPage } from '../../pages/checkboxes/checkboxes-page';
import { CommonPage } from '../../pages/common/common-page';

Given( /^The user navigates to the page '(.*)'$/u, async ( url: keyof Urls ) => {
  const commonPage = container.resolve( CommonPage );
  await commonPage.navigateToUrl( url );
} );

When( /^The user clicks on the checkbox '(.*)' of the '(.*)' page$/u, async ( checkboxLabel: string, pageName: string ) => {
  const pageObject = container.resolve<CheckboxesPage>( pageName );
  await pageObject.clickOnCheckbox( checkboxLabel );
} );

Then( /^The page displays the checkbox '(.*)' '(.*)' of the '(.*)' page$/u, async ( checkboxLabel: string, state: string, pageName: string ) => {
  const pageObject = container.resolve<CheckboxesPage>( pageName );
  const checkboxStatus = await pageObject.getCheckboxStatus( checkboxLabel );
  expect( checkboxStatus ).to.be.equal( state );
} );
