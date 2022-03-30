let mItemBtn = document.querySelectorAll('.mitem__icon');
let myCou = 1;
let myArr = ['1']

function myMoviesFun() {
  mItemBtn.forEach((el) => {
    if (myCou == 1) {
      el.addEventListener('click', () => {
        myCou = 2
        let idd = el.id
        myArr.push(idd);
        for (let i = 0; i < movies.length; i++) {
          let myLi = document.createElement('li');
          myLi.className = "my__item";
          if (idd == movies[i].imdbId) {
            myLi.innerHTML = `
            <div class="my__img-box">
            <img class="my__img" src="${movies[i].youtubePoster}" alt="imgs" id='${movies[i].imdbId}'>
              <button class="mitem__icon m-ite-act" id="${movies[i].imdbId}">
                  <i class='bx bx-heart'></i>
                </button>
            </div>
            <p class="my__tit">${movies[i].language}</p>
            <h3 class="my__title">${movies[i].title}</h3>
            <div class="my__price_box">
              <div class="my__price d-flex align-items-center justify-content-between">
                <div class="my__price-box">
                  <span class="my__price-icon">
                    <i class='bx bxs-star'></i>
                  </span>
                  <span class="my__rating">${movies[i].imdbRating}</span>
                  </div>
                  </div>
                  <p class="my__janr my__tit">${movies[i].categories}</p>
                  </div>`;

            for (let j = 0; j < myArr.length; j++) {
              if (myArr[j] != idd) {
                el.classList.add('m-ite-act')
                myList.appendChild(myLi);
                console.log(myArr);
                console.log(myArr[j]);
                console.log(idd);
              }
            }
          }
        }
      })
    }
  })
}
myMoviesFun();