import React from "react";

function Post({ item }) {
  //   console.log(item);
  return (
    <>
      <div className="card mb-2 p-2">
        <div className="d-flex space-between ">
          <h5 className="card-title">{item.title}</h5>

          <p>{item.id}</p>
        </div>
        <p className="card-text">{item.body}</p>
      </div>
    </>
  );
}

export default Post;
