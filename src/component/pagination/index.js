import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ from, to, count, nextPage, previousPage }) => {
  return (
    <React.Fragment>
      <div className="form-group clearfix">
        {from > 0 && (
          <button
            type="button"
            className="btn btn-primary float-left rounded-pill"
            onClick={previousPage}
          >
            <span aria-hidden="true">&laquo;</span> Previous
          </button>
        )}
        {to < count && (
          <button
            type="button"
            className="btn btn-primary float-right rounded-pill"
            onClick={nextPage}
          >
            Next Page <span aria-hidden="true">&raquo;</span>
          </button>
        )}
        {to >= count && (
          <button
            className="btn btn-success float-right rounded-pill"
            type="submit"
          >
            Submit
          </button>
        )}
      </div>
      <div className="form-group text-center"></div>
    </React.Fragment>
  );
};

export default Pagination;

Pagination.prototypes = {
  from: PropTypes.number,
  to: PropTypes.number,
  count: PropTypes.number,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired
};
