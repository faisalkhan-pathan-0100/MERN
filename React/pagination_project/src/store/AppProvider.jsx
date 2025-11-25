import { createContext, useEffect, useState } from "react";
import React from "react";

// setp -1 create the context
export const AppContext = createContext();

// create context provider component
const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 8;

  const last = currentPage * itemPerPage;
  const start = last - itemPerPage;
  const currentItems = items.slice(start, last);

  const pages = Math.ceil(items.length / itemPerPage);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  // step 3 context provider
  return (
    <>
      <AppContext.Provider value={{ currentItems, pages, setCurrentPage }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppProvider;
