import React from "react";

const TableBody = ({ columns, items }) => {
  
  return (
    <tbody>
      {items.map((item) => (
        <tr>{columns.map((column) => <td>{column.content(item)}</td>)}</tr>
      ))}
    </tbody>
  );
};

export default TableBody;   
