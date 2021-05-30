import * as Excel from 'exceljs';

export class ExcelFileHelper {
  public fileName: string;
  public sheetName: string;
  public ExcelWorkbook: Excel.Workbook;
  public Workbook: Excel.Workbook;
  public ExcelSheet: Excel.Worksheet;

  public constructor( fileName: string, sheetName: string ) {
    this.Workbook = new Excel.Workbook();
    this.fileName = fileName;
    this.sheetName = sheetName;
  }

  public async getWorkbook( fileName: string ): Promise<Excel.Workbook> {
    const workbook = new Excel.Workbook();
    const readFile = await workbook.xlsx.readFile( fileName );
    return readFile;
  }

  public async init(): Promise<ExcelFileHelper> {
    this.Workbook = await this.getWorkbook( this.fileName );
    this.ExcelSheet = this.getWorkSheet( this.sheetName );
    return this;
  }

  public getWorkSheet( sheetName: string ): Excel.Worksheet {
    return this.Workbook.getWorksheet( sheetName );
  }

  public getCellText( cell: string ): string {
    return this.ExcelSheet.getCell( cell ).text;
  }

  public getWorkSheetRowCount( sheetName: string ): number {
    const sheet = this.getWorkSheet( sheetName );
    return sheet.rowCount;
  }
}
