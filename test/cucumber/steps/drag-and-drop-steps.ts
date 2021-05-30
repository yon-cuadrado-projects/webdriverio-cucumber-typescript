import { Given, Then, When } from '@cucumber/cucumber';
import { BasePage } from '../pages/common/BasePage';

When( 'I drag webElement {string} and drop over webElement {string} in page {string}', function () {
  new BasePage();
} );

Then( 'the result should be that the first element is moved near the second element', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
} );

Then( 'the result should be that the first element is moved near the second element', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
} );

Given( 'I navigate to the page DragAndDropUrl', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
} );

When( 'I drag webElement highTatras and drop ot the coordinates: x: {int}, y: {int}', function ( int, int2 ) {
  // When('I drag webElement highTatras and drop ot the coordinates: x: {int}, y: {float}', function (int, float) {
  // When('I drag webElement highTatras and drop ot the coordinates: x: {float}, y: {int}', function (float, int) {
  // When('I drag webElement highTatras and drop ot the coordinates: x: {float}, y: {float}', function (float, float2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
} );

Then( 'the result should be that the element has changed his position', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
} );
