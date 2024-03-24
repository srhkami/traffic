import {list_PH} from './regulations/PH.js'

function get_text(article){
    let text = '';
    act_list.forEach((value)=>{
        if (article == value.article){
            text = value.text;
        }
    })
    return text;
}

let act_list = []
let act_name = new URLSearchParams(location.search);
act_name = act_name.get('name');
if (act_name == 'PH'){
    act_list = list_PH;
}

let html = '';
act_list.forEach((value) => {
    html = html + `
    <li class="block_list" data-article="${value.article}">
        <div class="div_article">第 ${value.article} 條</div>
        <div class="div_title">${value.title}</div>
    </li>
    `
});
document.querySelector('.list_article').innerHTML = html;

document.querySelectorAll('.block_list').forEach((button)=>{
    const article = button.dataset.article;
    button.addEventListener('click',(click)=>{
        console.log(click);
        let text = get_text(article);
        document.querySelector('.title_article').innerHTML = `第 ${article} 條`;
        document.querySelector('.div_output_text').innerHTML = text;
    })
})

