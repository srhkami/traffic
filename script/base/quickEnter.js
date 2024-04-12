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
  $('#bk_quick').html(html_quick);
  // let quick_options = ['PH','SR','DL','CL'];
  // if(localStorage.getItem('qk_options')){
  //     quick_options = JSON.parse(localStorage.getItem('qk_options'));
  //     console.log(quick_options);
  //     let html = '';
  //     quick_options.forEach((name, index)=>{
  //         html +=`
  //         <a href=".${pages[name].href}" id="quick_${index}">
  //           <img src=".${pages[name].icon}" alt="${pages[name].name_short}" data-name="${pages[name].name_simple}" class="img_set">
  //         </a>
  //         `;
  //     })
  //     $('#bk_quick').html(html);
  // }
  // else{
  //     localStorage.setItem('qk_options',  JSON.stringify(quick_options));
  // }
}


function quick_switch(){
  $('#quick_setting').on('click',()=>{
    if ($('.quick_row > a').hasClass('in_set')){
      $('.quick_row > a').removeClass('in_set');
      $('.quick_row > a').attr('src','./icons/icon_setting_b.png');
      load_quick();
    }
    else{
      $('#quick_setting').addClass('in_set');
      $('.quick_row > a').attr('src','./icons/icon_check_b.png');
      alert('請點選圖示，替換到想要的功能為止');
      set_quick();
    }
  })
}


function set_quick(){
  $('.quick_row > a').each((index, value)=>{
    const name = value.dataset.name;
    let quick_options = JSON.parse(localStorage.getItem('qk_options'));
    console.log(`一開始的是${quick_options}`);
    let page_list =  Object.keys(pages);
    let index_qo = quick_options.indexOf(name);
    let index_pl = page_list.indexOf(name);
    $(value).on('click',(e)=>{
      if($(value).hasClass('in_set')){
        e.preventDefault();
        console.log(index_qo);
        console.log(index_pl);
        let new_index;
        if (index_pl == page_list.length-2){
          new_index = page_list[0]; 
        }
        else{
          new_index = page_list[index_pl+1];
        }
        quick_options[index_qo] = new_index;
        let new_name = quick_options[index_qo];
        $(value).attr('href',`.${pages[new_name].href}`);
        $(value).attr('data-name',new_name)
        $(value).html(`
            <img src=".${pages[new_name].icon}" alt="${pages[new_name].name_short}">
        `);
        console.log(`後來的是${quick_options}`);
        localStorage.setItem('qk_options',  JSON.stringify(quick_options));
      }
    })
  })
}

function set_quick2(){
  $('.quick_row > a').each((index, value)=>{
    const name = value.dataset.name;
    let quick_options = JSON.parse(localStorage.getItem('qk_options'));
    console.log(`一開始的是${quick_options}`);
    $(value).on('click',(e)=>{
      if($(value).hasClass('in_set')){
        e.preventDefault();
        
        console.log(`後來的是${quick_options}`);
        localStorage.setItem('qk_options',  JSON.stringify(quick_options));
      }
    })
  })
}


load_quick();
// load_quick();
// quick_switch();
// $(document).ready(()=>{
//   set_quick;
// })

