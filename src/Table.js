import React from "react";

const Table = props => {
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-6">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {props.value.map(row => {
              return (
                <tr>
                  <th scope="row">{row.Id}</th>
                  <td>{row.FirstName}</td>
                  <td>{row.LastName}</td>
                  <td>{row.Email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
