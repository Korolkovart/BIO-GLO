const more = () => {
  const addBtn = document.querySelector('.add-sentence-btn'),
    sentence = document.querySelector('.sentence'),
    row = sentence.querySelector('.row'),
    children = row.querySelectorAll('*'),
    widthScreen = document.documentElement.clientWidth;

  addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(widthScreen > 793){
      children[18].classList.remove('visible-sm-block')
      children[24].classList.remove('hidden');
      children[30].classList.remove('hidden');
      addBtn.style.display = 'none'
    } else {
      children[24].classList.remove('hidden');
      children[30].classList.remove('hidden');
      addBtn.style.display = 'none'
    }
  })
}
export default more