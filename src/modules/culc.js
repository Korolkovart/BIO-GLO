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
    calcResult = document.getElementById('calc-result');

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
      diameterValue = firstCircle[3].value;

      calcResult.value = 10000

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
      checkAttr = myonoffswitch.hasAttribute('checked');

      if(checkAttr === true){
        if(diameter === '1.4 метра'){
          diameterPrice = 0
        } else if (diameter === '2 метра') {
          diameterPrice = 20
        }
        if (diameter && quantityCircle === '3 штуки'){
          quantityCirclePrice = 50
        } else if (diameter && quantityCircle === '2 штуки'){
          quantityCirclePrice = 30
        } else {
          quantityCirclePrice = 0
        }
      } else if(checkAttr === false){
        twoPrice *= 2;
        if(diameter === '1.4 метра'){
          diameterPrice = 0
        } else if (diameter === '2 метра') {
          diameterPrice = 20
        }
        if(diameter && diameterTwo === '1.4 метра'){
          diameterPrice2 = 0
        } else if (diameter && diameterTwo === '2 метра') {
          diameterPrice2 = 20
        }
        if (diameter && diameterTwo && quantityCircle === '3 штуки'){
          quantityCirclePrice = 50
        } else if (diameter && diameterTwo && quantityCircle === '2 штуки'){
          quantityCirclePrice = 30
        } else {
          quantityCirclePrice = 0
        }

        if (quantityCircleTwo === '3 штуки'){
          quantityCirclePrice2 = 40
        } else if (quantityCircleTwo === '2 штуки'){
          quantityCirclePrice2 = 20
        } else {
          quantityCirclePrice2 = 0
        }
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

  // info.culculate()


}

export default culc;