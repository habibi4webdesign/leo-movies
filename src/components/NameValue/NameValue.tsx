import React, { FC } from "react";
import styles from "./NameValue.module.scss";

interface INameValue {
  name: string;
  value: string | number;
}

const NameValue: FC<INameValue> = (props) => {
  const { name, value } = props;

  return (
    <div className={styles.root}>
      <span className={styles.name}>{name}:</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

NameValue.displayName = "NameValue";

export default NameValue;
