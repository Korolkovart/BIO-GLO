import culcSendForm from "./culcSendForm";

const culc = () => {
  const accordion = document.getElementById('accordion'),
    accordionTwo = document.getElementById('accordion-two'),
    onoffswitchInner = document.querySelector('.onoffswitch-inner'),
    onoffswitchSwitch = document.querySelectorAll('.onoffswitch-switch'),
    onoffswitchLabel = document.querySelector('.onoffswitch-label'),
    questionHeading = accordionTwo.querySelectorAll('.panel-heading'),
    questionCollapse = accordionTwo.querySelectorAll('.panel-collapse'),
    culcHeading = accordion.querySelectorAll('.panel-heading'),
    culcCollapse = accordion.querySelectorAll('.panel-collapse'),
    myonoffswitch = document.getElementById('myonoffswitch'),
    myonoffswitchTwo = document.getElementById('myonoffswitch-two'),
    panelBody = accordion.querySelectorAll('.panel-body'),
    infoCircle2 = panelBody[1].querySelectorAll('*'),
    calcResult = document.getElementById('calc-result'),
    constructBtn = document.querySelectorAll('.construct-btn')[3];

    let panelCollapse = [...questionCollapse, ...culcCollapse],
    panelHeading = [...questionHeading, ...culcHeading],
    myonoffswitches = [myonoffswitch,myonoffswitchTwo],
    firstCircle = [infoCircle2[0],infoCircle2[1],infoCircle2[3],
      infoCircle2[4],infoCircle2[7],infoCircle2[9],infoCircle2[10]],
    secondCircle = [infoCircle2[14],infoCircle2[15],infoCircle2[17],
      infoCircle2[18],infoCircle2[21],infoCircle2[23],infoCircle2[24]],
      diameter = firstCircle[3].options[firstCircle[3].selectedIndex].value,
      quantityCircle = firstCircle[6].options[firstCircle[6].selectedIndex].value,
      diameterTwo = secondCircle[3].options[secondCircle[3].selectedIndex].value,
      quantityCircleTwo = secondCircle[6].options[secondCircle[6].selectedIndex].value,
      diameterValue = firstCircle[3].value,
      inputText = accordion.getElementsByTagName('input')[2];


      constructBtn.setAttribute('disabled', true)
      inputText.addEventListener('input', () => {
        if (inputText.value.length < 1){
          constructBtn.setAttribute('disabled', true)
        } else if (inputText.value.length  > 1){
          constructBtn.removeAttribute('disabled')
        }
      })
      calcResult.value = 10000

  let obj = {}

  const info = {
    oneCircle: 10000,
    twoCircle: 15000,
    yesBottom: 10,
    culculate: function(onePrice, twoPrice) {
      let diameter = firstCircle[3].options[firstCircle[3].selectedIndex].value,
      quantityCircle = firstCircle[6].options[firstCircle[6].selectedIndex].value,
      diameterTwo = secondCircle[3].options[secondCircle[3].selectedIndex].value,
      quantityCircleTwo = secondCircle[6].options[secondCircle[6].selectedIndex].value,
      diameterValue = firstCircle[3].value,
      diameterPrice = 0,
      diameterPrice2 = 0,
      quantityCirclePrice = 0,
      quantityCirclePrice2 = 0,
      checkAttr = myonoffswitch.hasAttribute('checked'),
      checkBottomAttr = myonoffswitchTwo.hasAttribute('checked'),
      inputText = accordion.getElementsByTagName('input')[2];

      if(checkAttr === true){
        obj['numOfCam'] = 1;
        if(diameter === '1.4 метра'){
          diameterPrice = 0
          obj['diameterFirstWell'] = '1.4 метра'
        } else if (diameter === '2 метра') {
          diameterPrice = 20
          obj['diameterFirstWell'] = '2 метра'
        }
        if (diameter && quantityCircle === '3 штуки'){
          quantityCirclePrice = 50
          obj['numOfCircle'] = '3 штуки'
        } else if (diameter && quantityCircle === '2 штуки'){
          quantityCirclePrice = 30
          obj['numOfCircle'] = '2 штуки'
        } else {
          quantityCirclePrice = 0
          obj['numOfCircle'] = '1 штукa'
        }
        if(checkBottomAttr === false){
          obj['bottom'] = 'no'
        } else if (checkBottomAttr === true){
          obj['bottom'] = 'yes'
        }
        obj['distance'] = inputText.value
      } else if(checkAttr === false){
        twoPrice *= 2;
        obj['numOfCam'] = 2;
        if(diameter === '1.4 метра'){
          diameterPrice = 0
          obj['diameterFirstWell'] = '1.4 метра'
        } else if (diameter === '2 метра') {
          diameterPrice = 20
          obj['diameterFirstWell'] = '2 метра'
        }
        if(diameter && diameterTwo === '1.4 метра'){
          diameterPrice2 = 0
          obj['diameterSecondWell'] = '1.4 метра'
        } else if (diameter && diameterTwo === '2 метра') {
          diameterPrice2 = 20
          obj['diameterSecondWell'] = '2 метра'
        }
        if (diameter && diameterTwo && quantityCircle === '3 штуки'){
          quantityCirclePrice = 50
          obj['numOfCircle'] = '3 штуки'
        } else if (diameter && diameterTwo && quantityCircle === '2 штуки'){
          quantityCirclePrice = 30
          obj['numOfCircle'] = '2 штуки'
        } else {
          quantityCirclePrice = 0
          obj['numOfCircle'] = '1 штукa'
        }
        if (quantityCircleTwo === '3 штуки'){
          quantityCirclePrice2 = 40
          obj['numOfSecondCircle'] = '3 штуки'
        } else if (quantityCircleTwo === '2 штуки'){
          quantityCirclePrice2 = 20
          obj['numOfSecondCircle'] = '2 штуки'
        } else {
          quantityCirclePrice2 = 0
          obj['numOfSecondCircle'] = '1 штукa'
        }
        if(checkBottomAttr === false){
          obj['bottom'] = 'no'
        } else if (checkBottomAttr === true){
          obj['bottom'] = 'yes'
        }
        obj['distance'] = inputText.value
      }



      let totalDiameter = onePrice / 100 * diameterPrice,
        totalDiameter2 = onePrice / 100 * diameterPrice2,
        totalQuantityCircle = (onePrice + totalDiameter) / 100 * quantityCirclePrice,
        totalQuantityCircle2 = totalQuantityCircle + totalDiameter + ((onePrice + totalDiameter2) / 100 * quantityCirclePrice2),
        bottom = (onePrice + totalDiameter + totalQuantityCircle) / 100 * twoPrice,
        bottom2 = (onePrice + totalDiameter2 + totalQuantityCircle2) / 100 * twoPrice;

        let total1 = onePrice + totalDiameter + totalQuantityCircle + bottom,
          total2 = onePrice + totalDiameter2 + totalQuantityCircle2 + bottom2;

      info.total(total1, total2)

    },
    total: function(total1, total2){
     

      if (myonoffswitch.checked === false){
        calcResult.value = total2
      } else if (myonoffswitch.checked === true){
        calcResult.value = total1
      }


      // console.log(obj);
      // sendForm(obj)
    }

  }
  accordion.addEventListener('change', (event) => {
    let target = event.target;
    let onePrice,
      twoPrice;
    if (myonoffswitch.checked === false){
      onePrice = info.twoCircle

    } else if (myonoffswitch.checked === true){
      onePrice = info.oneCircle
    }
    if (myonoffswitchTwo.checked === false){
      twoPrice = 0;
    } else if (myonoffswitchTwo.checked === true){
      twoPrice = info.yesBottom
    }

    if(target === onoffswitchSwitch || target === diameter ||
      target === diameterTwo || target === quantityCircle ||
      target === quantityCircleTwo){
        info.culculate()
      // console.log(obj);


      }
      info.culculate(onePrice,twoPrice)

    })

  accordion.addEventListener('click', (event) => {
    let target = event.target;
    let onePrice,
      twoPrice;
    if (myonoffswitch.checked === false){
      onePrice = info.twoCircle

    } else if (myonoffswitch.checked === true){
      onePrice = info.oneCircle
    }
    if (myonoffswitchTwo.checked === false){
      twoPrice = 0;
    } else if (myonoffswitchTwo.checked === true){
      twoPrice = info.yesBottom
    }
    info.culculate(onePrice,twoPrice)
  })
  culcSendForm(obj)

}




export default culc;