import { useState } from "react";

export default function FAQCard({ question, answer }) {
  const [expanded, setExpanded] = useState();
  return (
    <div className="FAQ_card">
      <div className="FAQ_question">
        <div className="question_text">{question}</div>
        <img
          src="images/arrow.png"
          className={`${expanded? "expanded_arrow" : ""} arrow`}
          onClick={() => {
            setExpanded(!expanded);
          }}
        />
      </div>
      {expanded ? <div className="FAQ_answer">{answer}</div> : null}
    </div>
  );
}
