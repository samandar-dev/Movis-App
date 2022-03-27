heroSearch.addEventListener('keyup', heroFun);

function heroFun() {
  heroIconSearch.addEventListener('click', () => {
    movHeroBox.classList.add('box-none');
    movMain.classList.add('box-none');
    heBox.className = 'hero_search_box d-block';
  })

  heRemBtn.addEventListener('click', () => {
    heroSearch.value = "";
    movHeroBox.classList.remove('box-none');
    movMain.classList.remove('box-none');
    heBox.className = 'hero_search_box d-none';
  })
}
