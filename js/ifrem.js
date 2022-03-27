let ifArr = [
  {
    id: 1,
    scr: 'https://www.youtube.com/embed/M7XM597XO94'
  }, {
    id: 2,
    scr: 'https://www.youtube.com/embed/_InqQJRqGW4'
  }, {
    id: 3,
    scr: 'https://www.youtube.com/embed/vrbbdIFOswM'
  }, {
    id: 4,
    scr: 'https://www.youtube.com/embed/CWMh0H5fZLU'
  }, {
    id: 5,
    scr: 'https://www.youtube.com/embed/11NjUzNHVos'
  }
]

let IfnewArr = []
let modal__ifrem = document.querySelector('.modal__ifrem');
let btnRemovIfrem = document.querySelector('#ifrem-remov');
let btnOpenIfrem = document.querySelectorAll('.hero__btn');
let ifremBox = document.querySelector('.modal__ifrem');
let div = document.createElement('div');
div.className = "ifrem-box";

IfnewArr = ifArr.forEach((el) => {
  btnOpenIfrem.forEach((b, index) => {
    b.addEventListener('click', () => {
      ifremBox.classList.add('ifrem_show');
      if (index + 1 == el.id) {
        div.innerHTML = `
        <iframe class="ifrem" src="${el.scr}" title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; video; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>`;

        modal__ifrem.appendChild(div)
      }
    })
  })

  btnRemovIfrem.addEventListener('click', () => {
    div.remove();
    ifremBox.classList.remove('ifrem_show');
  })
})










