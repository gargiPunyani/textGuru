import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const QuestionDetails = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  console.log(open)
  return (
    <div>
      <div className="ques">
        <h3 className ="questions" onClick={handleOpen}>
          {props.question}?
          {open === false ? (
            <FaAngleDown onClick={handleOpen} className="angleDown" />
          ):
       (
            <FaAngleUp onClick={handleOpen} className="angleDown" />
          )}
        </h3>
        {open ===true && (
          <>
            <p>{props.ans}</p>
            {
                props.ans2 &&
                <p>{props.ans2}</p>
            }
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionDetails;
