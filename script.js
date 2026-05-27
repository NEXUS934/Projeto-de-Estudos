const tasks = document.querySelectorAll(".task");

const xpDisplay = document.getElementById("xp");

let xp = 0;

// DATA ATUAL
const today = new Date();

// PEGA SEMANA DO ANO
function getWeekNumber(date){

  const firstDay = new Date(date.getFullYear(),0,1);

  const pastDays = (date - firstDay) / 86400000;

  return Math.ceil((pastDays + firstDay.getDay()+1)/7);

}

const currentWeek = getWeekNumber(today);

// VERIFICA RESET
const savedWeek = localStorage.getItem("week");

if(savedWeek != currentWeek){

  localStorage.removeItem("tasks");

  localStorage.setItem("week", currentWeek);

}

// CHECKBOX
tasks.forEach(task => {

  task.addEventListener("change", () => {

    const parent = task.parentElement;

    if(task.checked){

      parent.classList.add("completed");

      xp += 10;

    } else {

      parent.classList.remove("completed");

      xp -= 10;

    }

    xpDisplay.textContent = xp;

    saveProgress();

  });

});

// SALVAR
function saveProgress(){

  const checked = [];

  tasks.forEach((task,index)=>{

    checked[index] = task.checked;

  });

  localStorage.setItem("tasks", JSON.stringify(checked));

  localStorage.setItem("xp", xp);

}

// CARREGAR
function loadProgress(){

  const checked = JSON.parse(localStorage.getItem("tasks"));

  const savedXP = localStorage.getItem("xp");

  if(savedXP){

    xp = Number(savedXP);

    xpDisplay.textContent = xp;

  }

  if(checked){

    tasks.forEach((task,index)=>{

      task.checked = checked[index];

      if(task.checked){

        task.parentElement.classList.add("completed");

      }

    });

  }

}

loadProgress();