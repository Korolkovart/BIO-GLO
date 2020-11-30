const culcAccordions = () => {
  const accordion = document.getElementById('accordion'),
    panelGroup = document.querySelectorAll('.panel-group'),
    culcHeading = accordion.querySelectorAll('.panel-heading'),
    culcCollapse = accordion.querySelectorAll('.panel-collapse'),
    constructBtn = accordion.querySelectorAll('.construct-btn'),
    callBtn = accordion.querySelector('.call-btn'),
    accordionTwo = document.getElementById('accordion-two'),
    questionHeading = accordionTwo.querySelectorAll('.panel-heading'),
    questionCollapse = accordionTwo.querySelectorAll('.panel-collapse'),
    myonoffswitch = document.getElementById('myonoffswitch'),
    onoffswitchSwitch = document.querySelectorAll('.onoffswitch-switch'),
    myonoffswitchTwo = document.getElementById('myonoffswitch-two'),
    panelBody = accordion.querySelectorAll('.panel-body'),
    infoCircle2 = panelBody[1].querySelectorAll('*');

    
    let panelCollapse = [...questionCollapse, ...culcCollapse],
      panelHeading = [...questionHeading, ...culcHeading],
      myonoffswitches = [myonoffswitch,myonoffswitchTwo],
      firstCircle = [infoCircle2[0],infoCircle2[1],infoCircle2[3],
        infoCircle2[4],infoCircle2[7],infoCircle2[9],infoCircle2[10]],
      secondCircle = [infoCircle2[14],infoCircle2[15],infoCircle2[17],
        infoCircle2[18],infoCircle2[21],infoCircle2[23],infoCircle2[24]];
    // console.log(accordionTwo);
    // console.log(accordion);
    

  const changeAccordion = (index) => {
    panelCollapse.forEach((elem, i) => {
      if(i === index){
        elem.classList.add('in');
        elem.style.display = 'block'
      }else {
        elem.classList.remove('in');
        elem.style.display = 'none'
      }
    })
  }

  const changeCulcAccordion = (index) => {
    culcCollapse.forEach((elem, i) => {
      if(i === index){
        elem.classList.add('in');
        elem.style.display = 'block'
      }else {
        elem.classList.remove('in');
        elem.style.display = 'none'
      }
    })
  }

  panelGroup.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      let target = event.target;
      event.preventDefault()

      constructBtn.forEach((item, index) => {
        if(target.closest('.construct-btn') === item){
          changeCulcAccordion(index +1)
        }
      })
      
      if(target){
        panelHeading.forEach((item, index) => {
          if (target.closest('.panel-heading') === item){
            changeAccordion(index)
          }
        })
      }

      if(target.closest('.call-btn')){
        panelCollapse[0].classList.add('in');
        panelCollapse[0].style.display = 'block'
      }

    })
  })


  //swich

  const showFirstCircle = () => {
    firstCircle.forEach((elem) => {
      elem.style.display = 'inline-block'
    })
  } 
  const hideFirstCircle = () => {
    firstCircle.forEach((elem) => {
      elem.style.display = 'none'
    })
  } 
  const showSecondCircle = () => {
    secondCircle.forEach((elem) => {
      elem.style.display = 'inline-block'
    })
  } 
  const hideSecondCircle = () => {
    secondCircle.forEach((elem) => {
      elem.style.display = 'none'
    })
  } 
  hideSecondCircle() 

  myonoffswitches[1].removeAttribute('checked')
  const toggleSwich = (index) => {
    myonoffswitches.forEach((elem, i) => {
      if(i === index){
        let stustAttr =  elem.hasAttribute('checked')
        if (stustAttr === true && i === 0){
          elem.removeAttribute('checked')
          showSecondCircle()
        } else if (stustAttr === false && i === 0){
          elem.setAttribute('checked', true)
          showFirstCircle()
          hideSecondCircle()
        }
        if (stustAttr === false && i === 1 ){
          elem.setAttribute('checked', true)
        } else if (stustAttr === true && i === 1 ){
          elem.removeAttribute('checked')
        }
      }
    })
  
  }



accordion.addEventListener('click', (event) => {
  onoffswitchSwitch.forEach((item, index) => {
    let target = event.target;
    if (item === target.closest('.onoffswitch-switch')){
      toggleSwich(index)
    } 
  })
})






}

export default culcAccordions;