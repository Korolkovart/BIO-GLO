const popup = () => {
  const popupCall = document.querySelector('.popup-call'),
    popupCheck = document.querySelector('.popup-check'),
    popupDiscount = document.querySelector('.popup-discount'),
    popupConsultation = document.querySelector('.popup-consultation'),
    callBtn = document.querySelectorAll('.call-btn'),
    discountBtn = document.querySelectorAll('.discount-btn'),
    gaugingButton = document.querySelector('.gauging-button'),
    consultationBtn = document.querySelector('.consultation-btn'),
    popup = document.querySelector('.popup'),
    constructBtn = document.querySelectorAll('.construct-btn')[3];

    constructBtn.classList.add('current__btn')
    constructBtn.classList.remove('call-btn')
    let currentBtn = document.querySelectorAll(('.current__btn'));

    let allBtn = [...callBtn, ...discountBtn,gaugingButton,consultationBtn, constructBtn]

    allBtn.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        let currentPopup;
        if(target.closest('.gauging-button')){
          currentPopup = popupCheck;
          popupCheck.style.display = 'inline-block';
        }
        if(target.closest('.discount-btn') || target.closest('.current__btn')){
          currentPopup = popupDiscount;
          popupDiscount.style.display = 'inline-block';
        }
        if(target.closest('.call-btn')){
          event.preventDefault();
          currentPopup = popupCall;
          popupCall.style.display = 'inline-block';
        }
        if (target.closest('.consultation-btn')){
          event.preventDefault();
          currentPopup = popupConsultation;
          popupConsultation.style.display = 'inline-block';
        } 
        closePopup(currentPopup)
      })
    })

    const closePopup = (currentPopup) => {
      currentPopup.addEventListener('click', (event) => {
      let target = event.target;
      if (target.closest('.popup-close')){
      event.preventDefault()

        let input = currentPopup.getElementsByTagName('input');
        input[0].removeAttribute('required')
        input[1].removeAttribute('required')
        currentPopup.style.display = 'none';
      }
      if (!target.closest('.popup-content')){
        currentPopup.style.display = 'none';
      }
    })
  }  
}

export default popup;