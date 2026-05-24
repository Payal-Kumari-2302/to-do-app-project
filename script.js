const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

  if (taskInput.value.trim() === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <span class="task">${taskInput.value}</span>

    <div class="btns">
      <button class="complete">✔</button>
      <button class="delete">🗑</button>
    </div>
  `;

  taskList.appendChild(li);

  const completeBtn = li.querySelector(".complete");
  const deleteBtn = li.querySelector(".delete");
  const task = li.querySelector(".task");

  completeBtn.addEventListener("click", function () {
    task.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  taskInput.value = "";
});