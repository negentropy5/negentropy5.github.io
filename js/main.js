"use strict";

const Source =[
  [
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000012.jpg',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000007.jpg',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000013.jpg',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000014.jpg',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000015.png',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000016.png',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000017.png',
  ],
  [
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000023.png',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000024.png',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000025.png',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000026.png',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000027.png',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000028.png',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000029.png',
  ],
  [
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000018.jpg',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000019.jpg',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000020.jpg',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000021.jpg',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000022.png',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000052.png',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000051.png',
  ],
  [
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000031.png',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000030.png',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000032.png',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000006.png',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000048.jpg',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000049.jpg',
    'https://userimg.teacup.com/userimg/9219.teacup.com/miike/img/bbs/0000050.png',
  ]
];
// < ★追加場所2 >

class Photo {
  constructor(source){

    this.source = source;
    this.loading = 0;
    this.memoindex = 0;
    this.isshowed = false;

    this.sectionPhoto = document.createElement('section');
    this.sectionPhoto.classList.add('photo');
    this.mainImg = document.createElement('img');
    this.mainImg.classList.add('mainImg');
    this.iconDiv = document.createElement('div');
    this.iconDiv.classList.add('iconDiv');
    
    this.startdiv = document.createElement('div');
    this.startdiv.classList.add('startdiv');
    this.stopdiv = document.createElement('div');
    this.stopdiv.classList.add('stopdiv');
    const leftdiv = document.createElement('div');
    leftdiv.classList.add('leftdiv');
    const rightdiv = document.createElement('div');
    rightdiv.classList.add('rightdiv');
    this.sectionPhoto.appendChild(this.startdiv);
    this.sectionPhoto.appendChild(this.stopdiv);
    this.sectionPhoto.appendChild(leftdiv);
    this.sectionPhoto.appendChild(rightdiv);
    this.sectionPhoto.appendChild(this.mainImg);
    main.appendChild(this.sectionPhoto);

    this.startdiv.classList.add('active');

    this.startdiv.addEventListener('click',()=>{
      this.startdiv.classList.remove('active');
      this.stopdiv.classList.add('active');
      this.slide();
    });

    this.stopdiv.addEventListener('click',()=>{
      this.stopdiv.classList.remove('active');
      this.startdiv.classList.add('active');
      this.slideStop();
    });

    leftdiv.addEventListener('click',()=>{
      this.memoindex--;
      if(this.memoindex < 0) this.memoindex = this.source.length - 1;
      this.move(this.icons[this.memoindex]);
    });

    rightdiv.addEventListener('click',()=>{
      this.memoindex++;
      this.rightMove();
    });
  }

  show() { // 配列の個数分しか呼ばれない
    this.icons = this.source.map((sour, index) =>{
      this.img = document.createElement('img');
      this.img.src = sour;
      if(index === 0) this.img.classList.add('active');
      this.iconDiv.appendChild(this.img);

      this.img.addEventListener('load',()=>{
        this.loading++;
        // 画像をすべて読み込んでから this.draw()!
        if(this.loading >= this.source.length) {
          this.draw();
          this.loading = 0;
        }
      });
      return this.img; //this.icons[]配列へ
    });
   
    this.icons.forEach((ICON, index) =>{
      ICON.addEventListener('click',()=>{
        this.move(ICON);

        this.memoindex = index;
      });
    });
  }

  draw() { // 配列の個数分しか押されない
    this.mainImg.src = this.source[0];
    this.sectionPhoto.appendChild(this.iconDiv);

    loading.classList.remove('active');
  }

  move(ICON) {
    this.icons.forEach(icon =>{
      icon.classList.remove('active');
    });
    ICON.classList.add('active');
    this.mainImg.src = ICON.src;
  }

  rightMove() { // 自動slide
    if(this.memoindex >= this.source.length) this.memoindex = 0;
    this.move(this.icons[this.memoindex]);
  }

  slide() {
    this.memoindex++;
    this.rightMove();
    this.stop = setTimeout(()=>{
      this.slide();
    }, 1200);
  }

  slideStop() {
    clearTimeout(this.stop);
    this.startdiv.classList.add('active');
    this.stopdiv.classList.remove('active');
  }
}

const main = document.querySelector('main');
const loading = document.querySelector('.loading');

const p = Source.map(S => new Photo(S));


const iframes = document.querySelectorAll('iframe');
const lists = document.querySelectorAll('header .nav1 li');
const sections = document.querySelectorAll('section');
const input = document.querySelector('#menu');

iframes[0].src = 'https://player.vimeo.com/video/386126987?title=0&byline=0&portrait=0';

lists[0].classList.add('active');

lists.forEach((list, index) =>{
  list.addEventListener('click', function(){
    sections.forEach(section =>{
      input.checked = false;
      section.classList.remove('active');
    });
    sections[index].classList.add('active');

    p.forEach(p => p.slideStop());

    function home() { // home
      iframes[0].src = 'https://player.vimeo.com/video/386126987?title=0&byline=0&portrait=0';
      iframes[1].src = '';
    }
    function bbs() { // bbs
      iframes[0].src = '';
      iframes[1].src = 'https://9219.teacup.com/miike/bbs';
    }
    function photo(P) { // photo
      iframes[0].src = '';
      iframes[1].src = '';
      if(!P.isshowed) {
        P.show(); // 各々1回だけshow()を呼ぶ
        loading.classList.add('active');
      }
      P.isshowed = true;
    }
    
    if(index === 0) home(); 
    if(index === 1) bbs(); 
    if(index === 2) photo(p[0]); 
    if(index === 3) photo(p[1]); 
    if(index === 4) photo(p[2]); 
    if(index === 5) photo(p[3]); 
    // < ★追加場所3 >

    lists.forEach(li =>{
      li.classList.remove('active');
    });
    this.classList.add('active');
  });
});