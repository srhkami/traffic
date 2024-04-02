//收錄法規
class Collection{
    constructor(
        name_simple,
        name_title,
        name_all,
        name_short,
        revision_data,
        icon_src
        ){
        this.name_simple = name_simple;
        this.name_title = name_title;
        this.name_all = name_all;
        this.name_short = name_short;
        this.revision_data = revision_data;
        this.icon_src = icon_src;
    }
};

export const r_PH = new Collection(
    'PH',
    '處罰條例',
    '《道路交通管理處罰條例》',
    '《處罰條例》',
    '民國 112 年 05 月 03 日',
    '../icons/icon_policeman_b.png'
    );
export const r_SR = new Collection(
    'SR', 
    '安全規則',
    '《道路交通安全規則》', 
    '《安全規則》', 
    '民國 113 年 01 月 18 日',
    '../icons/icon_stop_b.png'
    );
export const r_DR = new Collection(
    'DR', 
    '處理細則',
    '《違反道路交通管理事件統一裁罰基準及處理細則》', 
    '《處理細則》', 
    '民國 112 年 11 月 24 日',
    '../icons/icon_cars_b.png'
    );
export const r_ML = new Collection(
    'ML', 
    '設置規則',
    '《道路交通標誌標線號誌設置規則》', 
    '《設置規則》', 
    '民國 112 年 02 月 23 日',
    '../icons/icon_street_b.png'
    );

//其他頁面
class Page{
    constructor(
        name_title,
        icon_src
    ){
        this.name_title = name_title;
        this.icon_src = icon_src;
    }
};

export const page_DL = new Page(
    '駕照違規',
    '../icons/icon_DL.png'
);
export const page_CL = new Page(
    '牌照違規',
    '../icons/icon_CL.png'
);
export const page_about = new Page(
    '關於',
    '../icons/icon_about.png'
);

