const sendForm = (obj) => {
  const errorMessage = 'Что то пошло не так',
    loadMessage = 'Загрузка...',
    sucsessMessage = 'Спасибо! Мы скоро с Вами свяжемся!',
    // captureForm = document.querySelector('.capture-form'),
    name2 = document.getElementById('name_2'),
    phone2 = document.getElementById('phone_2');

    console.log(obj);

  let form = document.querySelectorAll('.capture-form')

  


  //  const getAllForms = (form) => {
  //    const elementsForm = [...form.elements].filter(item => {
  //      return item.tagName.toLowerCase() !== 'button' && 
  //      item.type !== 'button';
  //    });
  //    return elementsForm;
     
  //  }
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = `font-size: 2rem;`;


  // document.body.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   const { target } = e;

  //   console.log(target);
  //   send(target)
  // })
  
  form.forEach((item) => {
    item.addEventListener('submit', (e) => {
      e.preventDefault()
      const { target } = e;
      if (form[1] === target){
        send(item)
      }
      
    })
  })
  const send = (item) => {
    item.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(item);
    let body = {};
    if (item === form[1]){
      formData.forEach((val, key) => {
      body[key] = val;
      body = {...body, ...obj}
    })
    } 
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
        // .finally(() => {
        //   name2.value = '';
        //   phone2.value = '';
        // })
    
  }
  // form[1].addEventListener('submit', (event) => {
  //   event.preventDefault()
  //   form[1].appendChild(statusMessage);
  //   statusMessage.textContent = loadMessage;
  //   const formData = new FormData(target);
  //   let body = {};
  //   formData.forEach((val, key) => {
  //     body[key] = val;
  //   })
  //   postData(body)
  //     .then((response) => {
  //       if(response.status !== 200){
  //         throw new Error('status network not 200')
  //       } 
  //       statusMessage.textContent = sucsessMessage;
  //     })
  //     .catch((error) => {
  //       statusMessage.textContent = 'lalala';
  //       console.error(error)
  //     })
  //     // .finally(() => {
  //     //   name2.value = '';
  //     //   phone2.value = '';
  //     // })
  // })

  // console.log(form);

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