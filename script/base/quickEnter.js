import { pages } from '../base/pages.js'

// 快速導航設定
  //函式：預設欄搜尋HTML

export const html_quick =`
  <div class="quick_row" data-name="${pages.PH.name_simple}">
  <a href=".${pages.PH.href}">
    <img src=".${pages.PH.icon}" alt="${pages.PH.name_title}">
  </a>
  </div>
  <div class="quick_row" data-name="${pages.SR.name_simple}">
  <a href=".${pages.SR.href}">
    <img src=".${pages.SR.icon}" alt="${pages.SR.name_title}">
  </a>
  </div>
  <div class="quick_row" data-name="${pages.DL.name_simple}">
  <a href=".${pages.DL.href}">
    <img src=".${pages.DL.icon}" alt="${pages.DL.name_title}">
  </a>
  </div>
  <div class="quick_row" data-name="${pages.CL.name_simple}">
  <a href=".${pages.CL.href}">
    <img src=".${pages.CL.icon}" alt="${pages.CL.name_title}">
  </a>
  </div>
`;


function load_quick(){
  let quick_options = ['PH','SR','DL','CL'];
  if(localStorage.getItem('qk_options')){
      quick_options = JSON.parse(localStorage.getItem('qk_options'));
      console.log('已從瀏覽器設定取得：'+ quick_options);
  }
  else{
      localStorage.setItem('qk_options',  JSON.stringify(quick_options));
  }
  let html = '';
  quick_options.forEach((name, index)=>{
      html +=`
      <div class="col-3 quick_col" data-name="PH">
        <a href=".${pages[name].href}">
            <img class="img-fluid mx-auto" src=".${pages[name].icon}" alt="${pages[name].name_short}" data-name="${pages[name].name_simple}">
        </a>
      </div>
      `;
  })
  $('#bk_quick>div').html(html);
}

function set_quick(){
  $('#save_quick').click(()=>{
    let quick_options = [];
    $('input:checkbox:checked[name="quickSwitch"]').each((index, value)=>{
      quick_options[index] = $(value).val();
    })
    console.log(quick_options);
    if(quick_options.length > 4){
      alert('選項請勿超過四個！');
    }
    else if(quick_options.length == 0){
      alert('選項請勿留空！');
    }
    else{
      localStorage.setItem('qk_options',  JSON.stringify(quick_options));
      alert('儲存成功！');
      location.reload();
    }
  })
}

load_quick();
set_quick();


