import { Component } from "react";
import ToDoForm from "./componnets/ToDoForm";
import ToDoList from "./componnets/ToDoList";

class App extends Component {
  state = {
    toDos: [
      { id: 1, name: "toDo-1" },
      { id: 2, name: "toDo-2" },
    ],
  };

  addToDo = (name) => {
    let id = -1;

    while (true) {
      id = Math.floor(Math.random() * 10000);

      let checkId = true;

      this.state.toDos.forEach((t) => {
        if (t.id == id) {
          checkId = false;
        }
      });

      if (checkId) {
        break;
      }
    }

    this.setState({
      toDos: [...this.state.toDos, { id: id, name: name }],
    });

    console.dir(this.state.toDos);
    console.log(this.state.toDos);
  };

  deleteToDo = (id) => {
    const filterToDo = this.state.toDos.filter((toDo) => {
      return toDo.id != id;
    });

    this.setState({
      toDos: [...filterToDo],
    });
  };

  render() {
    return (
      <>
        <h1>HomeWork_1</h1>
        <ToDoForm addToDo={this.addToDo} />
        <ToDoList toDos={this.state.toDos} deleteToDo={this.deleteToDo} />
      </>
    );
  }
}

export default App;
