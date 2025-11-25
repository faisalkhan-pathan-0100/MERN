import React, { useContext } from "react";
import { AppContext } from "../store/AppProvider";

export const Pagination = () => {
  const { pages, setCurrentPage } = useContext(AppContext);
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  const pageHandle = (x) => {
    setCurrentPage(x);
  };
  return (
    <center>
      <div className="m-5">
        {pageNumbers.map((x) => (
          <button
            type="button"
            className="btn btn-light p-3 m-1"
            onClick={() => pageHandle(x)}
          >
            {" "}
            {x}
          </button>
        ))}
      </div>
    </center>
  );
};

export default Pagination;
