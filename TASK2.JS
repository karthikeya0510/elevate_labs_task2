const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");

    li.textContent = taskText;
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "×";
    removeBtn.className = "remove-btn";
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent triggering complete toggle
      taskList.removeChild(li);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
});
