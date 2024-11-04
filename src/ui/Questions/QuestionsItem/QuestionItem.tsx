"use client";

import { FC, useState, useRef } from "react";
import Image from "next/image";
import styles from "./QuestionsItem.module.scss";
import Arrow from "./images/Arrow.svg";
import ArrowOpen from "./images/ArrowOpen.svg"

interface QuestionsItemProps {
  questionTitle: string;
  questionText: string;
}

export const QuestionsItem: FC<QuestionsItemProps> = ({
  questionTitle,
  questionText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={styles.questionsItem} onClick={handleToggle}>
      <div className={styles.question}>
        <p className={styles.questionTitle}>{questionTitle}</p>
        <Image
          src={isOpen ? ArrowOpen : Arrow}
          alt="Открыть"
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}
        />
      </div>
      <div
        ref={contentRef}
        className={`${styles.itemContent} ${
          isOpen ? styles.itemContentOpen : ""
        }`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
        }}
      >
        <p className={styles.questionText}>{questionText}</p>
      </div>
    </li>
  );
};
