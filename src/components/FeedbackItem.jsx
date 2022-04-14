import { useState, useContext } from "react";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

// Hooks are always start with use

function FeedbackItem(props) {
  const { deleteFeedback } = useContext(FeedbackContext);

  // const [name of the piece of state , function to update that piece of state] = useState(what ever default value for the state)
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is an example of a feedback item");

  //   Changing state on a button click event
  //   const handleClick = () => {
  //     // setRating(20);
  //     setRating((prev) => {
  //       return prev + 1;
  //     });
  //   };

  return (
    <Card>
      <div className="num-display">{props.item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(props.item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{props.item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
}

export default FeedbackItem;
