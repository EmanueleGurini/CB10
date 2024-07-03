import { useState } from "react";
import styles from "./card.module.css";

import IconDice from "../../assets/img/icon-dice.svg";
import DesktopDivider from "../../assets/img/pattern-divider-desktop.svg";
import MobileDivider from "../../assets/img/pattern-divider-mobile.svg";

import { advices } from "../../data/advices";

function Card() {
  const [index, setIndex] = useState(0);

  const advice = advices[index];

  const handleIndexUpdate = () => {
    const randomNumber = Math.floor(Math.random() * advices.length);
    setIndex(randomNumber);
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.card__title}>advice # {advice.id}</h1>
      <h2 className={styles.card__advice}>{advice.advice}</h2>
      <img
        className={styles.card__advice__desktop}
        src={DesktopDivider}
        alt="pattern divider desktop"
      />
      <img
        className={styles.card__advice__mobile}
        src={MobileDivider}
        alt="pattern divider desktop"
      />
      <button onClick={handleIndexUpdate} className={styles.card__button}>
        <img src={IconDice} alt="Icon dice" />
      </button>
    </div>
  );
}

export default Card;
