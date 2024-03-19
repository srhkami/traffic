import {violation_list, violation_again_list, violation_text,violation_code} from './list.js'

function search_start(drive_type, car_type, bike_type, more_type){
    let x = 0;
    x = x + (drive_type-1)*42;
    x = x + (car_type-1)*6;
    x = x + bike_type;
    const code = violation_code[x-1];
    if (more_type == 0 || more_type == 2) {
        document.querySelector('.output_title').innerHTML = violation_list[code];
        document.querySelector('.output_text').innerHTML = violation_text[code];
    }
    else{
        document.querySelector('.output_title').innerHTML = violation_again_list[code];
        document.querySelector('.output_text').innerHTML = violation_text[code];
    }
    
};

// 主程式開始
document.querySelector('#bt_ok').addEventListener('click',(buttin)=>{
    const drive_type = Number(document.querySelector('#drive_type').value);
    const car_type = Number(document.querySelector('#car_type').value);
    const bike_type = Number(document.querySelector('#bike_type').value);
    const more_type = Number(document.querySelector('#more_type').value);
    console.log(more_type)
    if (drive_type==0 || car_type==0 || bike_type==0){
        console.log('選項為空！');
    }
    else{
        search_start(drive_type, car_type, bike_type, more_type);
    };
});