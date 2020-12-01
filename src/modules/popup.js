const popup = () => {
  const popupCall = document.querySelector('.popup-call'),
    popupCheck = document.querySelector('.popup-check'),
    popupDiscount = document.querySelector('.popup-discount'),
    popupConsultation = document.querySelector('.popup-consultation'),
    callBtn = document.querySelectorAll('.call-btn'),
    discountBtn = document.querySelectorAll('.discount-btn'),
    gaugingButton = document.querySelector('.gauging-button'),
    consultationBtn = document.querySelector('.consultation-btn'),
    popup = document.querySelector('.popup');

    let allBtn = [...callBtn, ...discountBtn,gaugingButton,consultationBtn]

    allBtn.forEach((item) => {
      item.addEventListener('click', (event) => {
        // event.preventDefault();
        let target = event.target;
        let currentPopup;
        if(target.closest('.gauging-button')){
          currentPopup = popupCheck;
          popupCheck.style.display = 'inline-block';
        }
        if(target.closest('.discount-btn')){
          currentPopup = popupDiscount;
          popupDiscount.style.display = 'inline-block';
        }
        if(target.closest('.call-btn')){
          currentPopup = popupCall;
          popupCall.style.display = 'inline-block';
        }
        if (target.closest('.consultation-btn')){
          currentPopup = popupConsultation;
          popupConsultation.style.display = 'inline-block';
        }
        closePopup(currentPopup)
      })
    })

    const closePopup = (currentPopup) => {
      currentPopup.addEventListener('click', (event) => {
      let target = event.target;
      // event.preventDefault()
      if (target.closest('.popup-close')){
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