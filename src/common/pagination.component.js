import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const { totalItems, pageCount, activePage, onClickPage } = this.props;

    const totalPages = Math.ceil(totalItems / pageCount);

    const pages = _.range(1, totalPages + 1, 1);
       if(totalItems<=pageCount) return null;

    return (
      <nav aria-label="Page navigation example d-flex fles-warp">
        <ul class="pagination" bg-primary>
          <li
            class="page-item"
            onClick={() =>
              activePage - 1 >= 1 ? onClickPage(activePage - 1) : null
            }
          >
            <a class="page-link" style={{ cursor: "pointer" }}>
              Previous
            </a>
          </li>

          {pages.map((page) => (
            <li
              onClick={() => {
                onClickPage(page);
              }}
              class={activePage === page ? "page-item active " : "page-item"}
            >
              <a class="page-link" style={{ cursor: "pointer" }}>
                {page}
              </a>
            </li>
          ))}

          <li
            class="page-item"
            onClick={() =>
              activePage + 1 <= totalPages ? onClickPage(activePage + 1) : null
            }
          >
            <a class="page-link" style={{ cursor: "pointer" }}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
