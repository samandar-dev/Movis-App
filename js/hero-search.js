heroIconSearch.addEventListener('click', () => {
  heBox.classList.remove('d-none');
  heroFunc()
})

heRemBtn.addEventListener('click', () => {
  heroSearch.value = "";
  heBox.classList.add('d-none');
})

const myList = document.querySelector('.my__list');

heroSearch.addEventListener('keyup', heroFunc);

function heroFunc() {
  heroIconSearch.addEventListener('click', () => {

    mainSearchList.innerHTML = ''

    let inputValueHero = heroSearch.value.toLocaleLowerCase();
    let lisNull = true

    movies.forEach((item) => {
      let movTitle = item.title;
      let li = document.createElement('li');
      li.className = "mov__item mitem";

      if (movTitle.toLocaleLowerCase().indexOf(inputValueHero) != -1 && heroSearch.value.length >= 1) {
        console.log(inputValueHero);
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

        heList.appendChild(li);
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
}