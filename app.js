const sunIcon = document.getElementById("sun"),
  moonIcon = document.getElementById("moon"),
  backgrounds = document.querySelectorAll(".light"),
  mobileTodoType = document.querySelector(".mobile .todo-type"),
  inputTodo = document.querySelector("input[type='text']"),
  track = document.querySelector(".track"),
  checkmark = document.querySelectorAll(".checkmark"),
  todoName = document.querySelectorAll("p"),
  todoBox = document.querySelectorAll(".todo-box"),
  todosBox = document.querySelector(".todos-box"),
  numOfItemsLeft = document.querySelector(".num-left"),
  reader = document.querySelector(".reader"),
  labels = document.querySelectorAll(".label"),
  labelss = document.querySelectorAll(".container"),
  deleteBtn = document.querySelectorAll(".delete"),
  checkBox = document.querySelectorAll(".checkbox"),
  todoText = document.querySelectorAll(".todo-output"),
  clearCompleted = document.querySelector(".clear"),
  activeTodos = document.querySelectorAll(".active"),
  allTodos = document.querySelectorAll(".all"),
  completedTodos = document.querySelectorAll(".completed"),
  header = document.querySelector("header"),
  body = document.querySelector("body");

allTodos.forEach((allTodo) => {
  allTodo.addEventListener("click", function () {
    allTodo.classList.toggle("category");
    completedTodos.forEach((completedTodo) => {
      completedTodo.classList.contains("category")
        ? completedTodo.classList.remove("category")
        : completedTodo;
    });
    activeTodos.forEach((activeTodo) => {
      activeTodo.classList.contains("category")
        ? activeTodo.classList.remove("category")
        : activeTodo;
    });
    console.log("all clicked");
    checkBox.forEach((check) => {
      if (check.checked || check.style.display === "none") {
        check.parentElement.parentElement.parentElement.style.display = "flex";
      } else {
        check.parentElement.parentElement.parentElement.style.display = "flex";
      }
    });
  });
});

completedTodos.forEach((completedTodo) => {
  completedTodo.addEventListener("click", function () {
    completedTodo.classList.toggle("category");
    allTodos.forEach((allTodo) => {
      allTodo.classList.contains("category")
        ? allTodo.classList.remove("category")
        : allTodo;
    });
    activeTodos.forEach((activeTodo) => {
      activeTodo.classList.contains("category")
        ? activeTodo.classList.remove("category")
        : activeTodo;
    });
    console.log("completed clicked");
    checkBox.forEach((check) => {
      if (check.checked || check.style.display === "none") {
        check.parentElement.parentElement.parentElement.style.display = "flex";
      } else {
        check.parentElement.parentElement.parentElement.style.display = "none";
      }
    });
  });
});

activeTodos.forEach((activeTodo) => {
  activeTodo.addEventListener("click", function () {
    activeTodo.classList.toggle("category");
    completedTodos.forEach((completedTodo) => {
      completedTodo.classList.contains("category")
        ? completedTodo.classList.remove("category")
        : completedTodo;
    });
    allTodos.forEach((allTodo) => {
      allTodo.classList.contains("category")
        ? allTodo.classList.remove("category")
        : allTodo;
    });
    console.log("active clicked");
    checkBox.forEach((check) => {
      if (check.checked) {
        check.parentElement.parentElement.parentElement.style.display = "none";
      } else if (!check.checked || check.style.display === "none") {
        check.parentElement.parentElement.parentElement.style.display = "flex";
      }
    });
  });
});

// clearCompleted.addEventListener("click", function(){
//     console.log("clear clicked")
//     checkBox.forEach(check => {
//         if(check.checked){
//             check.parentElement.parentElement.parentElement.remove();
//         }
//     });
// });

// $(function(){
//     $('.todos').on('click', '.clear', function(e){
//         if(e.target){
//             console.log("clear clicked")
//             checkBox.forEach(check => {
//                 if(check.checked){
//                     check.parentElement.parentElement.parentElement.remove();
//                 }
//             });
//         }
//     });
// });

$(".todos").on("click", ".clear", function (e) {
  console.log("clear clicked");
  checkBox.forEach((check) => {
    if (check.checked) {
      check.parentElement.parentElement.parentElement.remove();
    }
  });
});

inputTodo.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (inputTodo.value !== "") {
      console.log(inputTodo.value);
      console.log(checkBox.length);
      // const box = `
      // <div class="todo-box">
      //     <div class="label">
      //         <label class="container">
      //             <input onclick="${completed()}" class="checkbox" type="checkbox" title="check">
      //             <span class="checkmark"></span>
      //         </label>
      //         <p class="todo-output">${inputTodo.value}</p>
      //     </div>
      //     <div onclick="deleteTodo()" class="delete">
      //         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
      //     </div>
      // </div>
      // `;
      // todosBox.insertAdjacentHTML('beforeend', box);
      // inputTodo.value = "";

      const todoBx = document.createElement("div"),
        labeles = document.createElement("div"),
        label = document.createElement("label"),
        checkBx = document.createElement("input"),
        checkmrk = document.createElement("span"),
        todoOutput = document.createElement("p"),
        deleteDiv = document.createElement("div"),
        svg = document.createElement("img");

      todoBx.className = "todo-box";
      labeles.className = "label";
      todoBx.appendChild(labeles);
      label.className = "container";
      labeles.appendChild(label);
      checkBx.type = "checkbox";
      checkBx.className = "checkbox";
      checkBx.onclick = function () {
        this.checked
          ? todoOutput.classList.toggle("line-through")
          : todoOutput.classList.toggle("line-through");
      };
      label.appendChild(checkBx);
      checkmrk.className = "checkmark";
      label.appendChild(checkmrk);
      todoOutput.className = "todo-output";
      todoOutput.innerHTML = inputTodo.value;
      labeles.appendChild(todoOutput);
      deleteDiv.className = "delete";
      deleteDiv.onclick = function () {
        console.log("newly delete clicked");
        this.parentElement.remove();
      };
      todoBx.appendChild(deleteDiv);
      svg.src = "./images/icon-cross.svg";
      deleteDiv.appendChild(svg);
      // todosBox.prepend(todoBx);
      todosBox.appendChild(todoBx);
      inputTodo.value = "";
    } else {
      alert("Type your todo in the input box please !!!");
    }
  }
});

labels.forEach((item, idx) => {
  item.addEventListener("click", () => {
    checkBox.forEach((check) => {
      if (check.checked) {
        ToggleActive(item, idx);
      }
    });
  });
});

function ToggleActive(el, index) {
  el.classList.toggle("line-through");
  todoText.forEach((item, idx) => {
    if (idx !== index) {
      item.classList.remove("line-through");
    }
  });
}

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log("clicked");
    // btn.parentElement.remove();
    this.parentElement.remove();
  });
});

sunIcon.addEventListener("click", function () {
  sunIcon.classList.toggle("hide");
  moonIcon.classList.toggle("show");
  backgrounds.forEach((bkg) => {
    bkg.style.backgroundColor = "hsl(0, 0%, 98%)";
  });
  todoBox.forEach((box) => {
    box.style.borderColor = "hsl(233, 11%, 84%)";
  });
  track.style.borderColor = "hsl(233, 11%, 84%)";
  mobileTodoType.style.backgroundColor = "hsl(0, 0%, 98%)";
  mobileTodoType.style.borderColor = "hsl(0, 0%, 98%)";
  inputTodo.style.backgroundColor = "hsl(0, 0%, 98%)";
  inputTodo.style.borderColor = "hsl(0, 0%, 98%)";
  inputTodo.parentElement.style.borderColor = "hsl(0, 0%, 98%)";
  if (screen.width > "560") {
    header.classList.toggle("header-light-dekstop");
  } else {
    header.classList.toggle("header-light-mobile");
  }
  todoName.forEach((name) => name.classList.toggle("text"));
  body.classList.toggle("body-light");
  checkmark.forEach((check) => {
    check.style.backgroundColor = "hsl(0, 0%, 98%)";
    check.addEventListener("mouseover", function () {
      check.style.backgroundColor = "hsl(0, 0%, 98%)";
    });
    check.addEventListener("mouseout", function () {
      check.style.backgroundColor = "hsl(0, 0%, 98%)";
    });
  });
});

moonIcon.addEventListener("click", function () {
  sunIcon.classList.toggle("hide");
  moonIcon.classList.toggle("show");
  backgrounds.forEach((bkg) => {
    bkg.style.backgroundColor = "hsl(235, 24%, 19%)";
  });
  todoBox.forEach((box) => {
    box.style.borderColor = "hsl(233, 14%, 35%)";
  });
  track.style.borderColor = "hsl(233, 14%, 35%)";
  mobileTodoType.style.backgroundColor = "hsl(235, 24%, 19%)";
  mobileTodoType.style.borderColor = "hsl(235, 24%, 19%)";
  inputTodo.style.backgroundColor = "hsl(235, 24%, 19%)";
  inputTodo.style.borderColor = "hsl(235, 24%, 19%)";
  inputTodo.parentElement.style.borderColor = "hsl(235, 24%, 19%)";
  if (screen.width > "560") {
    header.classList.toggle("header-light-dekstop");
  } else {
    header.classList.toggle("header-light-mobile");
  }
  todoName.forEach((name) => name.classList.toggle("text"));
  body.classList.toggle("body-light");
  checkmark.forEach((check) => {
    check.style.backgroundColor = "hsl(235, 24%, 19%)";
    check.addEventListener("mouseover", function () {
      check.style.backgroundColor = "hsl(235, 24%, 19%)";
    });
    check.addEventListener("mouseout", function () {
      check.style.backgroundColor = "hsl(235, 24%, 19%)";
    });
  });
});
