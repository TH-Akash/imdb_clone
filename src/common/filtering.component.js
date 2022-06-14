import React, { Component } from "react";

const Filter = ({fileteredItems, onClick, selectedItem}) => {
 
  return (
    <div className="col-2">
      <ul className="list-group">
        {fileteredItems.map((item) => (
          <li
            key={item._id}
            className={
              selectedItem === item.name
                ? `list-group-item active `
                : `list-group-item`
            }
            onClick={() => {
              onClick(item.name);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
