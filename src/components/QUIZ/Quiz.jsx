import { useState, useEffect } from "react";
import Question from "./Question";
import classes from "./Quiz.module.css";
import Results from "../UI/Results";
import LoadingComponent from "../UI/LoadingComponent";
import Button from "../UI/Button";

const Quiz = (props) => {
  const [questionList, setQuestionList] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [displayButton, setDisplayButton] = useState(false);
  const [score, setScore] = useState(0);
  const [optionsClicked, setOptionsClicked] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://opentdb.com/api.php?amount=10&category=12`
        );
        const data = await response.json(); // Use await here to get the JSON data
        // console.log(data.results, typeof data.results);
        const qstns = data.results;
        let loadedQuestions = [];
        for (let i in qstns) {
          loadedQuestions.push({
            question: qstns[i].question,
            correctOption: qstns[i].correct_answer,
            wrongOptions: qstns[i].incorrect_answers,
          });
        }
        // console.log(loadedQuestions);
        setQuestionList(loadedQuestions);
        setIsLoading(false);
      } catch (error) {
        console.log("Could not get questions", error);
      }
    };
    fetchData();
  }, []);

  const questionHandler = () => {
    if (currentQuestion <= questionList.length) {
      if (currentQuestion <= questionList.length - 1) {
        setCurrentQuestion((prev) => {
          return ++prev;
        });
      } else {
      }
      setDisplayButton(false);
      setOptionsClicked(false);
    }
  };

  const displayButtonHandler = () => {
    if (currentQuestion <= questionList.length - 1) {
      setDisplayButton(true);
    }
  };

  const QuestionComponent = (
    <>
      <h2 className={classes.heading}>
        <span>
          Current Question {currentQuestion + 1}/{questionList.length}
        </span>
        <span>Score: {score}</span>
      </h2>
      <Question
        title={questionList[currentQuestion]?.question}
        correctOption={questionList[currentQuestion]?.correctOption}
        wrongOptions={questionList[currentQuestion]?.wrongOptions}
        onAttempt={displayButtonHandler}
        score={score}
        optionsClicked={optionsClicked}
        setOptionIsClicked={(val) => setOptionsClicked(val)}
        setScore={() =>
          setScore((prev) => {
            return ++prev;
          })
        }
      />
    </>
  );

  const btnText =
    currentQuestion < questionList.length - 1 ? "Next Question" : "Submit";

  return (
    <>
      {isloading && <LoadingComponent />}
      {!isloading &&
        questionList.length > 0 &&
        currentQuestion < questionList.length &&
        QuestionComponent}
      {!isloading &&
        questionList.length > 0 &&
        currentQuestion >= questionList.length && (
          <Results
            score={score}
            total={questionList.length}
            setStart={props.restart}
          />
        )}
      {!isloading && (
        <div className={classes.container}>
          {displayButton && (
            <Button onClick={questionHandler} btnText={btnText}></Button>
          )}
        </div>
      )}
    </>
  );
};
export default Quiz;
