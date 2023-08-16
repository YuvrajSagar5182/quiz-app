import classes from "./Results.module.css";
import Button from "./Button";
const Results = (props) => {
  const { score, total } = props;
  const percentage = (+score / +total) * 100;

  return (
    <>
      <section className={classes.containor}>
        <div className={classes.results}>
          <h2>QUIZ RESULTS:</h2>
          <div className={classes["para"]}>
            <p>
              Your score: {score} <br />
              Total Questions:{total}
            </p>
            <p>Percentage: {percentage}%</p>
          </div>
        </div>
        {props.score < props.total / 2 && <h3>Good Luck Next Time</h3>}
        {props.score >= props.total / 2 && <h3>Well Attempted...</h3>}
      </section>
      <Button onClick={props.setStart} btnText="Attempt Again!"></Button>
    </>
  );
};

export default Results;

// const Results = ({ score, total }) => {
//   const percentage = (+score / +total) * 100;

//   return (
//     <div className={classes["quiz-results-card"]}>
//       <h2>Quiz Results</h2>
//       <p>
//         Your score: {score} <br />
//         Total Questions:{total}
//       </p>
//       <p>Percentage: {percentage}%</p>
//     </div>
//   );
// };

// export default Results;
