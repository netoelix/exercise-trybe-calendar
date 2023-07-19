//
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.

const creatDaysOfDecember = () => {
  for (let index = 0; index < decemberDaysList.length; index +=1) {
    let createDays = document.createElement('li');
    createDays.className = 'days';
    createDays.innerHTML = decemberDaysList[index];
    let parent = document.getElementById('days');
    parent.appendChild(createDays);
    switch (decemberDaysList[index]) {
      case 24:
        createDays.className = 'day holiday';
      break;
      case 25:
        createDays.className = 'day holiday friday';
      break;
      case 31:
        createDays.className = 'day holiday';
      break;
      case 4:
        createDays.className = 'day friday';
      break;
      case 11:
        createDays.className = 'day friday';
      break;
      case 18:
        createDays.className = 'day friday';
      break;
    }
  }
}

creatDaysOfDecember();

const holidayButtom = document.getElementById('btn-holiday');
const holiday = document.querySelectorAll('.holiday');
let clicked = 0;

const changeColor = () => {
  for (let index = 0; index < holiday.length; index += 1) {
    holiday[index].style.backgroundColor = 'red';
    holiday[index].style.color = '#eee';
  }
  clicked = 1;
}
const returnColor = () => {
  for (let indexReturn = 0; indexReturn < holiday.length; indexReturn += 1) {
    holiday[indexReturn].style.backgroundColor = "rgb(238,238,238)";
    holiday[indexReturn].style.color = '#777';
  }
  clicked = 0;
}
const choseFunction = () => {
  if (clicked === 0) {
    changeColor();
  } else if (clicked === 1) {
    returnColor();
  }
}
holidayButtom.addEventListener('click',  choseFunction);