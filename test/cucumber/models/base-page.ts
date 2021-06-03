export interface IBasePage{
  mainObject: WebdriverIO.Element;
  getCheckBox( label: string ): WebdriverIO.Element;
  getCheckboxStatus( checkboxLabel: string ): string;
  clickOnCheckbox( checkboxLabel: string ): void;
}
