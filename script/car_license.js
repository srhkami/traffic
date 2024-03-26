import {violation_list, dispose_list, violation_code_a, violation_code_b, violation_code_c} from './cl_list.js'


//函式：鎖定判斷
function lock_judge(){
    if (document.querySelector('#is_same').value == '0'){
        document.querySelector('#b_type').disabled = true;
        if (document.querySelector('#a_type').value == '1'){
            document.querySelector('#b_type').value = '1';
        }
        else if (document.querySelector('#a_type').value == '2'){
            document.querySelector('#b_type').value = '3';
        }
        else if (document.querySelector('#a_type').value == '5'){
            document.querySelector('#b_type').value = '4';
        }
        else{
            document.querySelector('#b_type').disabled = false;
            document.querySelector('#b_type').value = '0';
        }
    }  
}


//函式：車牌狀態的鎖定判定
function a_type_judge(){
    if (document.querySelector('#a_type').value == '3' || document.querySelector('#a_type').value == '7'){
        document.querySelector('#is_same').value = '1';
        document.querySelector('#is_same').disabled = true;
        document.querySelector('#b_type').disabled = false;
    }
    else{
        document.querySelector('#is_same').disabled = false;
    }
    lock_judge();
    if (document.querySelector('#a_type').value == '4'){
        alert('用以「變造」之號牌，經還原後，若與車體一致，請在選擇『相符』；若是不同車輛之號牌，請選擇『不相符』')
    }
}

//函式：是否相符的鎖定判定
function is_same_judge(){
    if (document.querySelector('#is_same').value == '0'){
        document.querySelector('#b_type').disabled = true;
    }
    else{
        document.querySelector('#b_type').disabled = false;
    }
    lock_judge();
}





//函式：搜尋按鈕監聽器
function ok_click(){
    document.querySelector('#bt_ok').addEventListener('click',(button)=>{
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
}

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
document.querySelector('#a_type').addEventListener('change',()=> a_type_judge())
document.querySelector('#is_same').addEventListener('change',()=> is_same_judge())
ok_click();

