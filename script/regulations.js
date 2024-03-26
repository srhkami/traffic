import {list_PH} from './regulations/PH.js'
import {list_SR} from './regulations/SR.js'
import {list_DR} from './regulations/DR.js'


// 函式：取得條文內容
function get_text(article){
    let text = '';
    act_list.forEach((value)=>{
        if (article == value.article){
            text = value.text;
        }
    })
    return text;
}

//函式：判斷是哪種法規
function get_regulation(act_name){
    let act_list = []
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
    return act_list;
}

//主程式開始
let act_name = new URLSearchParams(location.search);
act_name = act_name.get('name');
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
//偵測每一條的點擊
document.querySelectorAll('.block_list').forEach((button)=>{
    const article = button.dataset.article;
    button.addEventListener('click',(click)=>{
        console.log(click);
        let text = get_text(article);
        document.querySelector('.title_article').innerHTML = `第 ${article} 條`;
        document.querySelector('.div_output_text').innerHTML = text;
    })
})

