import React from "react";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Link,
} from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Card from "./components/shared/Card";
import Post from "./components/Post";

function App() {
  const [feedbacks, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    console.log("App", id);
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedbacks.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    console.log(newFeedback);
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedbacks]);
  };

  return (
    <Router>
      {/* Passing multiple Props */}
      {/* <Header bgColor="red" textColor="blue" /> */}
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedbacks} />
                <FeedbackList
                  feedback={feedbacks}
                  handleDelete={deleteFeedback}
                />

                {/* NavLink - Navigation Links to show in Home Screen */}
                {/* Link - also works */}
                <Card>
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </Card>
                <Card>
                  <Link to="/about" activeClassName="active">
                    About
                  </Link>
                </Card>
                <AboutIconLink />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />
          {/* To catch params in the url we use ":" and then the name of the param */}
          {/* <Route path="/post/:id/:name" element={<Post />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
