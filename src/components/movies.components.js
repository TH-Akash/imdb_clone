import React, { Component } from "react";
import Pagination from "../common/pagination.component";
import Filter from "../common/filtering.component";
import MoviesTable from "./movies-table.components";
import _ from "lodash";
import { getGenres, getMovies } from "../services/movies.setvices";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: [{ name: "All Genres" }, ...getGenres()],
    activePage: 1,
    pageCount: 5,
    selectedGenre: "All Genres",
    sortColumn: { path: "title", order: "asc" },
  };

  handelchangePage = (page) => {
    this.setState({ ...this.state, activePage: page });
  };

  handeleClickGenre = (genre) => {
    this.setState({ ...this.state, selectedGenre: genre, activePage: 1 });
  };

  paginateMovies = (movies) => {
    const { activePage, pageCount } = this.state;
    const start = (activePage - 1) * pageCount;
    const paginateMovies = movies.slice(start, start + pageCount);
    return paginateMovies;
  };

  fileterMovies = () => {
    const { movies, selectedGenre } = this.state;

    const fileterMovies = movies.filter((movie) => {
      if (selectedGenre === "All Genres") return true;
      if (movie.genres.includes(selectedGenre)) return true;
      return false;
    });
    return fileterMovies;
  };

  sortMovies = (movies) => {
    const { sortColumn } = this.state;
    const sortMovies = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);
    return sortMovies;
  };

  // handelSort = (path) => {
  //   this.setState({...this.state.sortColum.path=path}, () => {
  //       this.state.movies.sort((a, b) => {
  //       const {order, path} = this.state.sortColum;
  //       if(order==="asc")return a[path]>b[path]
  //       else return a[path]<b[path]
  //     });
  //     const {order} = this.state.sortColum;
  //     if(order=="asc")this.setState({...this.state.sortColum.order='dsc'})
  //     else this.setState({...this.state.sortColum.order='asc'})
  //   });
  // };

  handelSort = (sortColumn) => {
    this.setState({ ...this.state, sortColumn });
  };
  render() {
    const filtered = this.fileterMovies();

    const sorted = this.sortMovies(filtered);

    const movies = this.paginateMovies(sorted);

    return (
      <>
        <div className="row">
          <Filter
            fileteredItems={this.state.genres.map((genre, idx) => ({
              _id: idx,
              name: genre.name,
            }))}
            onClick={this.handeleClickGenre}
            selectedItem={this.state.selectedGenre}
          />

          <div className="col-10">
            <h3>showing {filtered.length} Movies</h3>

            <MoviesTable 
                movies={movies}
                onSort={this.handelSort}
                sortColumn={this.state.sortColumn}
                 
             />

            <Pagination
              totalItems={filtered.length}
              pageCount={this.state.pageCount}
              activePage={this.state.activePage}
              onClickPage={this.handelchangePage}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
