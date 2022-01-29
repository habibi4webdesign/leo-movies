import React, { FC } from "react";
//styles
import styles from "./Message.module.scss";

interface IMessageProps {
  text: string;
  isInCenter?: boolean;
}

const Message: FC<IMessageProps> = (props) => {
  const { text, isInCenter = false } = props;
  return (
    <div className={`${styles.root} ${isInCenter && styles.isInCenter}`}>
      {text}
    </div>
  );
};

export default Message;
