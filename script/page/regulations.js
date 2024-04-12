import { pages } from '../base/pages.js';

// 函式：判斷是哪種法規
function get_regulation(r_name){
    let r_object = pages[r_name];
    $('title').html(r_object.name_title);
    $('.title_short').html(r_object.name_short);
    $('.title_long').html(r_object.name_all);
    $('.page_icon').attr('src',`..${r_object.icon}`)
    let r_list = r_object.list;
    return r_list;
}

// 函式：合併所有條文
function sum_text(r_list){
    let html = '';
    r_list.forEach((value, index) => {
        if (index == 0){
            return;
        }
        html +=`
        <div class="r_row">
            <div class="r_article">第 ${value.article} 條</div>
            <div class="r_text">
                ${value.text}
            </div>
        </div>
        `
    });
    return html
}

// 函式：刷新條文清單
function refresh_list(r_list){
    let html;
    r_list.forEach((value, index) => {
        if (index == 0){
            html = `
            <li class="list_r_value" data-article="${value.article}">
                <label class="list_r_lable" for="check_right">
                    <div class="bk_r_article"></div>
                    <div class="bk_r_title">${value.title}</div>
                </label>
            </li>
            `;
            return;
        }
        html +=`
        <li class="list_r_value" data-article="${value.article}">
            <label class="list_r_lable" for="check_right">
                <div class="bk_r_article">第 ${value.article} 條</div>
                <div class="bk_r_title">${value.title}</div>
            </label>
        </li>
        `;
    });
    $('.list_r').html(html);
}

//函式：讀取上次最後瀏覽條目，載入時刷新
function load_from_brower(r_name){
    let default_article;
    if (localStorage.getItem(r_name)) {
        default_article = localStorage.getItem(r_name);
    }
    else {
        default_article = '0';
    }
    get_text(default_article);
}

//函式：儲存瀏覽之條目
function save_to_brower(r_name, article){
    localStorage.setItem(r_name, article);
}

// 函式：取得條文內容，並刷新輸出顯示
function get_text(article){
    let text;
    r_list.forEach((value)=>{
        if (article == value.article){
            text = value.text;
        }
    })
    if (article == '0'){
        $('.title_article').html('所有條文');
    }
    else{
        $('.title_article').html(`第 ${article} 條`);
    }
    $('.bk_right_text').html(`<div class="r_text">${text}</div>`);
}

// 主程式開始
// 取得網址夾帶的值
let r_name = new URLSearchParams(location.search);
r_name = r_name.get('r');
let r_list = get_regulation(r_name);
r_list[0] ={article:'0', title:'所有條文', text:sum_text(r_list)};
// 刷新主頁面
refresh_list(r_list);
load_from_brower(r_name, r_list);
//偵測每一條的點擊
$(document).ready(()=>{
    $('.list_r_value').each((index, value)=>{
        const article = value.dataset.article;
        $(value).on('click',()=>{
            get_text(article);
            save_to_brower(r_name, article);
        })
    })
});
    
