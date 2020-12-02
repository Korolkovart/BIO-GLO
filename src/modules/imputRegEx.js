const imputRegEx = () => {
  const  name1 = document.getElementById('name_1'),
    name2 = document.getElementById('name_2'),
    name11 = document.getElementById('name_11'),
    name12 = document.getElementById('name_12'),
    name13 = document.getElementById('name_13'),
    phone1 = document.getElementById('phone_1'),
    phone2 = document.getElementById('phone_2'),
    phone3 = document.getElementById('phone_3'),
    phone11 = document.getElementById('phone_11'),
    phone12 = document.getElementById('phone_12'),
    phone13 = document.getElementById('phone_13'),
    btnCupture = document.querySelectorAll('.capture-form-btn'),
    mainFormBtn = document.querySelector('.main-form-btn');

  let form = document.querySelectorAll('.capture-form');
  
  let name = [name1, name2, name11, name12, name13];
  let phone = [phone1, phone2, phone11, phone12, phone13];
  let btn = [...btnCupture, mainFormBtn]
  


  // console.log(name1);
  // console.log(btnCupture);



  const maskPhone = (event, element) => {
    const keyCode = event.keyCode;
    const template = '+7(___)___-__-__',
      def = template.replace(/\D/g,''),
      val = element.value.replace(/\D/g,'');
    let i = 0,
      newValue = template.replace(/[_\d]/g, function (a){
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      })
    i = newValue.indexOf("_");
    if(i !== -1){
      newValue = newValue.slice(0,i);
    }
    let reg = template.substr(0, element.value.length).replace(/_+/g,
      function (a){
        return '\\d{1,' + a.length + '}'
      }).replace(/[+7()]/g, '\\$&');
    reg = new RegExp('ˆ' + reg + '$')
    if(!reg.test(element.value) || element.value.length < 5 ||
       keyCode > 47 && keyCode < 58){
        element.value = newValue;
    }
  }


  
  phone.forEach((item) => {
    item.addEventListener('input', (event) => {
    const { target } = event
    maskPhone(event, item)
    const checkName1 = /[?!,.a-z0-9]+$/.test(name1.value)
    const checkName2 = /[?!,.a-z0-9]+$/.test(name2.value)
    const checkName11 = /[?!,.a-z0-9]+$/.test(name11.value)
    const checkName12 = /[?!,.a-z0-9]+$/.test(name12.value)
    const checkName13 = /[?!,.a-z0-9]+$/.test(name13.value)
    name1.value = name1.value.replace(/[?!,.a-z0-9]+$/ig, '');
    name2.value = name2.value.replace(/[?!,.a-z0-9]+$/ig, '');
    name11.value = name11.value.replace(/[?!,.a-z0-9]+$/ig, '');
    name12.value = name12.value.replace(/[?!,.a-z0-9]+$/ig, '');
    name13.value = name13.value.replace(/[?!,.a-z0-9]+$/ig, '');

    for (let i = 0; item.value.length > i; i++){
      btn.forEach((elem) => {
        elem.setAttribute('disabled', true);
      })
      if(i > 10 && (checkName1 === true || checkName2 === true ||  checkName11 === true ||
        checkName12 === true || checkName13 === true)){
        btn.forEach((elem) => {
          elem.removeAttribute('disabled')
        }) 
      }
    }
  })
})
name.forEach((item) => {
  item.addEventListener('input', () => {
  item.value = item.value.replace(/[?!,.a-z0-9]+$/ig, '');
  item.setAttribute('minlength', 2)
  for (let i = 0; item.value.length > i; i++){
    btn.forEach((elem) => {
      elem.setAttribute('disabled', true);
    })
    if(i > 0){
      btn.forEach((elem) => {
        elem.removeAttribute('disabled')
      }) 
    }
  }
  })
})

  




}

export default imputRegEx;