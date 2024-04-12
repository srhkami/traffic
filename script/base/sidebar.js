import { pages } from './pages.js'

// 選單側邊欄
  //選單欄預設HTML
export const html_sidebar = `
    <div class="bk_hideSidebar">
    <label for="btn_hideSidebar" class="space_hideSidebar">
    <img class="icon_menu icon_hide_menu" src="../icons/icon_menu.png" alt="">
    選單
    </label>
    <button id="btn_hideSidebar" class="btn_header btn_menu">
    <img class="icon_menu" src="../icons/icon_cross_w.png" alt="關閉" >
    </button>
    </div>
    <div class="bk_app_name">
    <a class="index_link" href="../index.html">
    <img class="icon_app" src="../icons/icon_trafficpigeon.png">
    <h1 class="app_name">交通鴿手</h1>
    </a>
    </div>
    <div class="bk_app_list">
    <input type="checkbox" name="check_1" id="check_1" class="check_menu">
    <div class="bk_menu menu_1">
    <label class="bk_menu_class" for="check_1">
    <img class="icon_class" src="../icons/icon_highWay_b.png" alt="">
    <p class="text_class">交通法規</p>
    <img class="icon_class_open" src="../icons/icon_go.png" alt="">
    </label>
    <ul class="list_menu">
    <li class="list_menu_value">
    <a class="page_link" href="..${pages.PH.href}">
    <img class="icon_menu" src="..${pages.PH.icon}" alt="">
    <p class="text_menu">${pages.PH.name_title}</p>
    </a>
    </li>
    <li class="list_menu_value">
    <a class="page_link" href="..${pages.SR.href}">
    <img class="icon_menu" src="..${pages.SR.icon}" alt="">
    <p class="text_menu">${pages.SR.name_title}</p>
    </a>
    </li>
    <li class="list_menu_value">
    <a class="page_link" href="..${pages.DR.href}">
    <img class="icon_menu" src="..${pages.DR.icon}" alt="">
    <p class="text_menu">${pages.DR.name_title}</p>
    </a>
    </li>
    <li class="list_menu_value">
    <a class="page_link" href="..${pages.ML.href}">
    <img class="icon_menu" src="..${pages.ML.icon}" alt="">
    <p class="text_menu">${pages.ML.name_title}</p>
    </a>
    </li>
    </li>
    <li class="list_menu_value">
    <a class="page_link" href="..${pages.TA.href}">
    <img class="icon_menu" src="..${pages.TA.icon}" alt="">
    <p class="text_menu">${pages.TA.name_title}</p>
    </a>
    </li>
    </ul>
    </div>
    <input type="checkbox" name="check_2" id="check_2" class="check_menu">
    <div class="bk_menu menu_2">
    <label class="bk_menu_class" for="check_2">
    <img class="icon_class" src="../icons/icon_quickSearch.png" alt="">
    <p class="text_class">違規速查</p>
    <img class="icon_class_open" src="../icons/icon_go.png" alt="">
    </label>
    <ul class="list_menu">
    <li class="list_menu_value">
    <a class="page_link" href="..${pages.DL.href}">
    <img class="icon_menu" src="..${pages.DL.icon}" alt="">
    <p class="text_menu">${pages.DL.name_title}</p>
    </a>
    </li>
    <li class="list_menu_value">
    <a class="page_link" href="..${pages.CL.href}">
    <img class="icon_menu" src="..${pages.CL.icon}" alt="">
    <p class="text_menu">${pages.CL.name_title}</p>
    </a>
    </li>
    </ul>
    </div>
    <input type="checkbox" name="check_3" id="check_3" class="check_menu">
    <div class="bk_menu menu_3">
    <label class="bk_menu_class" for="check_3">
    <img class="icon_class" src="../icons/icon_law_b.png" alt="">
    <p class="text_class">警察法規</p>
    <img class="icon_class_open" src="../icons/icon_go.png" alt="">
    </label>
    <ul class="list_menu">
    <li class="list_menu_value">
    <a class="page_link" href="..${pages.PA.href}">
    <img class="icon_menu" src="..${pages.PA.icon}" alt="">
    <p class="text_menu">${pages.PA.name_title}</p>
    </a>
    </li>
    <li class="list_menu_value">
    <a class="page_link" href="..${pages.PW.href}">
    <img class="icon_menu" src="..${pages.PW.icon}" alt="">
    <p class="text_menu">${pages.PW.name_title}</p>
    </a>
    </li>
    </ul>
    </div>
    <input type="checkbox" name="check_4" id="check_4" class="check_menu">
    <div class="bk_menu menu_4">
    <label class="bk_menu_class" for="check_4">
    <img class="icon_class" src="../icons/icon-newFile_b.png" alt="">
    <p class="text_class">更多</p>
    <img class="icon_class_open" src="../icons/icon_go.png" alt="">
    </label>
    <ul class="list_menu">
    <li class="list_menu_value">
    <a class="page_link" href="..${pages.search.href}">
    <img class="icon_menu" src="..${pages.search.icon}" alt="">
    <p class="text_menu">${pages.search.name_title}</p>
    </a>
    </li>
    <li class="list_menu_value">
    <a class="page_link" href="${pages.feedback.href}">
    <img class="icon_menu" src="..${pages.feedback.icon}" alt="">
    <p class="text_menu">${pages.feedback.name_title}</p>
    </a>
    </li>
    <li class="list_menu_value">
    <a class="page_link" href="..${pages.about.href}">
    <img class="icon_menu" src="..${pages.about.icon}" alt="">
    <p class="text_menu">${pages.about.name_title}</p>
    </a>
    </li>
    </ul>
    </div>
    </div>
    `

  //函式：讀取瀏覽器儲存之設定，刷新選單欄
export function load_sidebar(html_sidebar) {
  if ($('.page_title').html() == '首頁'){
    $('#sidebar').html(html_sidebar.replaceAll('..','.'));
  }
  else{
    $('#sidebar').html(html_sidebar);
  }
  let sidebar_options= [false,false,true,true];
  if (localStorage.getItem('sidebar')) {
    sidebar_options = JSON.parse(localStorage.getItem('sidebar'));
  }
  $('#check_1').prop('checked',sidebar_options[0]);
  $('#check_2').prop('checked',sidebar_options[1]);
  $('#check_3').prop('checked',sidebar_options[2]);
  $('#check_4').prop('checked',sidebar_options[3]);
}
  //函式：開合選單欄功能
export function sidebar_switch() {
  $('.btn_menu').click(() => {
    if ($('#sidebar').hasClass('hide_sidebar')) {
      $('#sidebar').removeClass('hide_sidebar');
      $('#sidebar').addClass('show_sidebar');
    }
    else {
      $('#sidebar').removeClass('show_sidebar');
      $('#sidebar').addClass('hide_sidebar');
    }
  })
}
  //函式：偵測開合按鈕點擊，儲存設定進瀏覽器
export function save_sidebar(){
    $('.check_menu').on('change',()=>{
      let list = [];
      list.push($('#check_1').prop('checked'));
      list.push($('#check_2').prop('checked'));
      list.push($('#check_3').prop('checked'));
      list.push($('#check_4').prop('checked'));
      localStorage.setItem('sidebar', JSON.stringify(list));
    })
  }

load_sidebar(html_sidebar);
$(document).ready(()=>{
  sidebar_switch();
  save_sidebar();
});

