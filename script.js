const tasks = document.querySelectorAll(".task");

const xpDisplay = document.getElementById("xp");

let xp = 0;

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

function saveProgress(){

  const checked = [];

  tasks.forEach((task,index)=>{

    checked[index] = task.checked;

  });

  localStorage.setItem("tasks", JSON.stringify(checked));

  localStorage.setItem("xp", xp);

}

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

// ===== PARTICLES =====

const particles =
  document.querySelector(
    ".particles"
  );


for(let i = 0; i < 50; i++){

  const particle =
    document.createElement(
      "span"
    );


  const size =
    Math.random() * 4 + 2;


  particle.style.width =
    `${size}px`;

  particle.style.height =
    `${size}px`;


  particle.style.left =
    `${Math.random() * 100}%`;


  particle.style.animationDuration =
    `${Math.random() * 10 + 5}s`;


  particle.style.animationDelay =
    `${Math.random() * 5}s`;


  particles.appendChild(
    particle
  );

}