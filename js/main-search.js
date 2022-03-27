let formArr = []

formInput.addEventListener('keyup', formFunc);

let selecCAt = document.createElement('select');
selecCAt.className = "selec-categor";
selecCAt.innerHTML = `  
          <option value="All">All</option>
          <option value="Family">Family</option>
          <option value="Acction">Acctionl</option>
          <option value="Acction">Camedia</option>
`;

let selecY1 = document.createElement('select');
selecY1.className = "selec-years1";
selecY1.innerHTML = `  
          <option value="1990">1990</option>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
`;

let selecY2 = document.createElement('select');
selecY2.className = "selec-years1";
selecY2.innerHTML = `  
          <option value="2000">2000</option>
          <option value="20001">20001</option>
          <option value="20002">20002</option>
`;

let selecAlp = document.createElement('select');
selecAlp.className = "selec-alp";
selecAlp.innerHTML = `  
          <option value="A-Z">A-Z</option>
          <option value="W-M">W-M</option>
          <option value="B-D">B-D</option>
`;

let f_btn = document.createElement('button');
f_btn.className = "form-search-btn";
f_btn.textContent = 'Search';

FormBox.appendChild(selecCAt);
FormBox.appendChild(selecY1);
FormBox.appendChild(selecY2);
FormBox.appendChild(selecAlp);
FormBox.appendChild(f_btn);


function formFunc() {
  f_btn.addEventListener('click', () => {

    let inputValue = formInput.value;
    let itemsLi = movListONe.getElementsByTagName('li');
    for (let i = 0; i < movies.length; i++) {
      let movTitle = movies[i].title;
      itemsLi.className = 'd-none'

      if (movTitle.toLocaleLowerCase().indexOf(inputValue) != -1) {
        console.log('yesssss');
        console.log(movTitle);
        // console.log(itemsLi);
        // itemsLi.className = "mov__item mitem d-flex"
        // let sli = document.createElement('li');
        // sli.className = "mov__item mitem";
        // sli.innerHTML = `
        //           <div class="mitem__box">
        //             <div class="mitem__img-box">
        //               <a class="text-decoration-none" href="https://www.netflix.com/uz-ru/">
        //                 <img class="mitem__img" src="${movies[i].youtubePoster}" alt="imgs">
        //               </a>
        //               <button class="mitem__icon">
        //                 <i class='bx bx-heart'></i>
        //               </button>
        //             </div>
        //             <p class="mitem__tit">${movies[i].language}, ${movies[i].year} - Current</p>
        //             <h3 class="mitem__title">${movies[i].title}</h3>
        //             <div class="mitem__price_box">
        //               <div class="mitem__price d-flex align-items-center justify-content-between">
        //                 <div class="mitem__price-box">
        //                   <span class="mitem__price-icon">
        //                     <i class='bx bxs-star'></i>
        //                   </span>
        //                   <span class="mitem__rating">${movies[i].imdbRating}</span>
        //                 </div>
        //                 <button class="mitem__add-btn mb-3" modalFun(${movies[i].imdbId})>More info</button>
        //               </div>
        //               <p class="mitem__janr mitem__tit">${movies[i].categories}</p>
        //             </div>
        //           </div>`;
        // movListONe.appendChild(sli);
      } else {
        console.log('No');
        itemsLi.className = 'd-none'
      }
    }
  })
}

// for (let i = n1, j = n2; i < n1 + 10, j < n2 + 10; i++, j++) {
//   let li = document.createElement('li');
//   li.className = "mov__item mitem";
//   li.innerHTML = `
//             <div class="mitem__box">
//               <div class="mitem__img-box">
//                 <a class="text-decoration-none" href="https://www.netflix.com/uz-ru/">
//                   <img class="mitem__img" src="${movies[i].youtubePoster}" alt="imgs">
//                 </a>
//                 <button class="mitem__icon">
//                   <i class='bx bx-heart'></i>
//                 </button>
//               </div>
//               <p class="mitem__tit">${movies[i].language}, ${movies[i].year} - Current</p>
//               <h3 class="mitem__title">${movies[i].title}</h3>
//               <div class="mitem__price_box">
//                 <div class="mitem__price d-flex align-items-center justify-content-between">
//                   <div class="mitem__price-box">
//                     <span class="mitem__price-icon">
//                       <i class='bx bxs-star'></i>
//                     </span>
//                     <span class="mitem__rating">${movies[i].imdbRating}</span>
//                   </div>
//                   <button class="mitem__add-btn mb-3" modalFun(${movies[i].imdbId})>More info</button>
//                 </div>
//                 <p class="mitem__janr mitem__tit">${movies[i].categories}</p>
//               </div>
//             </div>`;
//   movListONe.appendChild(li);
// }


// function formFunc() {
//   f_btn.addEventListener('click', () => {
//     console.log(formInput.value);
//     let n = 1;
//     let title = []
//     let tit = []
//     formArr = movies.forEach((el, i) => {
//       if (n == 1) {
//         n++
//         tit = el.title[i]
//         if (el.title[0].toLowerCase() == formInput.value) {
//           console.log('Yes');
//           console.log(el.title);
//           console.log(tit);
//         } else {
//           console.log('NO');
//           console.log(el.title);
//         }
//       }
//     })
//   })
// }

// function formFunc() {
//   f_btn.addEventListener('click', () => {
//     console.log(formInput.value);
//     let n = 1;

//     formArr = movies.forEach((el) => {
//       if (formInput.value == el.title && n == 1) {
//         n++
//         console.log('Yes');
//       } else {
//         console.log('No');
//       }
//     })
//   })
// }