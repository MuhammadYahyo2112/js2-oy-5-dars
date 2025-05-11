  
    let taskInput = document.getElementById("taskInput");
    let addTaskBtn = document.getElementById("addTask");
    let taskList = document.getElementById("taskList");
    let themeToggle = document.getElementById("themeToggle");

    let darkMode = false;

    addTaskBtn.addEventListener("click", () => {
      let text = taskInput.value.trim();
      if (text !== "") {
        addTask(text);
        taskInput.value = "";
      }
    });

    function addTask(text) {
      let li = document.createElement("li");

      let span = document.createElement("span");
      span.textContent = text;

      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", () => {
        li.classList.toggle("completed");
      });

      let actions = document.createElement("div");
      actions.className = "actions";

      let delBtn = document.createElement("button");
      delBtn.innerHTML = "🗑️";
      delBtn.onclick = () => li.remove();

      let editBtn = document.createElement("button");
      editBtn.innerHTML = "✏️";
      editBtn.onclick = () => {
        let newText = prompt("Edit task:", span.textContent);
        if (newText !== null) span.textContent = newText;
      };

      actions.appendChild(editBtn);
      actions.appendChild(delBtn);

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(actions);

      taskList.appendChild(li);
    }

    themeToggle.addEventListener("click", () => {
      darkMode = !darkMode;
      document.body.classList.toggle("dark-mode", darkMode);
      themeToggle.textContent = darkMode ? "☀️" : "🌙";
    });
  