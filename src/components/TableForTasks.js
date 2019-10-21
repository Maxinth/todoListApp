import React from "react";

function TableForTasks(props) {
  const { tableRows } = props;
  return (
    <table className="table  text-center table-striped  table-bordered bord">
      <thead>
        <tr className="bg-dark text-warning">
          <th className="bg-white text-dark">Task Description</th>
          <th className={`text-white bg-success`}>Finished Tasks</th>
          <th className="text-white bg-danger">Remove Entry</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}

export default TableForTasks;
