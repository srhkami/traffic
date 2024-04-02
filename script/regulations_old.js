import {list_PH} from './regulations/PH.js'
import {list_SR} from './regulations/SR.js'
import {list_DR} from './regulations/DR.js'
import {list_ML} from './regulations/ML.js'

//函式：讀取上次最後瀏覽條目，載入時刷新
function load_from_brower(act_name){
    let default_article;
    if (localStorage.getItem(act_name)) {
        default_article = localStorage.getItem(act_name);
    }
    else {
        default_article = '1';
    }
    get_text(default_article);
}


//函式：儲存瀏覽之條目
function save_to_brower(act_name, article){
    localStorage.setItem(act_name, article);
}

// 函式：取得條文內容，並刷新輸出顯示
function get_text(article){
    let text;
    act_list.forEach((value)=>{
        if (article == value.article){
            text = value.text;
        }
    })
    document.querySelector('.title_article').innerHTML = `第 ${article} 條`;
    document.querySelector('.div_output_text').innerHTML = text;
}

//函式：判斷是哪種法規
function get_regulation(act_name){
    let act_list;
    if (act_name == 'PH'){
        act_list = list_PH;
        document.querySelector('title').innerHTML = '處罰條例';
        document.querySelector('.page_title').innerHTML = '處罰條例';
    }
    else if (act_name == 'SR'){
        act_list = list_SR;
        document.querySelector('title').innerHTML = '安全規則';
        document.querySelector('.page_title').innerHTML = '安全規則';
    }
    else if (act_name == 'DR'){
        act_list = list_DR;
        document.querySelector('title').innerHTML = '處理細則';
        document.querySelector('.page_title').innerHTML = '處理細則';
    }
    else if (act_name == 'ML'){
        act_list = list_ML;
        document.querySelector('title').innerHTML = '設置規則';
        document.querySelector('.page_title').innerHTML = '設置規則';
    }
    return act_list;
}

//主程式開始
let act_name = new URLSearchParams(location.search);
act_name = act_name.get('r');
const act_list = get_regulation(act_name);
// 刷新條目清單
let html = '';
act_list.forEach((value) => {
    html = html + `
    <li class="block_list" data-article="${value.article}">
        <div class="div_article">第 ${value.article} 條</div>
        <div class="div_title">${value.title}</div>
    </li>
    `;
});
document.querySelector('.list_article').innerHTML = html;
//
let default_article = load_from_brower(act_name, act_list);

//偵測每一條的點擊
document.querySelectorAll('.block_list').forEach((button)=>{
    const article = button.dataset.article;
    button.addEventListener('click',(click)=>{
        console.log(click);
        get_text(article);
        save_to_brower(act_name, article)
    })
})

