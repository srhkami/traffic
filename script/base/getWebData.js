export class WebData {
  constructor(sheetID, sheetName, apiKey) {
    this.url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${sheetName}?alt=json&key=${apiKey}`;
  }
}