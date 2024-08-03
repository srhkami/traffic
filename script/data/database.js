import { list_PH, list_SR, list_DR, list_ML, list_PA, list_PW, list_TA, list_CC, list_CP, list_SO, list_VS } from "./rg_list.js";
import { list_code } from './code_list.js';
// import { defaultDataVer } from '../base/info.js'


export class WebData {
  constructor(sheetID, sheetName, apiKey) {
    this.url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${sheetName}?alt=json&key=${apiKey}`;
  }
}

