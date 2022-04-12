import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";

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
    <>
      {/* Passing multiple Props */}
      {/* <Header bgColor="red" textColor="blue" /> */}
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedbacks} />
        <FeedbackList feedback={feedbacks} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
