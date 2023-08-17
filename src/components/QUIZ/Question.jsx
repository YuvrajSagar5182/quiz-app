import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import classes from "./Question.module.css";

const classForCorrectAnswer = classes.correctOption;
const classForWrongAnswer = classes.wrongOption;

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Question = (props) => {
  const { optionsClicked, setOptionIsClicked } = props;
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    const options = [props.correctOption, ...props.wrongOptions];
    const shuffled = shuffleArray(options);
    setShuffledOptions(shuffled);
  }, [props.correctOption, props.wrongOptions]);

  const decodeEntities = (encodedString) => {
    const parser = new DOMParser();
    const dom = parser.parseFromString(
      `<!doctype html><body>${encodedString}`,
      "text/html"
    );
    return dom.body.textContent;
  };

  const attemptHandler = (selectedOption) => {
    if (!optionsClicked) {
      setOptionIsClicked(selectedOption);

      if (selectedOption === props.correctOption) {
        props.setScore();
      }
      props.onAttempt();
    }
  };

  return (
    <Card>
      <div className={classes["quiz-question"]}>
        <h2 className={classes["question-title"]}>
          {decodeEntities(props.title)}
        </h2>

        <section
          className={`${classes["optionList"]} ${
            optionsClicked ? classes.optionDisabled : ""
          }`}>
          {shuffledOptions.map((opt, index) => (
            <label
              className={`${classes["option"]}  ${
                optionsClicked
                  ? opt === props.correctOption
                    ? classForCorrectAnswer
                    : opt === optionsClicked
                    ? classForWrongAnswer
                    : ""
                  : ""
              }`}
              key={index}
              htmlFor={`option-${index}`}>
              <input
                type="radio"
                checked={optionsClicked === opt}
                id={`option-${index}`}
                name="options"
                value={opt}
                onChange={() => attemptHandler(opt)}
              />
              {decodeEntities(opt)}
            </label>
          ))}
        </section>
      </div>
    </Card>
  );
};

export default Question;
