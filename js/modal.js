let modalBtn = document.querySelector('.mitem__add-btn');
let modalBox = document.querySelector('.modall');
let modalRemoveBtn = document.querySelector('.modal-remov');

modalBtn.addEventListener('click', () => {
  modalBox.style.zIndex = '500';
  modalBox.style.opacity = '1';
})

modalRemoveBtn.addEventListener('click', () => {
  modalBox.style.zIndex = '-100';
  modalBox.style.opacity = '0';
})