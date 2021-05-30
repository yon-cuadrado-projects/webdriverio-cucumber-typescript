import { BasePage } from '../pages/common/BasePage';
import { Given } from '@cucumber/cucumber';

Given( 'The user navigates to the page {string}', function ( url: string ) {
  new BasePage().navigateToUrl( url );
} );
