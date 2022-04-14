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
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";
import Card from "./components/shared/Card";
import Post from "./components/Post";
import Sample from "./components/Sample";

function App() {
  const [feedbacks, setFeedback] = useState(FeedbackData);

  return (
    <FeedbackProvider>
      <Router>
        {/* Passing multiple Props */}
        {/* <Header bgColor="red" textColor="blue" /> */}
        {/* <Sample></Sample> */}

        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />

                  {/* NavLink - Navigation Links to show in Home Screen */}
                  {/* Link - also works */}
                  {/* <Card>
                    <NavLink to="/" activeClassName="active">
                      Home
                    </NavLink>
                  </Card>
                  <Card>
                    <Link to="/about" activeClassName="active">
                      About
                    </Link>
                  </Card>
                  <AboutIconLink /> */}
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
            {/* To catch params in the url we use ":" and then the name of the param */}
            {/*  "/*" is used for nested routes (routes inside a route having its base route) */}
            <Route path="/post/*" element={<Post />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
