import { list_PH, list_SR, list_DR, list_ML, list_PA, list_PW, list_TA } from '../list/rg_list.js';

//法規
class Page{
    constructor(
        name_simple,
        name_title,
        name_all,
        name_short,
        revision,
        icon,
        href,
        list
        ){
        this.name_simple = name_simple;
        this.name_title = name_title;
        this.name_all = name_all;
        this.name_short = name_short;
        this.revision = revision;
        this.icon = icon;
        this.href = href;
        this.list = list;
    }
}

export const pages = {
    PH: new Page(
        'PH',
        '處罰條例',
        '《道路交通管理處罰條例》',
        '《處罰條例》',
        '民國 112 年 05 月 03 日',
        '/icons/icon_policeman_b.png',
        '/pages/regulations.html?r=PH',
        list_PH,
        ),
    SR: new Page(
        'SR', 
        '安全規則',
        '《道路交通安全規則》', 
        '《安全規則》',
        '民國 113 年 01 月 18 日',
        '/icons/icon_stop_b.png',
        '/pages/regulations.html?r=SR',
        list_SR
        ),
    DR: new Page(
        'DR', 
        '處理細則',
        '《違反道路交通管理事件統一裁罰基準及處理細則》', 
        '《處理細則》', 
        '民國 112 年 11 月 24 日',
        '/icons/icon_cars_b.png',
        '/pages/regulations.html?r=DR',
        list_DR
        ),
    ML: new Page(
        'ML', 
        '設置規則',
        '《道路交通標誌標線號誌設置規則》', 
        '《設置規則}》',
        '民國 112 年 02 月 23 日',
        '/icons/icon_curbExtension_b.png',
        '/pages/regulations.html?r=ML',
        list_ML
        ),
    PA: new Page(
        'PA', 
        '警職法',
        '《警察職權行使法》', 
        '《警職法》',
        '民國 100 年 04 月 27 日',
        '/icons/icon_police_b.png',
        '/pages/regulations.html?r=PA',
        list_PA
        ),
    PW: new Page(
        'PW', 
        '警械條例',
        '《警械使用條例》', 
        '《警械條例》',
        '民國 111 年 10 月 19 日',
        '/icons/icon_gun_b.png',
        '/pages/regulations.html?r=PW',
        list_PW
        ),
    TA: new Page(
        'TA', 
        '事故辦法',
        '《道路交通事故處理辦法》', 
        '《事故辦法》',
        '民國 113 年 02 月 17 日 ',
        '/icons/icon_accident_b.png',
        '/pages/regulations.html?r=TA',
        list_TA
        ),
    DL: new Page(
        'DL',
        '駕照違規',
        '駕照違規速查',
        '駕照違規',
        '民國 113 年 04 月 08 日',
        '/icons/icon_DL.png',
        '/pages/driving_license.html',
        ''
        ),
    CL: new Page(
        'CL',
        '牌照違規',
        '牌照違規速查',
        '牌照違規',
        '民國 113 年 04 月 08 日',
        '/icons/icon_CL.png',
        '/pages/car_license.html',
        ''
        ),
    about: new Page(
        'about',
        '關於',
        '關於本程式',
        '關於',
        '民國 113 年 04 月 08 日',
        '/icons/icon_about.png',
        '/pages/about.html',
        ''
        ),
    feedback: new Page(
        'feedback',
        '意見回饋',
        '意見回饋',
        '意見回饋',
        '民國 113 年 04 月 08 日',
        '/icons/icon_message_b.png',
        'https://forms.gle/egpyVq19MYJAydS28',
        ''
        ),
    search: new Page(
        'search',
        '搜尋',
        '搜尋',
        '搜尋',
        '民國 113 年 04 月 08 日',
        '/icons/icon_search_2b.png',
        '/pages/search.html',
        ''
        ),
    index: new Page(
        'index',
        '首頁',
        '首頁',
        '首頁',
        '民國 113 年 04 月 08 日',
        '/icons/icon_home_b.png',
        '/index.html',
        ''
        )
}

// export const pages_list{

// }
// class Page{
//     constructor(
//         name_title,
//         name_all,
//         icon,
//         href
//     ){
//         this.name_title = name_title;
//         this.name_all = name_all;
//         this.icon = icon;
//         this.href = href;
//     }
// };
