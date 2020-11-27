const popup = () => {
  const popup = document.querySelector('.popup-call'),
    callBtn = document.querySelectorAll('.call-btn');

    callBtn.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault()
        popup.style.display = 'inline-block';
      })
    })

    popup.addEventListener('click', (event) => {
      let target = event.target;
      
      if (target.closest('.popup-close')){
        popup.style.display = 'none';
      }
      if (!target.closest('.popup-content')){
        popup.style.display = 'none';
      }
    })
}

export default popup;