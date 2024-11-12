const taskList = [];

const addTask = () => {
  const taskField = document.getElementById("task");
  const hourField = document.getElementById("hour");

  const taskObject = {
    task: taskField.value,
    hour: hourField.value,
  };

  taskList.push(taskObject);
  console.log(taskList);
};
