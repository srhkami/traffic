import {violation_list, dispose_list, violation_code_a, violation_code_b, violation_code_c} from './cl_list.js'

// 函式：搜尋開始
function search_start(a_type, b_type, is_same, is_stop){
    let x = 0;
    if (is_stop == 1){
        x += 112;
    }
    if (a_type == 7){
        x += 0;
    }
    else if (is_same == 0 && a_type != 7){
        x += a_type*8;
    }
    else if (is_same == 1 && a_type != 7){
        x = x + 48 + a_type*8;
    }
    x += b_type;
    const code_a = violation_code_a[x];
    const code_b = violation_code_b[x];
    const code_c = violation_code_c[x];
    document.querySelector('#cl_ot_a1').innerHTML = violation_list[code_a];
    document.querySelector('#cl_ot_a2').innerHTML = dispose_list[code_a];
    document.querySelector('#cl_ot_b1').innerHTML = violation_list[code_b];
    document.querySelector('#cl_ot_b2').innerHTML = dispose_list[code_b];
    document.querySelector('#cl_ot_c1').innerHTML = violation_list[code_c];
    document.querySelector('#cl_ot_c2').innerHTML = dispose_list[code_c];
}

// 主程式開始
document.querySelector('#bt_ok').addEventListener('click',(buttin)=>{
    const a_type = Number(document.querySelector('#a_type').value);
    const b_type = Number(document.querySelector('#b_type').value);
    const is_same = Number(document.querySelector('#is_same').value);
    const is_stop = Number(document.querySelector('#is_stop').value);
    if (a_type==0 || b_type==0){
        document.querySelector('.tip').innerHTML = '選項請勿留空！'; 
    }
    else{
        document.querySelector('.tip').innerHTML = '　'; 
        search_start(a_type, b_type, is_same, is_stop);
    };
});