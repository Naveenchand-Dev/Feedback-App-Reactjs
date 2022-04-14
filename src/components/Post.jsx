// content inside Routes tag only change, The example for this is see how the header component is remains same

import React from "react";

// useParams is a react hook which react-router-dom offers a way to get the params from the url.
// import { useParams } from "react-router-dom";

// To Redirect or Navigate to a different page
// use Navigate is react hook which react-router-dom offers a way to navigate to a different page.
import {
  Navigate,
  useNavigate,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

function Post() {
  // const params = useParams();
  const status = 200;

  const navigate = useNavigate();

  const onClick = () => {
    console.log("Hello");
    navigate("/about");
  };

  if (status == 404) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
      {/* <h2>{params.id}</h2> */}
      <Routes>
        <Route
          path="/show"
          element={<h1>Hello, I'm show route, decendent of post route </h1>}
        ></Route>
      </Routes>
    </div>
  );
}

export default Post;
