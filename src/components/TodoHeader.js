import React, { Component } from "react";

class TodoHeader extends Component {
  render() {
    const { newUser, hintMessage, taskCount, colorForLeft } = this.props;
    return (
      <div className="container-fluid text-center bg-dark text-primary mb-4 bordCorn pb-4">
        <div className="row">
          <div className="mr-3 display-3 p-3 col-md-12 text-center ">
            {newUser} ToDo List
          </div>

          <div className=" text-success p-3  col-md-4  ml-5 headerMsg">
            {hintMessage}
          </div>

          <div className="col-md-5 ml-5 p-3 text-warning text-center headerMsg">
            You have
            <span className={`text-${colorForLeft} m-2`}>{taskCount}</span>
            left undone in your todo list
          </div>
        </div>
      </div>
    );
  }
}

export default TodoHeader;
