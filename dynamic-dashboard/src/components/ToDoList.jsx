const ToDoList = () => {
  const innerToDo = [
    { id: "task1", task: "Take dog to vet", isdone: false },
    { id: "task2", task: "Call Grandma", isdone: true },
    { id: "task3", task: "Learn React!", isdone: false },
  ];

  return (
    <ul>
      {innerToDo.map((doItem, id) => (
        <li key={id}>
          <div>
            {doItem.task} {doItem.isdone ? "✅" : "❌"}
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ToDoList;
