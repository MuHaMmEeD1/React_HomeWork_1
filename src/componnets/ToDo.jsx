const ToDo = ({ toDo, deleteToDo }) => {
  console.log(toDo);

  const deleteToDoFc = () => {
    deleteToDo(toDo.id);
  };

  return (
    <li>
      <p>id: {toDo.id}</p>
      <p>name: {toDo.name}</p>
      <button onClick={deleteToDoFc}>Delete</button>
    </li>
  );
};

export default ToDo;
