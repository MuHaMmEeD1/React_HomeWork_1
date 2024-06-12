import { Component } from "react";

class ToDoForm extends Component {
  state = {
    inputValue: "",
  };

  addToDoForm = (e) => {
    e.preventDefault();

    this.props.addToDo(this.state.inputValue);
  };

  changeInputValue = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.addToDoForm}>
          <label>Name</label>
          <input
            onChange={this.changeInputValue}
            value={this.state.inputValue}
            type="text"
          />

          <button type="Submit">Submit</button>
        </form>
      </>
    );
  }
}

export default ToDoForm;
