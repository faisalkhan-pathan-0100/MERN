import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";

function App() {
  // const [items, setItems] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemPerPage = 8;

  // const last = currentPage * itemPerPage;
  // const start = last - itemPerPage;
  // const currentItems = items.slice(start, last);

  // const pages = Math.ceil(items.length / itemPerPage);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setItems(json);
  //     });
  // }, []);

  return (
    <>
      <Header />
      <PostList />
      <Pagination />
    </>
  );
}

export default App;
