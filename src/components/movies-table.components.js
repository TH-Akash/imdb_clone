import React, { Component } from "react";
import Table from "../common/Table.component";

const MoviesTable = ({ movies,onSort,sortColumn }) => {
  const columns = [
    {
      path:'posterurl',label: "Poster",
      content: (movie) => (
        
          <img
            style={{ height: "50px", width: "50px" }}
            src={movie.posterurl}
          />
        
      ),
    },
    { path:'title',label: "Title", content: (movie) => movie.title},
    {path:'imdbRating', label: "Rating", content: (movie) => movie.imdbRating },
    {
      path:'you_rated', label: "Your-rating",
      content: (movie) => (
            
          movie.you_rated ? (
            <i class="bi bi-star-fill"></i>
          ) : (
            <i class="bi bi-star"></i>
          )
        
      ),
    },
  ];
  return(<Table items={movies} columns={columns} onSort={onSort} sortColumn={sortColumn}/>) ;
};

export default MoviesTable;
