const culc = () => {
  const accordion = document.getElementById('accordion'),
    onoffswitchInner = document.querySelector('.onoffswitch-inner'),
    onoffswitchSwitch = document.querySelectorAll('.onoffswitch-switch'),
    onoffswitchLabel = document.querySelector('.onoffswitch-label'),
    myonoffswitch = document.getElementById('myonoffswitch'),
    myonoffswitchTwo = document.getElementById('myonoffswitch-two'),
    panelBody = accordion.querySelectorAll('.panel-body'),
    infoCircle2 = panelBody[1].querySelectorAll('*');


  let myonoffswitches = [myonoffswitch,myonoffswitchTwo],
    firstCircle = [infoCircle2[0],infoCircle2[1],infoCircle2[3],
      infoCircle2[4],infoCircle2[7],infoCircle2[9],infoCircle2[10]],
    secondCircle = [infoCircle2[14],infoCircle2[15],infoCircle2[17],
      infoCircle2[18],infoCircle2[21],infoCircle2[23],infoCircle2[24]];

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
  const toggleSwich = (index) => {
    myonoffswitches.forEach((elem, i) => {
      if(i === index){
        let stustAttr =  elem.hasAttribute('checked')
        let typepSeptic,
          hasBottom;
        if (stustAttr === true && i === 0){
          typepSeptic = 15000
          countSum(typepSeptic)
          elem.removeAttribute('checked')
          showSecondCircle()
          hideFirstCircle()
        } else if (stustAttr === false && i === 0){
          typepSeptic = 10000
          countSum(typepSeptic)
          elem.setAttribute('checked', true)

          showFirstCircle()
          hideSecondCircle()
        }
        if (stustAttr === true && i === 1 ){
          hasBottom = 20
          countSum(hasBottom)
          elem.removeAttribute('checked')
          showSecondCircle()
          hideFirstCircle()
        } else if (stustAttr === false && i === 1 ){
          hasBottom = 10
          countSum(hasBottom)
          elem.setAttribute('checked', true)
          showFirstCircle()
          hideSecondCircle()
        }


      }
    })
   
  }

  accordion.addEventListener('change', (event) => {

  })

  accordion.addEventListener('click', (event) => {
    onoffswitchSwitch.forEach((item, index) => {
      let target = event.target;
      if (item === target.closest('.onoffswitch-switch')){
        toggleSwich(index)
      } 
    })
  })

  const countSum = (typepSeptic = 10000, hasBottom = 10) => {
    let finalPrice = typepSeptic + (typepSeptic / 100 * hasBottom)

    return console.log(finalPrice);
    
  }
  countSum()



}

export default culc;