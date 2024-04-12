import {violation_list, violation_again_list, violation_text,violation_code} from '../list/dl_list.js';

//函式：判斷是哪種功能
function get_function(r_name){
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
    }
    return r_list;
}



// 函式：判斷開始
function search_start(drive_type, car_type, bike_type, more_type){
    let x = 0;
    x = x + (drive_type-1)*42;
    x = x + (car_type-1)*6;
    x = x + bike_type;
    const code = violation_code[x-1];
    $('.output_text_big').html(violation_text[code]);
    if (more_type == 0) {
        $('.output_title').html(violation_list[code]);
    }
        else{
        $('.output_title').html(violation_again_list[code]);
    }
    if (drive_type == 8 && code == 15){
        alert('曳引車無明文處罰規定，僅供參考'); 
    }
    if (code == 0 || code == 16) {
        $('.output_text_small').html('　');
    }
    else if (code >=1 && code <=4 || code == 15){
        $('.output_text_small').html('駕駛人處新臺幣六千元以上二萬四千元以下罰鍰，並當場禁止其駕駛。');
    }
    else if (code >= 5 && code <= 10){
        $('.output_text_small').html('汽車所有人及駕駛人各處新臺幣四萬元以上八萬元以下罰鍰，並當場禁止其駕駛。');
    }
    else if (code >= 11 && code <= 13) {
        $('.output_text_small').html('駕駛人處新臺幣一千八百元以上三千六百元以下罰鍰，並禁止其駕駛。');
    }
    else {
        $('.output_text_small').html('駕駛人處新臺幣六千元罰鍰，並禁止其駕駛。');
    }


    
};

// 主程式開始
    // 查詢按鈕判斷
$('#bt_ok').on('click',()=>{
    const drive_type = Number($('#drive_type').val());
    const car_type = Number($('#car_type').val());
    const bike_type = Number($('#bike_type').val());
    const more_type = Number($('#more_type').val());
    console.log(drive_type);
    console.log(car_type);
    console.log(bike_type);
    console.log(more_type);
    if (drive_type==0 || car_type==0 || bike_type==0){
        alert('選項請勿留空！');
    }
    else{
        $('.tip').html('　'); 
        search_start(drive_type, car_type, bike_type, more_type);
    };
});