import ToDo from "./ToDo";

const ToDoList = ({ toDos, deleteToDo }) => {
  console.log(toDos);
  return (
    <>
      <ul>
        {toDos.map((toDo) => {
          console.log(toDo);
          return <ToDo key={toDo.id} toDo={toDo} deleteToDo={deleteToDo} />;
        })}
      </ul>
    </>
  );
};

export default ToDoList;
