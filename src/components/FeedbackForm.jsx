import React from "react";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import { useState, useContext, useEffect } from "react";
import Button from "./shared/Button";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      console.log(feedbackEdit.item.rating);
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      let rater = feedbackEdit.item.rating;
      setRating(rater);
    }
  }, [feedbackEdit]);

  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text != "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Feedback must be at least 10 characters long");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
        setBtnDisabled(true);
        setText("");
        setRating(10);
      } else {
        addFeedback(newFeedback);
        setText("");
      }
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your services with us ?</h2>
        <RatingSelect select={(rate) => setRating(rate)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
