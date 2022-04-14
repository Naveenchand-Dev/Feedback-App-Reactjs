import React from "react";

// useParams is a react hook which react-router-dom offers a way to get the params from the url.

import { useParams } from "react-router-dom";

function Post() {
  const params = useParams();
  return (
    <div>
      <h1>Post Number: {params.id}</h1>
      <h1>Name: {params.name}</h1>
    </div>
  );
}

export default Post;
