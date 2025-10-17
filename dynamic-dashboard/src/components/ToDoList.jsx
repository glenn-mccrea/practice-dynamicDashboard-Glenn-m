const ToDoList = () => {
  const innerToDo = [
    { task: "Take dog to vet", isdone: false },
    { task: "Call Grandma", isdone: true },
    { task: "Learn React!", isdone: false },
  ];

  const isCompleted = (i) => {
    return innerToDo[i].isdone ? "✅" : "❌";
  };

  return (
    <ul>
      <li>
        <div>
          {innerToDo[0].task} {isCompleted(0)}
        </div>
      </li>
      <li>
        <div>
          {innerToDo[1].task} {isCompleted(1)}
        </div>
      </li>
      <li>
        <div>
          {innerToDo[2].task} {isCompleted(2)}
        </div>
      </li>
    </ul>
  );
};

export default ToDoList;
