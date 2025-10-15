window.onload = () => {
  const createDaysOfTheWeek = () => {
    const weekDays = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];
    const weekDaysList = document.querySelector(".week-days");

    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement("li");
      dayListItem.innerHTML = days;

      weekDaysList.appendChild(dayListItem);
    }
  };

  createDaysOfTheWeek();

  // Escreva seu código abaixo
  const btnHoliday = document.querySelector("#btn-holiday");

  const decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const createdDaysOfDecember = () => {
    const ulDayOfDecember = document.getElementById("days");

    for (let index = 0; index < decemberDaysList.length; index += 1) {
      const days = decemberDaysList[index];
      const daysOfDecember = document.createElement("li");
      daysOfDecember.className = "day";
      daysOfDecember.innerHTML = days;
      ulDayOfDecember.appendChild(daysOfDecember);
    }
  };
  createdDaysOfDecember();

  const holiday = document.querySelectorAll(".day");
  const addHolidayClass = () => {
    holiday[25].classList.add("holiday");
    holiday[26].classList.add("holiday");
    holiday[32].classList.add("holiday");
    holiday[5].classList.add("friday");
    holiday[12].classList.add("friday");
    holiday[19].classList.add("friday");
    holiday[26].classList.add("friday");
  };

  addHolidayClass();

  btnHoliday.addEventListener("click", () => {
    const holiday = document.querySelectorAll(".holiday");
    let backgroundColor = "#EEEEEE";
    let newColor = "white";
    for (index = 0; index < holiday.length; index += 1) {
      if (holiday[index].style.background === newColor) {
        holiday[index].style.background = backgroundColor;
      } else {
        holiday[index].style.background = newColor;
      }
    }
  });

  const btnFriday = document.querySelector("#btn-friday");
  btnFriday.addEventListener("click", () => {
    const friday = document.querySelectorAll(".friday");
    const newContent = "Dia de se afundar no alcool";

    for (index = 0; index < friday.length; index += 1) {
      const content = [4, 11, 18, 28];

      if (friday[index].innerHTML === newContent) {
        friday[index].innerHTML = content[index];
      } else {
        friday[index].innerHTML = newContent;
      }
    }
  });

  const zoom = () => {
    let days = document.querySelector("#days");
    days.addEventListener("mouseover", (event) => {
      event.target.style.fontSize = "30px";
    });
  };
  const ofZoom = () => {
    let days = document.querySelector("#days");
    days.addEventListener("mouseout", (event) => {
      event.target.style.fontSize = "20px";
    });
  };

  zoom();
  ofZoom();

  const tasks = document.getElementById("task-input");
  const addTask = document.getElementById("task-list");
  const btnAddTask = document.getElementById("btn-add");

  const addTasks = (event) => {
    const li = document.createElement("li");

    li.innerHTML = event.target.value;
    li.className = "taskAdd";

    // Adiciona o evento de clique aqui
    li.addEventListener("click", () => {
      const allLi = document.querySelectorAll(".taskAdd");

      if (li.classList.contains("selected")) {
        li.classList.remove("selected");
      } else {
        allLi.forEach((item) => item.classList.remove("selected"));
        li.classList.add("selected");
      }
    });

    addTask.appendChild(li);
  };

  const task = document.querySelectorAll(".task");
  task.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("selected")) {
        item.classList.remove("selected");
      } else {
        task.forEach((item) => item.classList.remove("selected"));
        item.classList.add("selected");
      }
    });
  });

  const days = document.querySelectorAll(".day");
  days.forEach((item) => {
    item.addEventListener("click", () => {
      const taskSelected = document.querySelector(".selected");
      if (item.style.color === taskSelected.style.backgroundColor) {
        item.style.color = "rgb(119,119,119)";
      } else {
        item.style.color = taskSelected.style.backgroundColor;
      }
    });
  });

  btnAddTask.addEventListener("click", () => {
    if (tasks.value.length <= 0) {
      alert("ERROR, ESCREVA ALGO");
    }
  });

  tasks.addEventListener("change", addTasks);
};
