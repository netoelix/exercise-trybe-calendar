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
    createDays.className = 'day';
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

const fridayButtom = document.getElementById('btn-friday');
const friday = document.querySelectorAll('.friday');
let clickedFriday = 0;
let daysFriday = [];

const changeText = () => {
  for (let index = 0; index < friday.length; index += 1) {
    daysFriday.push(friday[index].innerText);
    friday[index].innerText = 'sextou';
    console.log(daysFriday);
  }
  clickedFriday = 1;
}
const returnText = () => {
  for (let indexReturn = 0; indexReturn < friday.length; indexReturn += 1) {
    friday[indexReturn].innerText = daysFriday[indexReturn];
    console.log(daysFriday);
  }
  clickedFriday = 0;
}
const choseFunctionText = () => {
  if (clickedFriday === 0) {
    changeText();
  } else if (clickedFriday === 1) {
    returnText();
  }
}

fridayButtom.addEventListener('click',  choseFunctionText);

const daysOfTheWeek = document.querySelectorAll('.day');

const increaseFontSize = (event) => {
  event.target.style.fontSize = '30px';
};

const decreaseFontSize = (event) => {
  event.target.style.fontSize = '20px';
};

daysOfTheWeek.forEach((day) => {
  day.addEventListener('mouseover', increaseFontSize);
  day.addEventListener('mouseout', decreaseFontSize);
});

const taskColors = document.querySelectorAll('.task');

taskColors.forEach((taskColor) => {
  taskColor.addEventListener('click', () => {
    taskColor.classList.toggle('selected');
  });
});

const days = document.querySelectorAll('.day');

daysOfTheWeek.forEach((day) => {
  day.addEventListener('click', () => {
    const selectedTask = document.querySelector('.selected');
    if (selectedTask) {
      const color = getComputedStyle(selectedTask).backgroundColor;
      if (day.style.color === color) {
        day.style.color = 'rgb(119, 119, 119)';
      } else {
        day.style.color = color;
      }
    }
  });
});

const addButton = document.getElementById('btn-add');
const inputField = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

const addTask = () => {
  const taskText = inputField.value.trim();

  if (taskText === '') {
    alert('Digite um texto válido para adicionar uma tarefa.');
    return;
  }

  const newTask = document.createElement('li');
  newTask.textContent = taskText;
  taskList.appendChild(newTask);

  inputField.value = '';
};

addButton.addEventListener('click', addTask);
inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});



