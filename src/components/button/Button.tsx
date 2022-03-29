import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  name: string;
  onClick: () => void;
};

const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
