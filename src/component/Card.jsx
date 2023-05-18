import React, { useState } from "react";
import data from "../assets/db/data.json";
import woman_dsk from "../assets/images/illustration-woman-online-desktop.svg";
import pattern_dsk from "../assets/images/bg-pattern-desktop.svg";
import box from "../assets/images/illustration-box-desktop.svg";
import arrow_down from "../assets/images/icon-arrow-down.svg";

const Card = () => {
  const [db] = useState(data);
  const [selected, setSelected] = useState(null);
  const open = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  return (
    <div className="card">
      <div className="pictures">
        <div className="inside">
          <div className="woman">
            <img src={woman_dsk} alt="woman" />
          </div>
          <div className="pattern">
            <img src={pattern_dsk} alt="pattern" />
          </div>
        </div>
        <div className="outside"></div>
      </div>
      <div className="faq">
        <h2 className="title">FAQ</h2>
        {db.map((el, index) => (
          <div key={index} className="item">
            <div className="questions" onClick={() => open(el.id)}>
              <a
                className={
                  selected === el.id ? "question-selected" : "question"
                }
              >
                {el.question}
              </a>
              <img
                src={arrow_down}
                alt="icon-arrow-down.svg"
                className={selected === el.id ? "arrow-rotated" : "arrow"}
              />
            </div>
            <div className="answers">
              <p className={selected === el.id ? "answer-selected" : "answer"}>
                {el.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
