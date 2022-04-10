import { useState } from "react";

// Hooks are always start with use

function FeedbackItem() {
  // const [name of the piece of state , function to update that piece of state] = useState(what ever default value for the state)
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("Tis is an example of a feedback item");

  //   Changing state on a button click event
  //   const handleClick = () => {
  //     // setRating(20);
  //     setRating((prev) => {
  //       return prev + 1;
  //     });
  //   };

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default FeedbackItem;
