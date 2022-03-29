
function addItems() {
  let n1 = Math.floor(Math.random() * movies.length - 10) + 1

  for (let i = n1; i < n1 + 47; i++) {
    let li = document.createElement('li');
    li.className = "mov__item mitem";
    li.innerHTML = `
              <div class="mitem__box">
                <div class="mitem__img-box">
                  <img class="mitem__img" src="${movies[i].youtubePoster}" alt="imgs" id='${movies[i].imdbId}'>
                  <button class="mitem__icon" id="${movies[i].imdbId}">
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
                  </div>
                  <p class="mitem__janr mitem__tit">${movies[i].categories}</p>
                </div>
              </div>`;

    if (i <= n1 + 10) {
      movListONe.appendChild(li);
    }
    else if (i <= n1 + 20) {
      movListTwo.appendChild(li);
    }
    else if (i <= n1 + 30) {
      movListThre.appendChild(li);
    }
  }
}
addItems();