import { pages } from "./pages.js";

// 搜尋側邊欄
  //函式：預設欄搜尋HTML
export const html_searchBar =`
  <div class="bk_hideSearch">
  <img class="icon_menu" src="../icons/icon_search_2b.png" alt="" >
  <label class="space_hideSearch" for="btn_hideSearch">搜尋</label>
  <button id="btn_hideSearch" class="btn_header btn_search">
  <img class="icon_menu" src="../icons/icon_cross_w.png" alt="關閉" >
  </button>
  </div>
  <form class="form_search" action="../htmls/search.html" method="get">
  <div class="search_input">
  <input type="text" name="keyword" id="input_keyword" placeholder="請輸入關鍵字" autocomplete="off" required="required" maxlength= "8";>
  <label for="btn_search_reset" class="icon_search_label">
  <img class="icon_search" src="../icons/icon_clear_b.png" alt="清除" >
  </label>
  <label for="btn_search_start" class="icon_search_label">
  <img class="icon_search" src="../icons/icon_search_2b.png" alt="搜尋" >
  </label>
  </div>
  <input type="reset" name="" id="btn_search_reset" class="hide_input"> 
  <input type="submit" name="" id="btn_search_start" class="hide_input">
  </form>
  <div class="bk_search_list">
  <div class="bk_search_history bk_menu">  
  <div class="search_title">
  <img class="icon_class" src="../icons/icon_history_b.png" alt="">
  <p class="text_title">最近搜尋(尚未加入功能)</p>
  </div>
  <div class="history">
  <p class="history_text">機車</p>
  <p class="history_text">汽車</p>
  <p class="history_text">行人</p>
  <p class="history_text">酒精</p>
  <p class="history_text">牌照</p>
  </div>
  </div>
  <div class="bk_search_options bk_menu">  
  <div class="search_title">
  <img class="icon_class" src="../icons/icon_setting_b.png" alt="">
  <p class="text_title">搜尋範圍</p>
  </div>
  <div class="options">
  <div class="options_row">
  <label class="options_text" for="check_${pages.PH.name_simple}">${pages.PH.name_title}</label>
  <input type="checkbox" checked="checked" id="check_${pages.PH.name_simple}" class="check_search">
  <label class="toggle" for="check_${pages.PH.name_simple}"></label>
  </div>
  <div class="options_row">
  <label class="options_text" for="check_${pages.SR.name_simple}">${pages.SR.name_title}</label>
  <input type="checkbox" checked="checked" id="check_${pages.SR.name_simple}" class="check_search">
  <label class="toggle" for="check_${pages.SR.name_simple}"></label>
  </div>
  <div class="options_row">
  <label class="options_text" for="check_${pages.DR.name_simple}">${pages.DR.name_title}</label>
  <input type="checkbox" checked="checked" id="check_${pages.DR.name_simple}" class="check_search">
  <label class="toggle" for="check_${pages.DR.name_simple}"></label>
  </div>
  <div class="options_row">
  <label class="options_text" for="check_${pages.ML.name_simple}">${pages.ML.name_title}</label>
  <input type="checkbox" checked="checked" id="check_${pages.ML.name_simple}" class="check_search">
  <label class="toggle" for="check_${pages.ML.name_simple}"></label>
  </div>
  <div class="options_row">
  <label class="options_text" for="check_${pages.TA.name_simple}">${pages.TA.name_title}</label>
  <input type="checkbox" checked="checked" id="check_${pages.TA.name_simple}" class="check_search">
  <label class="toggle" for="check_${pages.TA.name_simple}"></label>
  </div>
  <div class="options_row">
  <label class="options_text" for="check_${pages.PA.name_simple}">${pages.PA.name_title}</label>
  <input type="checkbox" checked="checked" id="check_${pages.PA.name_simple}" class="check_search">
  <label class="toggle" for="check_${pages.PA.name_simple}"></label>
  </div>
  <div class="options_row">
  <label class="options_text" for="check_${pages.PW.name_simple}">${pages.PW.name_title}</label>
  <input type="checkbox" checked="checked" id="check_${pages.PW.name_simple}" class="check_search">
  <label class="toggle" for="check_${pages.PW.name_simple}"></label>
  </div>
  </div>
  </div>
  </div>
`;
  //讀取瀏覽器設定，刷新搜尋欄
export function load_searchBar(html_searchBar) {
  if ($('.page_title').html() == '首頁'){
    $('#searchBar').html(html_searchBar.replaceAll('..','.'));
  }
  else{
    $('#searchBar').html(html_searchBar);
  }
  
}
  //函式：開合搜尋側邊攔
export function searchBar_switch(){
  $('.btn_search').on('click',() => {
    if($('#searchBar').css('transform')=='matrix(1, 0, 0, 1, -320, -450)'){
      $('#searchBar').css('transform','matrix(1, 0, 0, 1, -320, 0)');
    }
    else{
      $('#searchBar').css('transform','matrix(1, 0, 0, 1, -320, -450)');
    }
  })
} 
  //函式：點擊選項開關，儲存搜尋設定進瀏覽器
export function save_options(){
  $('.check_search').on('change',()=>{
      let search_options = {
          PH: $('#check_PH').prop('checked'),
          SR: $('#check_SR').prop('checked'),
          DR: $('#check_DR').prop('checked'),
          ML: $('#check_ML').prop('checked'),
          TA: $('#check_TA').prop('checked'),
          PA: $('#check_PA').prop('checked'),
          PW: $('#check_PW').prop('checked')
      };
      localStorage.setItem('sh_options', JSON.stringify(search_options));
  });;
}
  //函式：讀取瀏覽器儲存之設定；若沒有設定，則儲存預設值
export function load_options(){
  if(localStorage.getItem('sh_options')){
    let search_optiones = JSON.parse(localStorage.getItem('sh_options'));
    $('#check_PH').prop('checked',search_optiones['PH']);
    $('#check_SR').prop('checked',search_optiones['SR']);
    $('#check_DR').prop('checked',search_optiones['DR']);
    $('#check_ML').prop('checked',search_optiones['ML']);
    $('#check_TA').prop('checked',search_optiones['TA']);
    $('#check_PA').prop('checked',search_optiones['PA']);
    $('#check_PW').prop('checked',search_optiones['PW']);
  }
  else{
      localStorage.setItem('sh_options',  JSON.stringify({"PH":true,"SR":true,"DR":true,"ML":true,"TA":true,"PA":false,"PW":false} ));
  }
}
  
//函式：搜尋時，儲存歷史紀錄
export function save_history(){
  
}

load_searchBar(html_searchBar);
$(document).ready(()=>{
  searchBar_switch();
  save_options();
  load_options();
});
