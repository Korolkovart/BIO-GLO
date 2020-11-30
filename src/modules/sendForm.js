import { response } from "express";

const sendForm = () => {
  const errorMessage = 'Что то пошло не так',
    loadMessage = 'Загрузка...',
    sucsessMessage = 'Спасибо! Мы скоро с Вами свяжемся!',
    name1 = captureForm.getElementsById('name_1'),
    phone1 = captureForm.getElementsById('phone_1');


   const captureForm = document.querySelector('.capture-form');

   const statusMessage = document.createElement('div');
   statusMessage.style.cssText = `font-size: 2rem;`;

   captureForm.addEventListener('submit', (event) => {
    event.preventDefault();
    captureForm.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(captureForm);
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
        setTimeout(() => statusMessage.style.display = 'none', 5000);
      })
   });
   const postData = (body) => {
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

export default sendForm;