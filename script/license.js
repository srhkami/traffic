import {violation_list, violation_again_list, violation_text,violation_code} from './list.js'

function search_start(drive_type, car_type, bike_type, again){
    let x = 0;
    x = x + (drive_type-1)*42;
    x = x + (car_type-1)*6;
    x = x + bike_type;
    const code = violation_code[x-1];
    if (again == false) {
        document.querySelector('.output_title').innerHTML = violation_list[code];
        document.querySelector('.output_text').innerHTML = violation_text[code];
    }
    else{
        document.querySelector('.output_title').innerHTML = violation_again_list[code];
        document.querySelector('.output_text').innerHTML = '（五年內二次以上）' + violation_text[code];
    }
    
};

// 主程式開始
document.querySelector('#bt_ok').addEventListener('click',(buttin)=>{
    let drive_type = Number(document.querySelector('#drive_type').value);
    let car_type = Number(document.querySelector('#car_type').value);
    let bike_type = Number(document.querySelector('#bike_type').value);
    const again = document.querySelector('#check_again').checked;
    console.log(again);
    if (drive_type==0 || car_type==0 || bike_type==0){
        console.log('選項為空！');
    }
    else{
        search_start(drive_type, car_type, bike_type, again);
    };
});