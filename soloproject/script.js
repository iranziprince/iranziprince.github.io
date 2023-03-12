function addTask() {
	var taskInput = document.getElementById("taskInput");
	if (taskInput.value === '') {
		alert("Please enter a task!");
		return;
	}
	var taskList = document.getElementById("taskList");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(taskInput.value));
	taskList.appendChild(li);
	taskInput.value = "";
	li.onclick = function() {
		this.classList.toggle("checked");
	};
}

var tasks = document.querySelectorAll("li");
for (var i = 0; i < tasks.length; i++) {
	tasks[i].onclick = function() {
		this.classList.toggle("checked");
	};
}
