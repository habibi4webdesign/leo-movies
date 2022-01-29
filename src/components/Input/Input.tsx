import React, { FC } from "react";
import styles from "./Input.module.scss";

interface IInputProps {
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IInputProps> = (props) => {
  const { ...rest } = props;
  return <input 
  data-testid="Input"
  className={styles.root} {...rest} />;
};

export default Input;
