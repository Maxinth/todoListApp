import React, { Component } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoButton from "./components/TodoButton";
import TextInput from "./components/TextInput";
import TableForTasks from "./components/TableForTasks";
import "./todo.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      theme: "bg-primary text-white",
      todoItems: [],
      newItemText: "",
      checkTheme: "secondary"
    };
  }

  updateName = event => {
    this.setState({
      userName: event.target.value
    });
  };

  updateNewTextValue = event => {
    this.setState({
      newItemText: event.target.value
    });
  };

  createNewTodo = () => {
    if (
      !this.state.todoItems.find(item => item.done === this.state.newItemText)
    ) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          { action: this.state.newItemText, done: false }
        ],
        newItemText: ""
      });
    }
  };

  toggleTodo = todo => {
    this.setState({
      todoItems: this.state.todoItems.map(item =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      )
    });
  };

  deleteTask = task => {
    const goneTasks = this.state.todoItems.filter(todo => {
      return todo.action !== task;
    });

    this.setState({
      todoItems: goneTasks
    });
  };

  // if nothing is entered into the task field and submit is clicked, display nothing

  todoTableRows = () =>
    this.state.todoItems.map(item =>
      item.action.length === 0 ? null : (
        <tr key={item.action}>
          <td className="bg-dark  text-white ov">{item.action}</td>
          <td className={`bg-${this.state.checkTheme}`}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => this.toggleTodo(item)}
            />
          </td>
          <td className="bg-white">
            <TodoButton
              text="Remove Task"
              theme="danger"
              val={{ item }}
              callback={() => this.deleteTask(item.action)}
            />
          </td>
        </tr>
      )
    );

  // callback={this.deleteTask(item.action)}/>

  render() {
    // undone tasks putting what was entered into consideration.
    let todoLeft = this.state.todoItems.filter(
      t => !t.action === false && !t.done
    ).length;
    // (!t.action === false && !t.done) - both conditions hold true

    // To set the text based on if the number of items is less than 2
    let itm = todoLeft < 2 ? "task" : "tasks";
    let itemShown = todoLeft === 0 ? "no task  " : `${todoLeft} ${itm} `;

    let leftTheme = todoLeft < 1 ? "secondary" : "danger";

    let testLength = this.state.userName.length === 0;
    let hint = testLength ? (
      <code className="text-muted">Hello Guest!</code>
    ) : (
      `Good day ${this.state.userName}!`
    );
    let owner = testLength ? ".j." : `${this.state.userName}'s `;

    return (
      <React.Fragment>
        <TodoHeader
          newUser={owner}
          hintMessage={hint}
          taskCount={itemShown}
          colorForLeft={leftTheme}
          itemNumber={itm}
        />

        <div className="container mt-3 appColor">
          <div className="row">
            <div className="col-md-4">
              <TextInput
                nameValue={this.state.username}
                TextValue={this.state.newItemText}
                nameChange={this.updateName}
                TextChange={this.updateNewTextValue}
                newTodo={this.createNewTodo}
              />
            </div>

            <div className="col-md-8 ">
              <TableForTasks tableRows={this.todoTableRows()} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
