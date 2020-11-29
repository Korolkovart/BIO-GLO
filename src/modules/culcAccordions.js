const culcAccordions = () => {
  const accordion = document.getElementById('accordion'),
    panelGroup = document.querySelectorAll('.panel-group'),
    culcHeading = accordion.querySelectorAll('.panel-heading'),
    culcCollapse = accordion.querySelectorAll('.panel-collapse'),
    constructBtn = accordion.querySelectorAll('.construct-btn'),
    callBtn = accordion.querySelector('.call-btn'),
    accordionTwo = document.getElementById('accordion-two'),
    questionHeading = accordionTwo.querySelectorAll('.panel-heading'),
    questionCollapse = accordionTwo.querySelectorAll('.panel-collapse');
    
    let panelCollapse = [...questionCollapse, ...culcCollapse],
      panelHeading = [...questionHeading, ...culcHeading]
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



}

export default culcAccordions;