import { React, useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";

// "useContext" is a react hook to consume values in a provider created using "createContext" react hook

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (feedback.length === 0) {
    return <h4>No feedback yet</h4>;
  }

  // return (
  //   <div className="feedback-list">
  {
    /* <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={props.handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence> */
  }
  {
    /* </div>
  ); */
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
