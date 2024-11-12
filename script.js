// generate unique string
const randomIdGenerator = () => {
  let randomStringLength = 10;
  let randomString = "";
  let alphabetString =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < randomStringLength; i++) {
    let randomIndex = Math.floor(Math.random() * alphabetString.length);
    randomString += alphabetString[randomIndex];
  }
  return randomString;
};

let taskList = [
  {
    id: randomIdGenerator(),
    task: "GOOD TASK",
    hour: 20,
    type: "entry",
  },

  {
    id: randomIdGenerator(),
    task: "BAD TASK",
    hour: 20,
    type: "bad",
  },
];

// INPUT TASK AND HOUR
// ADD the TASK to task list
const addTask = () => {
  // console.log("ADD TASK CALLED");

  const taskField = document.getElementById("task");
  const hourField = document.getElementById("hour");

  if (taskField.value != "" && hourField.value != "") {
    const taskObject = {
      id: randomIdGenerator(),
      task: taskField.value,
      hour: hourField.value,
      type: "entry",
    };

    taskList.push(taskObject);
    displayTask();
  } else {
    alert("Please enter task or hour!!");
  }

  // console.log(taskList);
};

// displaying entry list and bad list
const displayTask = () => {
  const goodListElement = document.getElementById("entry-list");
  const badListElement = document.getElementById("bad-list");

  goodListElement.innerHTML = "";
  badListElement.innerHTML = "";

  taskList.map((item, index) => {
    let goodTrValue = "";
    let badTrValue = "";
    if (item.type == "entry") {
      goodTrValue = `
                  <tr>
                    <td>${index + 1}</td>
                    <td>${item.task}</td>
                    <td>${item.hour}</td>
                    <td class="text-end "><button class="btn btn-danger me-1" onclick="deleteTask('${
                      item.id
                    }')"> <i
                          class="fa-solid fa-trash"></i></button>
                          <button class="btn btn-success" onclick="convertTask('${
                            item.id
                          }')"><i
                          class="fa-solid fa-arrow-right"></i></button></td>
                  </tr>
      `;
    } else {
      badTrValue = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.task}</td>
                    <td>${item.hour}</td>
                  <td class="text-end "> <button class="btn btn-warning" onclick="convertTask('${
                    item.id
                  }')"><i class="fa-solid fa-arrow-left"></i></button>
                        <button class="btn btn-danger ms-1" onclick="deleteTask('${
                          item.id
                        }')"><i
                        class="fa-solid fa-trash"></i></button></td>
                </tr>`;
    }

    goodListElement.innerHTML = goodListElement.innerHTML + goodTrValue;
    badListElement.innerHTML = badListElement.innerHTML + badTrValue;
  });
};

// change type from entry -> bad or bad -> entry
const convertTask = (id) => {
  console.log("TASK CONVERTED");

  let task = taskList.find((task) => task.id == id);

  task.type = task.type == "entry" ? "bad" : "entry";

  displayTask();
};

const deleteTask = (id) => {
  taskList = taskList.filter((item) => {
    return item.id !== id;
  });
  displayTask();
};
displayTask();

// const handleOnDelete = (id) => {
//   if (window.confirm("Are you sure, you want to delete this?")) {
//     taskList = taskList.filter((item) => item.id !== id);
//     displayEntryList();
//     displayBadList();
//   }
// };

// const deleteTask = (id) => {
//   console.log("Task Deleted");

//   let task = taskList.filter((task) > task.id ==)
// };
// displayTask();
