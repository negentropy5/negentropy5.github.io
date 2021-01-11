"use strict";

const arrays = [
  [
      [
          [0, 0, 0, 0],
          [1, 1, 1, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0],
      ],
      [
          [0, 1, 0, 0],
          [0, 1, 1, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0],
      ],
      [
          [0, 1, 0, 0],
          [1, 1, 1, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
      ],
      [
          [0, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0],
      ]
  ],
  [
      [
          [0, 0, 0, 0],
          [1, 1, 1, 0],
          [1, 0, 0, 0],
          [0, 0, 0, 0],
      ],
      [
          [1, 0, 0, 0],
          [1, 0, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
      ],
      [
          [0, 0, 0, 0],
          [0, 0, 1, 0],
          [1, 1, 1, 0],
          [0, 0, 0, 0],
      ],
      [
          [1, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0],
      ]
  ],
  [
      [
          [0, 0, 0, 0],
          [1, 1, 0, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0],
      ],
      [
          [0, 1, 0, 0],
          [1, 1, 0, 0],
          [1, 0, 0, 0],
          [0, 0, 0, 0],
      ],
      [
          [0, 0, 0, 0],
          [1, 1, 0, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0],
      ],
      [
          [0, 1, 0, 0],
          [1, 1, 0, 0],
          [1, 0, 0, 0],
          [0, 0, 0, 0],
      ]
  ],
  [
      [
          [0, 0, 0, 0],
          [0, 1, 1, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
      ],
      [
          [1, 0, 0, 0],
          [1, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0],
      ],
      [
          [0, 0, 0, 0],
          [0, 1, 1, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
      ],
      [
          [1, 0, 0, 0],
          [1, 1, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0],
      ]
  ],
  [
      [
          [0, 0, 0, 0],
          [1, 1, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 0],
      ],
      [
          [1, 1, 0, 0],
          [1, 0, 0, 0],
          [1, 0, 0, 0],
          [0, 0, 0, 0],
      ],
      [
          [0, 0, 0, 0],
          [1, 0, 0, 0],
          [1, 1, 1, 0],
          [0, 0, 0, 0],
      ],
      [
          [0, 1, 0, 0],
          [0, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
      ]
  ],
  [
      [
          [0, 0, 0, 0],
          [1, 1, 1, 1],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
      ],
      [
          [0, 0, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 1, 0],
      ],
      [
          [0, 0, 0, 0],
          [1, 1, 1, 1],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
      ],
      [
          [0, 0, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 1, 0],
      ]
  ],
  [
      [
          [0, 0, 0, 0],
          [0, 1, 1, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0],
      ],
      [
          [0, 0, 0, 0],
          [0, 1, 1, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0],
      ],
      [
          [0, 0, 0, 0],
          [0, 1, 1, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0],
      ],
      [
          [0, 0, 0, 0],
          [0, 1, 1, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0],
      ]
  ]
  ];
  const color =['lawngreen','lime','cyan','fuchsia','springgreen','#60f','#fc0']; 

  class Game {
    constructor() {
      this.g_ctx = game.getContext('2d');
      this.n_ctx = next.getContext('2d');
      this.states = [];
      this.state();
      this.num = 0;
      this.numAtTheTime = 0;
      this.memo = 0;
      this.score = 0;
    }

    initial() { // 最初のstart時に 一回だけ呼ばれる
      this.boxType = Math.floor(Math.random() * arrays.length);
      this.boxDire = 0;
      this.x = 4;
      this.y = 0;
      this.draw();
      this.func();
    }

    nextInitial() { // ブロック着地毎に呼ばれる
      this.boxType = this.nextType;
      this.boxDire = 0;
      this.x = 4;
      this.y = 0;
      this.draw();
    }

    nextBlock() { // 次のブロックを表示
      this.n_ctx.clearRect(0,0,160,160);

      this.nextType = Math.floor(Math.random() * 7); 
      this.n_ctx.fillStyle = color[this.nextType];
      this.n_ctx.strokeStyle = 'white';
      this.n_ctx.lineWidth = '4';
      arrays[this.nextType][this.boxDire].forEach((array, col) =>{
        array.forEach((a, row) =>{
          if(a === 1) {
            this.n_ctx.fillRect(40*row, 40*col, 40, 40);
            this.n_ctx.strokeRect(40*row, 40*col, 40, 40);
          }
        });
      });
    }
  
    state() {
      for(let col = 0; col < 23; col++) {
        this.states[col] = [];
        for(let row = 0; row < 12; row++) {
          if(row === 0 || row === 11 || col >= 21) {
            this.states[col][row] = 99;
          } else {
            this.states[col][row] = 100;
          }
        }
      }
    }

    draw() {
      this.g_ctx.fillStyle = color[this.boxType];
      this.g_ctx.strokeStyle = 'white';
      this.g_ctx.lineWidth = '4';
      arrays[this.boxType][this.boxDire].forEach((array, col) =>{
        array.forEach((a, row) =>{
          if(a === 1) {
            this.g_ctx.fillRect(40*(this.x + row), 40*(this.y + col), 40, 40);
            this.g_ctx.strokeRect(40*(this.x + row), 40*(this.y + col), 40, 40);
          }
        });
      });
    }
    
    erase() {
      this.g_ctx.globalCompositeOperation = 'destination-out';
      this.draw();
      this.g_ctx.globalCompositeOperation = 'source-over';
    }

    move(key) {
      this.erase();
      this.ex = this.x;
      this.ey = this.y;
      this.ed = this.boxDire;
      if(key === 'ArrowRight') this.x++; //右移動
      if(key === 'ArrowLeft') this.x--; // 左移動
      if(key === 'ArrowUp') { // ブロックの向き変え
        this.boxDire++;
        if(this.boxDire > 3) this.boxDire = 0;
      }
      if(this.inspection() === false) {
        this.x = this.ex;
        this.y = this.ey;
        this.boxDire = this.ed;
      }
      this.draw(); 
      if(key === 'ArrowDown') this.down();
    }

    down() {
      this.erase();

      this.y++; // 下移動
      if(this.inspection() !== false) {
        this.draw()
      } else {
        this.x = this.ex;
        this.y = this.ey;
        this.boxDire = this.ed;
        this.draw(); //draw()の後 initial(初期)基準に移る
      
        arrays[this.boxType][this.boxDire].forEach((array, col) =>{
          array.forEach((a, row)=>{
            if(a === 1) {
              this.states[this.y + col][this.x + row] = this.boxType;
            } // ★stateに数字(this.type)を代入して動けなくする
          });
        });

        this.totalscore(); // 揃った行を消す & 再描画
        this.nextInitial(); // 最初の位置に nextBlock を描画する

        if(this.inspection() === false) {
          alert(`game over: ${this.score}点です`);
          startBtn.click();
          return;
        }

        this.nextBlock(); // 次のブロックを表示する
      }
    }

    totalscore() {
      for(let col = 0; col < 21; col++) {
        if(!this.states[col].includes(100)) { // 100が1つも無ければ
          this.num++; // 揃った行の数
          this.states.splice(col, 1);
          this.states.unshift([...this.states[0]]);
        }
      }

      this.g_ctx.clearRect(0,0,480,880);

      this.states.forEach((state, col)=>{ // 再描画
        state.forEach((s, row)=>{
          if(this.states[col][row] !== 100 && this.states[col][row] !== 99) {
            this.g_ctx.strokeStyle = 'white';
            this.g_ctx.lineWidth = '4';
            this.g_ctx.fillStyle = color[this.states[col][row]];
            this.g_ctx.fillRect(40*row, 40*col, 40, 40);
            this.g_ctx.strokeRect(40*row, 40*col, 40, 40);
          }
        });
      });

      this.numAtTheTime = this.num - this.memo;
      switch (this.numAtTheTime) {
        case 1:
        this.score += 10;
        break;
        case 2:
        this.score += 50;
        break;
        case 3:
        this.score += 100;
        break;
        case 4:
        this.score += 1000;
        break;
      }
      this.memo = this.num;
      Score.innerHTML = this.score;
    }

    inspection() {
      let returnFalse = true;
      arrays[this.boxType][this.boxDire].forEach((array, col) =>{
        array.forEach((a, row) =>{
          if(a === 1) {
            if(this.states[this.y + col][this.x + row] !== 100) {
              returnFalse  = false;
            } // ↑1つでも false になると false になる
          }
        });
      });
      return returnFalse;
    }

    func() { 
      this.clearTime = setTimeout(() =>{
        this.func(); // funcとmoveが上下逆だとclearTimeoutの返り値が取れない
        this.move('ArrowDown');
      }, 1000);
    }

    delete() {
      clearTimeout(this.clearTime);
    }
  }

  const canvas = document.querySelectorAll('canvas');

  const gamen = new Game();
  
  // ゲームスタート
  let isStarted = false;
  const startBtn = document.querySelector('.startBtn')
  startBtn.addEventListener('click',()=>{
    if(!isStarted) {
      gamen.initial();
      gamen.nextBlock();
      startBtn.innerHTML = 'Delete';
      isStarted = true;
    } else {
      gamen.delete();
      gamen.state();
      gamen.g_ctx.clearRect(0,0,480,880);
      gamen.n_ctx.clearRect(0,0,160,160);
      gamen.score = 0;
      Score.innerHTML = '0';
      startBtn.innerHTML = 'Start';
      isStarted = false;
    }
  });
  
  // キー操作
  document.body.addEventListener('keydown', e =>{
    if(isStarted) {
      if(e.code=== 'ArrowLeft' || e.code=== 'ArrowRight' ||
      e.code=== 'ArrowDown' || e.code=== 'ArrowUp') gamen.move(e.code);
    }
  });

  // 画面操作
  const divBtn = document.querySelectorAll('.divBtn div');

  divBtn.forEach((btn, index)=>{
    btn.addEventListener('click', () =>{
      if(isStarted) {
        if(index === 0) gamen.move('ArrowUp');
        if(index === 1) gamen.move('ArrowLeft');
        if(index === 2) gamen.move('ArrowRight');
        if(index === 3) gamen.move('ArrowDown');
      }
    });
  });

  //背景ブロック 
  const b_ctx = canvas[0].getContext('2d'); 
  b_ctx.fillStyle = "#4285f4";
  b_ctx.strokeStyle = '#fff';
  b_ctx.lineWidth = '4';

  gamen.states.forEach((state, col)=>{
    state.forEach((sta, row)=>{
      if(sta === 99) {
        b_ctx.fillRect(40*row, 40*col, 40, 40);
        b_ctx.strokeRect(40*row, 40*col, 40, 40);
      }
    });
  });