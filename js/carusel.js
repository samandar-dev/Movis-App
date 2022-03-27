let carBtnleft = document.querySelectorAll('.mlis__btn1');
let carBtnright = document.querySelectorAll('.mlis__btn2');
let count1 = 0;
let count2 = 0;
let count3 = 0;

carBtnright.forEach((el, index) => {
  let n = index
  if (n == 0) {
    el.addEventListener('click', () => {
      count1++;
      if (count1 == 1) {
        movListONe.style.transform = 'translateX(-25%)';
      } else if (count1 == 2) {
        movListONe.style.transform = 'translateX(-50%)';
      } else if (count1 == 3) {
        movListONe.style.transform = 'translateX(-75%)';
      } else if (count1 == 4) {
        movListONe.style.transform = 'translateX(-100%)';
      }
      else {
        movListONe.style.transform = 'translateX(0)';
        count1 = 0
      }
    })
  }

  if (n == 1) {
    el.addEventListener('click', () => {
      count2++;
      if (count2 == 1) {
        movListTwo.style.transform = 'translateX(-25%)';
      } else if (count2 == 2) {
        movListTwo.style.transform = 'translateX(-50%)';
      } else if (count2 == 3) {
        movListTwo.style.transform = 'translateX(-75%)';
      } else if (count2 == 4) {
        movListTwo.style.transform = 'translateX(-100%)';
      }
      else {
        movListTwo.style.transform = 'translateX(0)';
        count2 = 0
      }
    })
  }

  if (n == 2) {
    el.addEventListener('click', () => {
      count3++;
      if (count3 == 1) {
        movListThre.style.transform = 'translateX(-25%)';
      } else if (count3 == 2) {
        movListThre.style.transform = 'translateX(-50%)';
      } else if (count3 == 3) {
        movListThre.style.transform = 'translateX(-75%)';
      } else if (count3 == 4) {
        movListThre.style.transform = 'translateX(-100%)';
      }
      else {
        movListThre.style.transform = 'translateX(0)';
        count3 = 0
      }
    })
  }
})

carBtnleft.forEach((el, index) => {
  let n = index
  if (n == 0) {
    el.addEventListener('click', () => {
      if (count1 == 1) {
        movListONe.style.transform = 'translateX(0)';
      } else if (count1 == 2) {
        movListONe.style.transform = 'translateX(-25%)';
      } else if (count1 == 3) {
        movListONe.style.transform = 'translateX(-50%)';
      } else if (count1 == 4) {
        movListONe.style.transform = 'translateX(-75%)';
      }
      else {
        movListONe.style.transform = 'translateX(0)';
        count1 = 0
      }
      count1--;
    })
  }

  if (n == 1) {
    el.addEventListener('click', () => {
      if (count2 == 1) {
        movListTwo.style.transform = 'translateX(0)';
      } else if (count2 == 2) {
        movListTwo.style.transform = 'translateX(-25%)';
      } else if (count2 == 3) {
        movListTwo.style.transform = 'translateX(-50%)';
      } else if (count2 == 4) {
        movListTwo.style.transform = 'translateX(-75%)';
      }
      else {
        movListTwo.style.transform = 'translateX(0)';
        count2 = 0
      }
      count2--;
    })
  }

  if (n == 2) {
    el.addEventListener('click', () => {
      if (count3 == 1) {
        movListThre.style.transform = 'translateX(0)';
      } else if (count3 == 2) {
        movListThre.style.transform = 'translateX(-25%)';
      } else if (count3 == 3) {
        movListThre.style.transform = 'translateX(-50%)';
      } else if (count3 == 4) {
        movListThre.style.transform = 'translateX(-75%)';
      }
      else {
        movListThre.style.transform = 'translateX(0)';
        count3 = 0
      }
      count3--;
    })
  }
})
