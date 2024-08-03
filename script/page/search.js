import { pages } from '../base/pages.js';
import { list_kp } from '../data/kp_list.js';
// import { btnHTML, showAttachment } from './regulations.js';

// 函式：開始搜尋
function search_start(keyWord, options) {
  let list_output = [];
  Object.values(pages).forEach((value)=>{
    if(options[value.code]){
      let new_list;
      if(value.code == 'keypoint'){
        new_list = search_keypoint(keyWord)
      }
      else{
        new_list = search_every(keyWord, value);
      }
      list_output = list_output.concat(new_list);
    }
  });
  return list_output;
}

// 函式：依關鍵字搜尋「法規」，並修改關鍵字及標題
function search_every(keyWord, r_object) {
  let new_list = [];
  r_object.list.forEach((value) => {
    if (value.text.includes(keyWord)) {
      let newItem = {
        code: r_object.code,
        article: value.article,
        index: `《${r_object.title}》第 ${value.article} 條`,
        title: value.title,
        text: value.text.replaceAll(keyWord, `<mark>${keyWord}</mark>`)
      };
      new_list.push(newItem);
    }
  });
  return new_list;
}

// 函式：依關鍵字搜尋符合的「要點」
function search_keypoint(keyWord) {
  let new_list = [];
  list_kp.forEach((value) => {
    if (value.text.includes(keyWord)) {
      let netItem = {
        code: 'keypoint',
        article: value.code,
        index: value.title,
        title: value.title,
        text: value.text.replaceAll(keyWord, `<i class="highlight">${keyWord}</i>`),
      };
      new_list.push(netItem);
    }
  });
  return new_list;
}

// 函示：再檢索
function search_again(keyWord, old_list) {
  const new_list = old_list.filter((value) => {
    if (value.text.includes(keyWord)) {
      value.text = value.text.replaceAll(keyWord, `<i class="highlight">${keyWord}</i>`)
      return value;
    }
  })
  return new_list
}

// 函式：刷新條目清單
function refresh_list(list_output) {
  let html = '';
  list_output.forEach((value) => {
    if (value.article == '-1'){ //排除附件
      //pass
    }
    else{
      html += `
      <a class="list-group-item list-group-item-action p-0 border-start-0 border-end-0" href="#article-${value.code}-${value.article}">
        <div class="px-3 py-2">
          <div class="list-article-no">
            ${value.index} 
          </div>
          <div class="list-article-title text-secondary-emphasis">
            ${value.title}
          </div>
        </div>
      </a>
      `;
    }
  });
  $('#list-article').html(html);
}

// 函式：刷新所有搜尋結果條文
function refresh_text(list_output, keyWord) {
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
        <div class="p-0 d-flex align-items-center justify-content-center" style="width: 120px;">
          <img src="../icons/icon_search.png" class="card-img-right ps-3" alt="...">
        </div>
        <div class="col p-0">
          <div class="card-body">
            <h2 class="card-title">
              「${keyWord}」的搜尋結果</h2>
            <p class="card-text text-secondary-emphasis">
              ${searchResult}
              <br>搜尋結果不滿意嗎？試試：
              </p>
            <button id="btn_searchAgain" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#searchAgainArea">
              再檢索
            </button>
            <button id="btn_reSearch"  class="btn btn-primary ms-2" type="button" data-bs-toggle="modal" data-bs-target="#searchArea">
              重新搜尋
            </button>
          </div>
        </div>
      </div>
    </div>
    `;
  list_output.forEach((value, index) => {
    if (value.article == '-1'){
      //pass
    }
    else{
      html += `
      <div id="article-${value.code}-${value.article}" class="article">
        <div class="article-title d-flex mt-4 mb-2 pb-1 border-bottom border-primary-subtle">
            <h4 class="d-inline me-auto" data-rg="${value.rg}">${value.index}</h4>
            ${btnHTML(value.code, value.article)}
        </div>
        <div class="col-data">
            <div class="law-article">
                ${value.text}
            </div>
        </div>
      </div>
      `;
    }
  });
  return html;
}

// 函式：內文顯示按鈕的特例
function btnHTML(code, article){
  let html = '';
  if(code=='ML'){ //設置規則附圖的按鈕
    html=`
      <button type="button" class="bth_attachment btn btn-primary btn-sm me-2 h-75" data-bs-toggle="modal" data-bs-target="#popUpArea" data-article="${article}">附圖</button>
    `;
  }
  return html;
}

// 函式：顯示設置規則附件
export function showAttachment(r_list) {
  $('.bth_attachment').click((e) => {
    let article = e.target.dataset.article
    r_list.forEach((value) => {
      if (article == value.article) {
        let html = `
        <div class="modal-dialog" >
          <div class="modal-content" >
            <div class="modal-header">
              <h5 class="modal-title">附件圖片</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-secondary" >
              ${value.img}
            </div>
            <div class="modal-footer">
              <p class="me-auto text-secondary">註：建議使用亮色主題觀看</p>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
            </div>
          </div>
        </div>    
        `
        $('#popUpArea').html(html);
      }
    })
  })
}

// 主程式開始
 // 取得關鍵字及設定值
const getData = new URLSearchParams(location.search);
let keyWord = getData.get('keyword').split(' ');
let options = JSON.parse(localStorage.getItem('searchOptionGo'));
  // 開始搜尋，刷新主頁面
let list_output =[]
keyWord.forEach((value, index) => {
  if (index == 0) {
    list_output = search_start(value, options);
    return
  }
  list_output = search_again(value, list_output)
})
refresh_list(list_output);
$('#article-text').html(refresh_text(list_output, keyWord));

$(document).ready(() => {
  //偵測側邊欄點擊
  $("#itemMenu a,.btn-close").click(() => {
    setTimeout(() => $('.offcanvas-top').offcanvas('hide'), 50)
  });
  //再檢索搜尋
  $('#btn_searchAgainGo').click(()=>{
    const keyWord = $('#keyWord2').val()
    if (!keyWord){
      alert('關鍵字請勿留空！')
    }
    else{
      location.href +=`+${keyWord}`;
    }
  })
  //重新搜尋按鈕
  $('#btn_reSearch').click(()=>{
    $('#keyWord').val(getData.get('keyword'))
  })
  showAttachment(pages.ML.list);
})



