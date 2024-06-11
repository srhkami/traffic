const sheetID = '15WEuG9RoXWdaGws3yhIgYj_0G0Q7ukmMwKe5CXNZZfs';
const sheetName = 'info';
const apiKey = 'AIzaSyAHvCcIcGd3RaTSi5VhW0AsQos-7qIPH4g';

const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${sheetName}?alt=json&key=${apiKey}`;

let notice = '';

$.get(url,(sheet)=>{
  const data = sheet.values;
})

console.log(notice);

$(document).ready(() => {
  $('#notice').html(notice);

})

