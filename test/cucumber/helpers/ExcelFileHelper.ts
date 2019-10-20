// const Excel = require('exceljs');
import * as Excel from "exceljs";

export class ExcelFileHelper {
    fileName: string;
    sheetName: string;
    ExcelWorkbook: Excel.Workbook;
    Workbook: Excel.Workbook;
    ExcelSheet: Excel.Worksheet;

    constructor (fileName: string, sheetName:string) {
        this.fileName = fileName;
        this.sheetName = sheetName;
        // this.ExcelWorkbook = new Excel.Workbook();
        this.Workbook = null;
        this.ExcelSheet = null;
    }

    async init () {
        this.Workbook = await this.getWorkbook(this.fileName);
        this.ExcelSheet = await this.getWorkSheet(this.sheetName);
        return this;
    }

    async getWorkbook (fileName) {
        return await this.Workbook.xlsx.readFile(fileName);
    }

    async getWorkSheet (sheetName) {
        return await this.Workbook.getWorksheet(sheetName);
    }

    async getCellText (cell) {
        return this.ExcelSheet.getCell(cell).text;
        // var workbook = new Excel.Workbook();
        // workbook.xlsx.readFile(filename)
        // .then(readFile => {
        //   // use workbook
        //   readFile.getWorksheet('My Sheet').getCell()
        // });
    }

    async getWorkSheetRowCount (sheetName) {
        var sheet = await this.getWorkSheet(sheetName);
        return await sheet.rowCount;
    }
}

// module.exports = ExcelFileHelper;
// export default new ExcelFileHelper{};