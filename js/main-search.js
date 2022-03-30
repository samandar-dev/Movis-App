
const selecCategor = document.querySelector('#selec-categor');
const selecYear1 = document.querySelectorAll('#selec-years1');

const formSearchBtn = document.querySelector('.form-search-btn');

const mainSearchBox = document.querySelector('.main__search-boxx');
const mainSearchList = document.querySelector('.msearch__list');
const mainSearchCloseBtn = document.querySelector('.msearch-close-btn');
const mainSearchText = document.querySelector('.msearch__text');
const movListBox = document.querySelectorAll('.mov__list_box');

formInput.addEventListener('keyup', formFunc);
// selecCategor.addEventListener('click', formFunc);
// selecYear1.addEventListener('click', formFunc);

// let formArr = []

function formFunc() {
  formSearchBtn.addEventListener('click', () => {


    movListBox.forEach((items) => {
      items.classList.add('d-none');
    })

    mainSearchBox.classList.remove('d-none');
    mainSearchList.innerHTML = ''

    let inputValueMain = formInput.value.toLocaleLowerCase();
    let categorss = selecCategor.value;
    // let years =
    let lisNull = true

    movies.forEach((item) => {
      let movTitle = item.title;
      let li = document.createElement('li');
      li.className = "mov__item mitem";

      if (movTitle.toLocaleLowerCase().indexOf(inputValueMain) != -1 && formInput.value.length >= 1 && categorss == 'All') {
        console.log(selecYear1.value);
        console.log('yesssss');
        li.innerHTML = `
              <div class="mitem__box">
                <div class="mitem__img-box">
                  <img class="mitem__img" src="${item.youtubePoster}" alt="imgs" id='${item.imdbId}'>
                  <button class="mitem__icon" id="${item.imdbId}">
                    <i class='bx bx-heart'></i>
                  </button>
                </div>
                <p class="mitem__tit">${item.language}, ${item.year} - Current</p>
                <h3 class="mitem__title">${item.title}</h3>
                <div class="mitem__price_box">
                  <div class="mitem__price d-flex align-items-center justify-content-between">
                    <div class="mitem__price-box">
                      <span class="mitem__price-icon">
                        <i class='bx bxs-star'></i>
                      </span>
                      <span class="mitem__rating">${item.imdbRating}</span>
                    </div>
                  </div>
                  <p class="mitem__janr mitem__tit">${item.categories}</p>
                </div>
              </div>`;

        mainSearchList.appendChild(li);
        lisNull = false
      }
      else {
        console.log('No');
      }
    })

    if (lisNull == true && formInput.value.length >= 1) {
      mainSearchText.classList.remove('d-none');
    } else {
      mainSearchText.classList.add('d-none');
    }
  })

  mainSearchCloseBtn.addEventListener('click', () => {
    movListBox.forEach((items) => {
      items.classList.remove('d-none');
    })
    mainSearchBox.classList.add('d-none');
    mainSearchList.innerHTML = ''
  })
}