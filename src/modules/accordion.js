const accordion = () => {
  const accordionTwo = document.getElementById('accordion-two'),
    panelHeading = accordionTwo.querySelectorAll('.panel-heading'),
    panelCollapse = accordionTwo.querySelectorAll('.panel-collapse'),
    link = document.querySelectorAll('#accordion-two > a[href*="#"]');
  console.log(link);

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


  accordionTwo.addEventListener('click', (event) => {
    let target = event.target;
    event.preventDefault()
    target = target.closest('.panel-heading')

    if(target){
      panelHeading.forEach((item, index) => {
        if (target === item){
          changeAccordion(index)
        }
      })
    }
  })


}

export default accordion