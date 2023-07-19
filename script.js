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
    createDays.id = 'days';
    createDays.innerHTML = decemberDaysList[index];
    let parent = document.getElementById('days');
    parent.appendChild(createDays);
    switch (decemberDaysList[index]) {
      case 24:
        createDays.id = 'day holiday';
      break;
      case 25:
        createDays.id = 'day holiday friday';
      break;
      case 31:
        createDays.id = 'day holiday';
      break;
      case 4:
        createDays.id = 'day friday';
      break;
      case 11:
        createDays.id = 'day friday';
      break;
      case 18:
        createDays.id = 'day friday';
      break;
    }
  }
}
creatDaysOfDecember();