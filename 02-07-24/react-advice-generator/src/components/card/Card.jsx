import styles from "./card.module.css";

import IconDice from "../../assets/img/icon-dice.svg";
import DesktopDivider from "../../assets/img/pattern-divider-desktop.svg";

function Card() {
  return (
    <div className={styles.card}>
      <h1 className={styles.card__title}>hello, world</h1>
      <h2 className={styles.card__advice}>Tell it like it is.</h2>
      <img src={DesktopDivider} alt="pattern divider desktop" />
      <button className={styles.card__button}>
        <img src={IconDice} alt="Icon dice" />
      </button>
    </div>
  );
}

export default Card;
