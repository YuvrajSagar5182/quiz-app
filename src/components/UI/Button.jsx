import styles from "./Button.module.css";
const Button = (props) => {
  console.log("here");
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.btnText} {props.children}
    </button>
  );
};
export default Button;
