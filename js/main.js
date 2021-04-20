class Photo {
  constructor(Source) {
      this.Source = Source;     // 画像配列
      this.is_readed = false;   // インスタンス読み込み制御
      this.icons = [];          // 画面切り替えするための配列
      this.icon_current = 0;    // 読み込んだimgの数
      this.opacity_current = 0; // active classの付け外し
      this.clear_time_out;      // timerの停止
      this.timer_go = false;    // timerが走っているか判定

      //sectionだけ作っておかないとactiveの付け外しでエラーになる
      this.photo_section = document.createElement('section');
      this.photo_section.classList.add('photo_section');
      main.appendChild(this.photo_section);
  }

  show() {
      // if(this.is_readed === true) return;
      this.main_img_div = document.createElement('div');
      this.main_img_div.classList.add('main_img_div');
      this.main_img = document.createElement('img');
      this.main_img.classList.add('main_img');
      // this.main_img.src = this.Source[0]; //draw()へ移動
      this.play_div = document.createElement('div');
      this.play_div.classList.add('play_div');
      this.left_div = document.createElement('div');
      this.left_div.classList.add('left_div');
      this.right_div = document.createElement('div');
      this.right_div.classList.add('right_div');
      this.play_div.classList.add('play_div');
      this.play_div.textContent = 'Play';
      this.main_img_div.appendChild(this.main_img);
      this.main_img_div.appendChild(this.play_div);
      this.main_img_div.appendChild(this.left_div);
      this.main_img_div.appendChild(this.right_div);
      
      this.icon_div = document.createElement('div');
      this.icon_div.classList.add('icon_div');

      this.Source.forEach(source =>{
          this.icon_img = document.createElement('img');
          this.icon_img.src = source;

          this.icons.push(this.icon_img); //this.icons[]へ

          this.icon_div.appendChild(this.icon_img);
      });

      // this.icons[]
      this.icons.forEach((icon, index) =>{
          // imgをすべて読み込んだ後に draw()
          icon.addEventListener('load', () =>{

            this.icon_current++;
            if(this.icons.length === this.icon_current) {
              loading_icon.classList.remove('active'); //★loading 閉
              this.draw();
              this.icon_current = 0;

              // 初期の状態↓(先頭のimgだけopacity 1)
              this.icons[this.opacity_current].classList.add('active');
            }
          });

          // 直接、画面をタッチして main_img の切り替え処理
          icon.addEventListener('click', () =>{
            this.main_img.src = this.Source[index];
            // active classの付け外し処理↓
            this.icons[this.opacity_current].classList.remove('active');
            this.opacity_current = index;
            this.icons[this.opacity_current].classList.add('active');
          });
      });

      // 右スライド
      this.right_div.addEventListener('click',()=>{
          let target = this.opacity_current + 1;
          if(target === this.icons.length) target = 0;
          this.icons[target].click();
      });
      // 左スライド
      this.left_div.addEventListener('click',()=>{
          let target = this.opacity_current - 1;
          if(target < 0) target = this.icons.length - 1;
          this.icons[target].click();
      });
      // 自動スライド
      this.play_div.addEventListener('click',()=>{
          if(!this.timer_go) {
              this.play_div.textContent = 'Stop';
              this.auto_func();
              this.timer_go = true;
              return;
          } 
          this.play_div.textContent = 'Play';
          clearTimeout(this.clear_time_out);
          this.timer_go = false;
      });

      // this.photo_section.appendChild(this.main_img_div); //draw()へ移動
      // this.photo_section.appendChild(this.icon_div); //draw()へ移動
  }

  auto_func() {
      this.right_div.click();
      this.clear_time_out = setTimeout(()=>{
          this.auto_func();
      }, 1000);
  }

  draw() {
      this.main_img.src = this.Source[0];

      this.photo_section.appendChild(this.main_img_div);
      this.photo_section.appendChild(this.icon_div);
  }

  is_readed_func() { // カプセル化
      this.is_readed = true;
  }
}

const main = document.querySelector('main');
const loading_icon = document.querySelector('.loading_icon');
const iframes = document.querySelectorAll('iframe');

const sources = Sources.map(Source => new Photo(Source)); // インスタンス


function home() { // home
    iframes[0].src = 'https://player.vimeo.com/video/386126987?title=0&byline=0&portrait=0';
    iframes[1].src = '';
  }
  function bbs() { // bbs
    iframes[0].src = '';
    iframes[1].src = 'https://9219.teacup.com/miike/bbs';
  }

// 各インスタンス「一回」しか呼ばれない
function class_show(S) {
    if(S.is_readed) return;
    //↓各々一回ずつ↓
    loading_icon.classList.add('active');//★loading 開
    S.show();
    S.is_readed_func(); // カプセル化
}

let current_index  = 0;
let current_index2 = 0;
const lis = document.querySelectorAll('header li');
lis.forEach((li, index) =>{
    li.addEventListener('click',()=>{
        input.checked = false;

        if(index === 0) home(); 
        if(index === 1) bbs(); 
        // 「一回ずつ」インスタンスを作る
        if(index === 2) class_show(sources[0]);
        if(index === 3) class_show(sources[1]);
        if(index === 4) class_show(sources[2]);
        if(index === 5) class_show(sources[3]);
        // 追加場所.3★

        // sectionを表示させる
        const sections = document.querySelectorAll('section');
        sections[current_index].classList.remove('active');
        current_index = index;
        sections[current_index].classList.add('active');

        // clickしたliを黄色にする
        lis[current_index2].classList.remove('active');
        current_index2 = index;
        lis[current_index].classList.add('active');
    });
});