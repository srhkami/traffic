import {violation_list, violation_again_list, violation_text,violation_code} from './list/dl_list.js'

// 函式：搜尋開始
function search_start(drive_type, car_type, bike_type, more_type){
    let x = 0;
    x = x + (drive_type-1)*42;
    x = x + (car_type-1)*6;
    x = x + bike_type;
    const code = violation_code[x-1];
    document.querySelector('.output_text_1').innerHTML = violation_text[code];
    if (more_type == 0) {
        document.querySelector('.output_title').innerHTML = violation_list[code];
    }
        else{
        document.querySelector('.output_title').innerHTML = violation_again_list[code];
    }
    if (drive_type == 8 && code == 15){
        document.querySelector('.tip').innerHTML = '曳引車無明文處罰規定，僅供參考'; 
    }
    if (code == 0 || code == 16) {
        document.querySelector('.output_text_2').innerHTML = '　';
    }
    else if (code >=1 && code <=4 || code == 15){
        document.querySelector('.output_text_2').innerHTML = '駕駛人處新臺幣六千元以上二萬四千元以下罰鍰，並當場禁止其駕駛。';
    }
    else if (code >= 5 && code <= 10){
        document.querySelector('.output_text_2').innerHTML = '汽車所有人及駕駛人各處新臺幣四萬元以上八萬元以下罰鍰，並當場禁止其駕駛。';
    }
    else if (code >= 11 && code <= 13) {
        document.querySelector('.output_text_2').innerHTML = '駕駛人處新臺幣一千八百元以上三千六百元以下罰鍰，並禁止其駕駛。';
    }
    else {
        document.querySelector('.output_text_2').innerHTML = '駕駛人處新臺幣六千元罰鍰，並禁止其駕駛。';
    }


    
};

// 主程式開始
document.querySelector('#bt_ok').addEventListener('click',(buttin)=>{
    const drive_type = Number(document.querySelector('#drive_type').value);
    const car_type = Number(document.querySelector('#car_type').value);
    const bike_type = Number(document.querySelector('#bike_type').value);
    const more_type = Number(document.querySelector('#more_type').value);
    if (drive_type==0 || car_type==0 || bike_type==0){
        document.querySelector('.tip').innerHTML = '選項請勿留空！'; 
    }
    else{
        document.querySelector('.tip').innerHTML = '　'; 
        search_start(drive_type, car_type, bike_type, more_type);
    };
});