const movListONe = document.querySelector("#movListOne");
const movListTwo = document.querySelector("#movListTwo");
const movListThre = document.querySelector("#movListThre");
// const movListFour = document.querySelector("#movListFour");
const movImg = document.querySelector(".mitem__img");
const movListTit = document.querySelector(".mitem__tit");
const movListTitle = document.querySelector(".mitem__title");
const movListPrice = document.querySelector(".mitem__price");
const movListJanr = document.querySelector(".mitem__janr");
const movListRating = document.querySelector(".mitem__rating");

let modalBtn = document.querySelectorAll('.mitem__add-btn');
let modalBox = document.querySelector('.modall');
let modalRemoveBtn = document.querySelector('.modal-remov');

let newArr = [];
let sanoq = 0;

let n1 = Math.floor(Math.random() * movies.length - 10) + 1
let n2 = Math.floor(Math.random() * movies.length - 5) + 1
let n3 = Math.floor(Math.random() * movies.length - 9) + 1

for (let i = n1; i < n1 + 11; i++) {
  let li = document.createElement('li');
  li.className = "mov__item mitem";
  li.innerHTML = `
            <div class="mitem__box">
              <div class="mitem__img-box">
                <a class="text-decoration-none" href="https://www.netflix.com/uz-ru/">
                  <img class="mitem__img" src="${movies[i].youtubePoster}" alt="imgs">
                </a>
                <button class="mitem__icon">
                  <i class='bx bx-heart'></i>
                </button>
              </div>
              <p class="mitem__tit">${movies[i].language}, ${movies[i].year} - Current</p>
              <h3 class="mitem__title">${movies[i].title}</h3>
              <div class="mitem__price_box">
                <div class="mitem__price d-flex align-items-center justify-content-between">
                  <div class="mitem__price-box">
                    <span class="mitem__price-icon">
                      <i class='bx bxs-star'></i>
                    </span>
                    <span class="mitem__rating">${movies[i].imdbRating}</span>
                  </div>
                  <button class="mitem__add-btn mb-3" modalFun(${movies[i].imdbId})>More info</button>
                </div>
                <p class="mitem__janr mitem__tit">${movies[i].categories}</p>
              </div>
            </div>`;

  movListONe.appendChild(li);
}

for (let i = n2; i < n2 + 10; i++) {
  let li = document.createElement('li');
  li.className = "mov__item mitem";
  li.innerHTML = `
            <div class="mitem__box">
              <div class="mitem__img-box">
                <a class="text-decoration-none" href="https://www.netflix.com/uz-ru/">
                  <img class="mitem__img" src="${movies[i].youtubePoster}" alt="imgs">
                </a>
                <button class="mitem__icon">
                  <i class='bx bx-heart'></i>
                </button>
              </div>
              <p class="mitem__tit">${movies[i].language}, ${movies[i].year} - Current</p>
              <h3 class="mitem__title">${movies[i].title}</h3>
              <div class="mitem__price_box">
                <div class="mitem__price d-flex align-items-center justify-content-between">
                  <div class="mitem__price-box">
                    <span class="mitem__price-icon">
                      <i class='bx bxs-star'></i>
                    </span>
                    <span class="mitem__rating">${movies[i].imdbRating}</span>
                  </div>
                  <button class="mitem__add-btn mb-3" modalFun(${movies[i].imdbId})>More info</button>
                </div>
                <p class="mitem__janr mitem__tit">${movies[i].categories}</p>
              </div>
            </div>`;

  movListTwo.appendChild(li);
}

for (let i = n3; i < n3 + 11; i++) {
  let li = document.createElement('li');
  li.className = "mov__item mitem";
  li.innerHTML = `
            <div class="mitem__box">
              <div class="mitem__img-box">
                <a class="text-decoration-none" href="https://www.netflix.com/uz-ru/">
                  <img class="mitem__img" src="${movies[i].youtubePoster}" alt="imgs">
                </a>
                <button class="mitem__icon">
                  <i class='bx bx-heart'></i>
                </button>
              </div>
              <p class="mitem__tit">${movies[i].language}, ${movies[i].year} - Current</p>
              <h3 class="mitem__title">${movies[i].title}</h3>
              <div class="mitem__price_box">
                <div class="mitem__price d-flex align-items-center justify-content-between">
                  <div class="mitem__price-box">
                    <span class="mitem__price-icon">
                      <i class='bx bxs-star'></i>
                    </span>
                    <span class="mitem__rating">${movies[i].imdbRating}</span>
                  </div>
                  <button class="mitem__add-btn mb-3" modalFun(${movies[i].imdbId})>More info</button>
                </div>
                <p class="mitem__janr mitem__tit">${movies[i].categories}</p>
              </div>
            </div>`;

  movListThre.appendChild(li);

}

function modalFun() {
  let newArr = [];

  newArr = modalBtn.forEach((el) => {
    console.log(el);
  })

  modalBtn.addEventListener('click', () => {
    modalBox.style.zIndex = '500';
    modalBox.style.opacity = '1';
  })

  modalRemoveBtn.forEach((el) => {
    el.addEventListener('click', () => {
      modalBox.style.zIndex = '-100';
      modalBox.style.opacity = '0';
    })
  })
}

