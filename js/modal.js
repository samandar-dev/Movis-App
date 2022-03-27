const movImg = document.querySelectorAll(".mitem__img");
let modalBox = document.querySelector('.modall');
let modalInnerBox = document.createElement('div');
modalInnerBox.className = "modal__inner d-flex";

function modalFun() {
  for (let i = 0; i < movImg.length; i++) {
    movImg[i].addEventListener('click', () => {
      let idd = movImg[i].id

      for (let j = 0; j < movies.length; j++) {
        if (idd == movies[j].imdbId) {
          modalInnerBox.innerHTML = `
              <button class="modal-remov">x</button>
              <div class="modal__img-box">
                <h3 class="modal__title">${movies[j].title}</h3>
                <a class="img-link text-decoration-none" href="${movies[j].imdbPage}">
                  <img class="modal__img" src="${movies[j].youtubePoster}" alt="imgs" id='${movies[j].imdbId}'>
                </a>
              </div>
              <div class="modal__desc">
                <div class="modal__cont">
                  <div class="mitem__price d-flex align-items-center">
                    <img src="images/imd.svg" alt="img" width="60">
                    <span class="mitem__price-icon m-0 ms-4"><i class='bx bxs-star fs-5'></i></span>
                    <span class="mitem__rating fs-5 fw-bold">${movies[j].imdbRating}</span>
                  </div>
                  <button class="mitem__icon" id="${movies[j].imdbId}">
                    <i class='bx bx-heart'></i>
                  </button>
                </div>
                <div class="modal__text-box">
                  <p class="modal__text">
                    ${movies[j].summary}
                  </p>
                </div>
              </div>`;

          modalBox.appendChild(modalInnerBox);
        }
      }
      modalBox.style.zIndex = '500';
      modalBox.style.opacity = '1';
      modalInnerBox.style.top = '50%';

      let modalRemoveBtn = document.querySelector('.modal-remov');
      modalRemoveBtn.addEventListener('click', () => {
        modalBox.style.zIndex = '-100';
        modalBox.style.opacity = '0';
        modalInnerBox.style.top = '-100%';
      })
    })
  }
}
modalFun();