import { pages } from '../base/pages.js'



function load_quick() {
  let bookmarkOption = [];
  if (localStorage.getItem('bookmark')) {
    bookmarkOption = JSON.parse(localStorage.getItem('bookmark'));
  }
  let quickOption = bookmarkOption.slice(0, 4)
  let html = '';
  if (quickOption.length == 0){
    html =`
    <div class="col-12 d-flex">
      <a href="./pages/about.html" class="btn btn-outline-secondary mx-auto">
          <img class="i-15 mx-auto" src="./icons/icon_setting.png" alt="">
          點此前往設定
      </a>
    </div>
    `;
  }
  else{
    quickOption.forEach(name => {
      html += `
        <div class="col-3">
          <a href=".${pages[name].href}" class="d-flex">
              <img class="img-fluid mx-auto" src=".${pages[name].icon}" alt="${pages[name].title}">
          </a>
        </div>
        `;
    })
  }
  $('#quickEnter').html(html);
}

load_quick();


