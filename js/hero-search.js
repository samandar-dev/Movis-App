function heroFun() {
  heroIconSearch.addEventListener('click', () => {
    heBox.classList.remove('d-none');
    heroFunc()
  })

  heRemBtn.addEventListener('click', () => {
    heroSearch.value = "";
    heBox.classList.add('d-none');
  })
}
heroFun()