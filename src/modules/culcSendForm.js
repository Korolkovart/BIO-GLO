const culcSendForm = (obj) => {
  const errorMessage = 'Что то пошло не так',
    loadMessage = 'Загрузка...',
    sucsessMessage = 'Спасибо! Мы скоро с Вами свяжемся!',
    name1 = document.getElementById('name_1'),
    phone1 = document.getElementById('phone_1'),
    popupCall = document.querySelector('.popup-call'),
    accordion = document.getElementById('accordion');

  let form = document.querySelectorAll('.capture-form'),
    inputText = accordion.getElementsByTagName('input')[2];

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = `font-size: 2rem;`;

  form[1].addEventListener('submit', (event) => {
    event.preventDefault();
    const statusMessage = document.createElement('div');
     statusMessage.style.cssText = `font-size: 2rem;`;
    form[1].appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form[1]);
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
          name1.value = '';
          phone1.value = '';
          inputText.value = '';
          setTimeout(() => statusMessage.style.display = 'none', 3000);
          setTimeout(() => popupCall.style.display = 'none', 4000);

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

