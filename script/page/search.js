import { pages } from '../base/pages.js';

// 函式：開始搜尋
function search_start(key_word, options){
    let list_output = [{article:'0',title:'所有搜尋結果',text:'沒有找到搜尋結果'}];
if (options['PH']){
    let new_list = search_every(pages.PH.list, key_word, pages.PH.name_short)
    list_output = list_output.concat(new_list);
}
if (options['SR']){
    let new_list = search_every(pages.SR.list, key_word, pages.SR.name_short)
    list_output = list_output.concat(new_list);
}
if (options['DR']){
    let new_list = search_every(pages.DR.list, key_word, pages.DR.name_short)
    list_output = list_output.concat(new_list);
}
if (options['ML']){
    let new_list = search_every(pages.ML.list, key_word, pages.ML.name_short)
    list_output = list_output.concat(new_list);
}
if (options['PA']){
    let new_list = search_every(pages.PA.list, key_word, pages.PA.name_short)
    list_output = list_output.concat(new_list);
}
if (options['PW']){
    let new_list = search_every(pages.PW.list, key_word, pages.PW.name_short)
    list_output = list_output.concat(new_list);
}
return list_output;
}

// 函式：依關鍵字搜尋符合條文，並修改關鍵字及標題
function search_every(r_list, key_word, r_name){
    let new_list = r_list.filter((value)=> {
        if (value.text.includes(key_word)){
            value.text = value.text.replaceAll(key_word,`<i class="highlight">${key_word}</i>`);
            value.article = `${r_name}第 ${value.article} 條`;
            return value;
        }
    });
    return new_list;
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
            <div class="r_article">${value.article}</div>
            <div class="r_text">
                ${value.text}
            </div>
        </div>
        `
    });
    return html
}


// 主程式開始
    // 取得關鍵字及設定值
let key_word = new URLSearchParams(location.search);
key_word = key_word.get('keyword');
let options = JSON.parse(localStorage.getItem('sh_options'));

    //開始搜尋
let list_output = search_start(key_word,options);
    //合併條文，並顯示結果（如果沒有則顯示為沒有結果）
if (list_output.length != 1){
    $('.title_article').html(`${key_word} 的搜尋結果`);
    $('.bk_right_text').html(sum_text(list_output));
}
else{
    if(key_word){
        $('.title_article').html(`${key_word} 的搜尋結果`);
        $('.bk_right_text').html('沒有找到任何相關內容');
    }
    else{
        $('.title_article').html(`請輸入關鍵字開始搜尋`);
        $('.bk_right_text').html('');
    }
}


  
