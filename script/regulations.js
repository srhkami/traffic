import {list_PH} from './list/PH.js';
import {list_SR} from './list/SR.js';
import {list_DR} from './list/DR.js';
import {list_ML} from './list/ML.js';
import {r_PH, r_SR, r_DR, r_ML} from './list/pages.js';
import {html_sidebar} from './sidebar.js';

//函式：讀取上次最後瀏覽條目，載入時刷新
function load_from_brower(r_name){
    let default_article;
    if (localStorage.getItem(r_name)) {
        default_article = localStorage.getItem(r_name);
    }
    else {
        default_article = '1';
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
    $('.title_article').html(`第 ${article} 條`);
    $('.bk_right_text').html(text);
}

//函式：判斷是哪種法規
function get_regulation(r_name){
    let r_list;
    if (r_name == 'PH'){
        r_list = list_PH;
        $('title').html(r_PH.name_title);
        $('.title_short').html(r_PH.name_short);
        $('.title_long').html(r_PH.name_all);
        $('.page_icon').attr('src', r_PH.icon_src)
    }
    else if (r_name == 'SR'){
        r_list = list_SR;
        $('title').html(r_SR.name_title);
        $('.title_short').html(r_SR.name_short);
        $('.title_long').html(r_SR.name_all);
        $('.page_icon').attr('src', r_SR.icon_src)
    }
    else if (r_name == 'DR'){
        r_list = list_DR;
        $('title').html(r_DR.name_title);
        $('.title_short').html(r_DR.name_short);
        $('.title_long').html(r_DR.name_all);
        $('.page_icon').attr('src', r_DR.icon_src)
    }
    else if (r_name == 'ML'){
        r_list = list_ML;
        $('title').html(r_ML.name_title);
        $('.title_short').html(r_ML.name_short);
        $('.title_long').html(r_ML.name_all);
        $('.page_icon').attr('src', r_ML.icon_src)
    }
    return r_list;
}

//主程式開始
let r_name = new URLSearchParams(location.search);
r_name = r_name.get('r');
const r_list = get_regulation(r_name);
// 刷新側邊欄
$('#sidebar').html(html_sidebar);
// 刷新條文清單
let html = '';
r_list.forEach((value) => {
    html = html + `
    <li class="list_r_value" data-article="${value.article}">
        <div class="bk_r_article">第 ${value.article} 條</div>
        <div class="bk_r_title">${value.title}</div>
    </li>
    `;
});
$('.list_r').html(html);
load_from_brower(r_name, r_list);

//開合側邊欄
$('.btn_menu').click(()=>{
    if ($('#sidebar').hasClass('hide_sidebar')){
        $('#sidebar').removeClass('hide_sidebar');
        $('#sidebar').addClass('show_sidebar');
    }
    else{
        $('#sidebar').removeClass('show_sidebar');
        $('#sidebar').addClass('hide_sidebar');
    }
});
//偵測每一條的點擊
$('.list_r_value').each((index, value)=>{
    const article = value.dataset.article;
    $(value).on('click',()=>{
        //！！無法實現想要的效果！！
        $('#check_right').attr('checked',true);
        get_text(article);
        save_to_brower(r_name, article);
    })
})