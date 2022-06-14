import React, { Component } from "react";
import TableHeader from "./table-header.componet";
import TableBody from "./table-body.component";

const Table = ({ columns, items, onSort, sortColumn }) => {
  return (
    <table class="table">
      {/* {console.log("test ->", columns)} */}
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody columns={columns} items={items} />
    </table>
  );
};

export default Table;
