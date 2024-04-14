import {pages} from './pages.js';

// 版本號(大版本.小版本.日+時)
const app_ver =`1.02.1500 (Beta)`;

// 公告
const notice =`
    113/04/14更新內容： 
    <br> 「快速導航」功能現已提供自訂選項！
    <br>
    <br>感謝各位學長姐使用！
    <br>此程式仍有許多不足，
    <br>若有任何問題或寶貴意見，
    <br>歡迎使用選單中「更多→意見回饋」，
    <br>亦徵求有志之士一同參與製作！
`;

//尚未實現
const future =`
        已知問題：
    <br>◎ 視窗高度過窄時會跑版
    <br>
    <br>預計加入的功能：
    <br>◎　書籤功能
    <br>◎　設置規則之圖示
    <br>◎　法規連結相關函釋
    <br>◎　各類常用SOP、網站
    <br>　……歡迎提供其他建議！
`;

// 更新日誌
const updata_text =`
    <p>※　1.0：
    <br>建立程式基礎功能及介面。
    <br>加入「駕照違規」及「牌照違規」功能。
    <br>加入「法規」頁面及「搜尋」功能。   
    </p>
    <p>
    ※　1.02：
    <br>使用Bootstrap5逐步汰程式碼。
    <br>加入自訂快速導航功能。
    </p>
`;

// 收錄法規
const collection =`
    <p class="collection_text">◎${pages.PH.name_all}
    <br>修訂日期：${pages.PH.revision}
    <br>程式簡稱：${pages.PH.name_short}</p>
    <p class="collection_text">◎${pages.SR.name_all}
    <br>修訂日期：${pages.SR.revision}
    <br>程式簡稱：${pages.SR.name_short}</p>
    <p class="collection_text">◎${pages.DR.name_all}
    <br>修訂日期：${pages.DR.revision}
    <br>程式簡稱：${pages.DR.name_short}</p>
    <p class="collection_text">◎${pages.ML.name_all}
    <br>修訂日期：${pages.ML.revision}
    <br>程式簡稱：${pages.ML.name_short}</p>
    <p class="collection_text">◎${pages.TA.name_all}
    <br>修訂日期：${pages.TA.revision}
    <br>程式簡稱：${pages.TA.name_short}</p>
    <p class="collection_text">◎${pages.PA.name_all}
    <br>修訂日期：${pages.PA.revision}
    <br>程式簡稱：${pages.PA.name_short}</p>
    <p class="collection_text">◎${pages.PW.name_all}
    <br>修訂日期：${pages.PW.revision}
    <br>程式簡稱：${pages.PW.name_short}</p>
`;

// 刷新首頁
$('#notice').html(notice);
$('#future').html(future);
$('#app_ver').html(app_ver);
$('#updata_text').html(updata_text);
$('#collection').html(collection);
