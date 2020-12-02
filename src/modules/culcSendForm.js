const culcSendForm = (obj) => {
  const errorMessage = 'Что то пошло не так',
    loadMessage = 'Загрузка...',
    sucsessMessage = 'Спасибо! Мы скоро с Вами свяжемся!',
    name11 = document.getElementById('name_11'),
    phone11 = document.getElementById('phone_11'),
    popupDiscount = document.querySelector('.popup-discount'),
    accordion = document.getElementById('accordion');

  let form = document.querySelectorAll('.capture-form'),
    inputText = accordion.getElementsByTagName('input')[2];

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = `font-size: 2rem;`;

  form[1].classList.add('culc_form')
  let currentForm = document.querySelector('.culc_form')

  // console.log(form);



  form[2].addEventListener('submit', (event) => {
    event.preventDefault();
    const statusMessage = document.createElement('div');
     statusMessage.style.cssText = `font-size: 2rem;`;
    form[2].appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form[2]);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    })
      postData(body)
        .then((response) => {
          if(response.status !== 200){
            throw new Error('status network not 200')
          } 
          statusMessage.textContent = sucsessMessage;
        })
        .catch((error) => {
          statusMessage.textContent = errorMessage;;
          console.error(error)
        })
        .finally(() => {
          name11.value = '';
          phone11.value = '';
          inputText.value = '';
          setTimeout(() => statusMessage.style.display = 'none', 3000);
          setTimeout(() => popupDiscount.style.display = 'none', 4000);

        })
  })
  
  
   const postData = (body) => {
     body = {...body, ...obj}
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
       },
      body: JSON.stringify(body),
      credentials: "include"
    });
  }
}

export default culcSendForm;

