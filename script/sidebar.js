import {r_PH, r_DR, r_SR ,r_ML, page_DL, page_CL, page_about} from './list/pages.js'

//主程式開始
//替換

export const html_sidebar = 
`
<div class="bk_hideSidebar">
            <label for="btn_hideSidebar" class="space_hideSidebar">
              <img class="icon_menu icon_hide_menu" src="../icons/icon_menu.png" width="30px" alt="">
              選單
            </label>
            <button id="btn_hideSidebar" class="btn_header btn_menu">
              <img src="../icons/icon_cross_w.png" width="30px" alt="關閉" >
            </button>
          </div>
          <div class="bk_app_name">
            <h1 class="app_name">尚無名稱</h1>
          </div>
          <div class="bk_app_list">
            <input type="checkbox" name="check_1" id="check_1" class="check_menu">
            <div class="bk_menu menu_1">
              <label class="bk_menu_class" for="check_1">
                <img class="icon_class" src="../icons/icon_law.png" alt="">
                <p class="text_class">法規彙整</p>
                <img class="icon_class_open" src="../icons/icon_go.png" alt="">
              </label>
              <ul class="list_menu">
                <li class="list_menu_value">
                  <a class="page_link" href="../pages/regulations.html?r=PH">
                    <img class="icon_menu" src="${r_PH.icon_src}" alt="">
                    <p class="text_menu">${r_PH.name_title}</p>
                  </a>
                </li>
                <li class="list_menu_value">
                  <a class="page_link" href="../pages/regulations.html?r=SR">
                    <img class="icon_menu" src="${r_SR.icon_src}" alt="">
                    <p class="text_menu">${r_SR.name_title}</p>
                  </a>
                </li>
                <li class="list_menu_value">
                  <a class="page_link" href="../pages/regulations.html?r=DR">
                    <img class="icon_menu" src="${r_DR.icon_src}" alt="">
                    <p class="text_menu">${r_DR.name_title}</p>
                  </a>
                </li>
                <li class="list_menu_value">
                  <a class="page_link" href="../pages/regulations.html?r=ML">
                  <img class="icon_menu" src="${r_ML.icon_src}" alt="">
                  <p class="text_menu">${r_ML.name_title}</p>
                  </a>
                </li>
              </ul>
            </div>
            <input type="checkbox" name="check_2" id="check_2" class="check_menu">
            <div class="bk_menu menu_2">
              <label class="bk_menu_class" for="check_2">
                <img class="icon_class" src="../icons/icon_quickSearch.png" alt="">
                <p class="text_class">違規速查</p>
                <img class="icon_class_open" src="../icons/icon_go.png" alt="">
              </label>
              <ul class="list_menu">
                <li class="list_menu_value">
                  <a class="page_link" href="../pages/driving_license.html">
                  <img class="icon_menu" src="${page_DL.icon_src}" alt="">
                  <p class="text_menu">${page_DL.name_title}</p>
                  </a>
                </li>
                <li class="list_menu_value">
                  <a class="page_link" href="../pages/car_license.html">
                  <img class="icon_menu" src="${page_CL.icon_src}" alt="">
                  <p class="text_menu">${page_CL.name_title}</p>
                  </a>
                </li>
              </ul>
            </div>
            <input type="checkbox" name="check_3" id="check_3" class="check_menu">
            <div class="bk_menu menu_3">
              <label class="bk_menu_class" for="check_3">
                <img class="icon_class" src="../icons/icons_file.png" alt="">
                <p class="text_class">更多</p>
                <img class="icon_class_open" src="../icons/icon_go.png" alt="">
              </label>
              <ul class="list_menu">
                <li class="list_menu_value">
                  <a class="page_link" href="../pages/about.html">
                  <img class="icon_menu" src="${page_about.icon_src}" alt="">
                  <p class="text_menu">${page_about.name_title}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- <input type="checkbox" id="sidebar_active" name=""> -->
`