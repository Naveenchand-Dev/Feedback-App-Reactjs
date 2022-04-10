import React from "react";

function FeedbackStats(props) {
  // calculate ratings average
  let average =
    props.feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / props.feedback.length;

  average = average.toFixed(1).replace(/[.,]0+$/, "");

  return (
    <div className="feedback-stats">
      <h4>{props.feedback.length} Reviews</h4>
      <h4>average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
