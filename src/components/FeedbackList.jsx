import React from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, animate, AnimatePresence } from "framer-motion";

function FeedbackList(props) {
  if (!props.feedback || props.feedback.length === 0) {
    return <h4>No feedback yet</h4>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {props.feedback.map((item) => (
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
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {props.feedback.map((item) => (
  //       <FeedbackItem
  //         key={item.id}
  //         item={item}
  //         handleDelete={props.handleDelete}
  //       />
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;
