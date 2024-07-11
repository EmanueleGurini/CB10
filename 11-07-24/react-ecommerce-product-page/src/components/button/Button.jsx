import classNames from "classnames";
import styles from "./Button.module.css";

function Button({ children, text = "Add to card" }) {
  return (
    <button className={classNames(styles.button)}>
      {children}
      {text}
    </button>
  );
}

export default Button;
