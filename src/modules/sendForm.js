const sendForm = () => {
  const errorMessage = 'Что то пошло не так',
    loadMessage = 'Загрузка...',
    sucsessMessage = 'Спасибо! Мы скоро с Вами свяжемся!',
    mainForm = document.querySelector('.main-form'),
    directorForm = document.querySelector('.director-form'),
    name2 = document.getElementById('name_2'),
    phone2 = document.getElementById('phone_2'),
    name11 = document.getElementById('name_11'),
    phone11 = document.getElementById('phone_11'),
    name12 = document.getElementById('name_12'),
    phone12 = document.getElementById('phone_12'),
    phone3 = document.getElementById('phone_3'),
    name13 = document.getElementById('name_13'),
    phone13 = document.getElementById('phone_13'),
    directorBtn = document.querySelector('.director-btn'),
    popupCheck = document.querySelector('.popup-check'),
    popupDiscount = document.querySelector('.popup-discount'),
    popupConsultation = document.querySelector('.popup-consultation');


let directorInput = directorForm.getElementsByTagName('input')[0]


  let form = document.querySelectorAll('.capture-form'),
    forms = [form[0], form[2], form[3], mainForm, form[4]];

    // console.log(forms);
    directorBtn.addEventListener('submit', (e) => {
      e.preventDefault()
    })


  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = `font-size: 2rem;`;


  forms.forEach((item) => {
    item.addEventListener('submit', (e) => {
      e.preventDefault()
      send(item)
    })
  })
  const createStatusMessage = (item) => {
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `font-size: 2rem;`;
    item.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
  
  }
  
  const send = (item) => {
    item.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(item);
    let body = {};
    let bb = {};

    if (item === forms[4]){
    formData.forEach((val, key) => {
    bb[key] = val;
    postData1(bb)
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
          name13 .value = '';
          phone13.value = '';
          setTimeout(() => statusMessage.style.display = 'none', 2000);
          setTimeout(() => popupConsultation.style.display = 'none', 3000);
        })
      })
    } else {
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
          name2.value = '';
          phone2.value = '';
          name11.value = '';
          phone11.value = '';
          name12.value = '';
          phone12.value = '';
          phone3.value = '';
          setTimeout(() => statusMessage.style.display = 'none', 2000);
          setTimeout(() => popupCheck.style.display = 'none', 3000);
          setTimeout(() => popupDiscount.style.display = 'none', 3000);
          setTimeout(() => popupConsultation.style.display = 'none', 3000);

        })
    }
  }
  
  const postData1 = (bb) => {
      let i  = directorInput.value
      let direcorText = {i}
      bb = {...bb, ...direcorText}

      return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
       },
      body: JSON.stringify(bb),
      credentials: "include"
    })
  
  }
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

  