// React provides us createContext, useContext hook to consume values in a provider created using createContext.
// These help us in Global State Management.
// Instead of prop drilling we can use it to consume values in a provider created using createContext and useContext hook.

import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "Feedback item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "Feedback item 2",
      rating: 8,
    },
  ]);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  //Update feedback item
  const updateFeedback = (id, updatedFeedback) => {
    console.log(id, updatedFeedback);
    setFeedback(
      feedback.map((item) =>
        item.id == id ? { ...item, ...updatedFeedback } : item
      )
    );
    setFeedbackEdit({ item: {}, edit: false });
  };

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const deleteFeedback = (id) => {
    console.log("App", id);
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
