import React, { useContext } from "react";
import Post from "./Post";
import { AppContext } from "../store/AppProvider";

function PostList() {
  //   console.log(items);
  const { currentItems } = useContext(AppContext);
  return (
    <div className="container">
      <div className="row">
        {currentItems.map((x) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={x.id}>
            <Post item={x} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
