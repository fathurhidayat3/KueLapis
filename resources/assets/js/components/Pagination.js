import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    const paginator = this.props.paginator;

    return (
      <div>
        <small className="pull-left">Showing {paginator.from} to {paginator.to} from {paginator.total} data.</small>
        <nav aria-label="Page navigation" className="pull-right">
          <ul className="pagination pagination-sm no_margin_vertical">
            <li className={paginator.prev_page_url ? null : "disabled"}>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li><a href="#">{paginator.current_page}</a></li>
            <li className={paginator.next_page_url ? null : "disabled"}>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;