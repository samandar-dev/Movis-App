let heBtnArr = [];
let heCount = 3;

// let heBtn = document.createElement('button');
const heBTns = document.querySelectorAll('.h-btn');
const heBtnBox = document.querySelector('.he-box__w');
let num = 30;

let n = 0;
let nn = 0;

heBTns.forEach((el) => {
  el.addEventListener('click', () => {
    heList.innerHTML = '';
    addItems();
    modalFun();

    if (heCount == 14) {
      heBoxOv.style.width = '88%';
      hSpan.remove();
    }

    el.classList.add('act-btn');

    if (heCount < 16) {
      heCount++;
      heBtnBox.style.transform = `translateX(-${num}px)`;
    }
    num += 30
  });
  el.classList.remove('act-btn');
})
