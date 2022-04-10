import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList(props) {
  if (!props.feedback || props.feedback.length === 0) {
    return <h4>No feedback yet</h4>;
  }
  return (
    <div className="feedback-list">
      {props.feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
