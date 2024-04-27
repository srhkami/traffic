import { pages } from '../base/pages.js';
import { list_kp } from '../list/kp_list.js';

// 函式：開始搜尋
function search_start(key_word, options) {
  let list_output = [];
  // {article:'0',title:'所有搜尋結果',text:'沒有找到搜尋結果'}
  if (options['PH']) {
    let new_list = search_every(key_word, pages.PH)
    list_output = list_output.concat(new_list);
  }
  if (options['SR']) {
    let new_list = search_every(key_word, pages.SR)
    list_output = list_output.concat(new_list);
  }
  if (options['DR']) {
    let new_list = search_every(key_word, pages.DR)
    list_output = list_output.concat(new_list);
  }
  if (options['ML']) {
    let new_list = search_every(key_word, pages.ML)
    list_output = list_output.concat(new_list);
  }
  if (options['TA']) {
    let new_list = search_every(key_word, pages.TA)
    list_output = list_output.concat(new_list);
  }
  if (options['PA']) {
    let new_list = search_every(key_word, pages.PA)
    list_output = list_output.concat(new_list);
  }
  if (options['PW']) {
    let new_list = search_every(key_word, pages.PW)
    list_output = list_output.concat(new_list);
  }
  if (options['CC']) {
    let new_list = search_every(key_word, pages.CC)
    list_output = list_output.concat(new_list);
  }
  if (options['CP']) {
    let new_list = search_every(key_word, pages.CP)
    list_output = list_output.concat(new_list);
  }
  if (options['SO']) {
    let new_list = search_every(key_word, pages.SO)
    list_output = list_output.concat(new_list);
  }
  if (options['keyPoint']) {
    let new_list = search_keyPoint(key_word)
    list_output = list_output.concat(new_list);
  }
  return list_output;
}

// 函式：依關鍵字搜尋符合條文，並修改關鍵字及標題
function search_every(key_word, r_object) {
  let new_list = [];
  r_object.list.forEach((value) => {
    if (value.text.includes(key_word)) {
      let netItem = {
      code : r_object.name_simple,
      article : value.article,
      index :`《${r_object.name_title}》第 ${value.article} 條`,
      title : value.title, 
      text : value.text.replaceAll(key_word, `<i class="highlight">${key_word}</i>`),
      };
      new_list.push(netItem);
    }
  });
  console.log(new_list)
  return new_list;
}

function search_keyPoint(key_word){
  let new_list = [];
  list_kp.forEach((value) => {
    if (value.text.includes(key_word)) {
      let netItem = {
      code : 'keyPoint',
      article : value.code,
      index : value.title,
      title : value.title, 
      text : value.text.replaceAll(key_word, `<i class="highlight">${key_word}</i>`),
      };
      new_list.push(netItem);
    }
  });
  console.log(new_list)
  return new_list;
}

// 函式：刷新條目清單
function refresh_list(r_list){
  let html = '';
  r_list.forEach((value, index) => {
    html +=`
    <a class="list-group-item list-group-item-action" href="#article-${value.code}-${value.article}">
      <div class="list-article-no">
        ${value.index}
      </div>
      <div class="list-article-title text-secondary-emphasis">
        ${value.title}
      </div>
    </a>
    `;
  });
  $('#list_article').html(html);
}

// 函式：刷新所有搜尋結果條文
function refresh_text(r_list, key_word) {
  let searchResult;
  if (list_output.length == 0) {
    searchResult = `沒有找到搜尋結果`;
  }
  else {
    searchResult = `共找到 ${list_output.length} 項搜尋結果`
  }
  let html = `
    <div class="card rounded-3">
      <div class="row mx-0">
        <div class="p-0 d-flex align-items-center justify-content-center div_icon_page">
          <img src="../icons/icon_search.png" class="card-img-right ps-3" alt="...">
        </div>
        <div class="col p-0">
          <div class="card-body">
            <h2 class="card-title">
              「${key_word}」的搜尋結果</h2>
            <p class="card-text text-secondary-emphasis">
              ${searchResult}
            </p>
            <button id="reSearch" href="#" class="btn btn-primary" disabled>暫無功能</button>
          </div>
        </div>
      </div>
    </div>
    `;
  r_list.forEach((value, index) => {
      html +=`
      <div id="article-${value.rg}-${value.article}" class="article">
        <div class="article-title d-flex mt-4 mb-2 pb-1 border-bottom border-primary-subtle">
            <h4 class="d-inline me-auto" data-rg="${value.rg}">${value.index}</h4>
            <button type="button" class="btn btn-primary btn-sm me-2 h-75" disabled>分享</button>
        </div>
        <div class="col-data">
            <div class="law-article">
                ${value.text}
            </div>
        </div>
      </div>
      `;
  });
  return html;
}

// 主程式開始
// 取得關鍵字及設定值
let getData = new URLSearchParams(location.search);
let key_word = getData.get('keyword');
// console.log(key_word);
let options = JSON.parse(localStorage.getItem('sh_options'));
// console.log(getData.get('searchSwitch'));

//開始搜尋，刷新主頁面
let list_output = search_start(key_word, options);
refresh_list(list_output);
$('#article_text').html(refresh_text(list_output, key_word));
$(document).ready(()=>{
  //偵測側邊欄點擊
  $("#sidebar a,.btn-close").click(()=>{
    setTimeout(()=>$('.offcanvas-lg').offcanvas('hide'), 50)
  });
})



