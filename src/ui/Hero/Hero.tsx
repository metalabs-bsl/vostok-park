"use client";

import { FC, useState } from "react";
import styles from "./Hero.module.scss";
import { Form } from "../../components/Form";

export interface FormData {
  name: string;
  phone: string;
  service: string;
  agreed: boolean;
}

export const Hero: FC = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const onSubmit = (data: FormData) => {
    const message = `имя: ${data.name}\nномер: +[${data.phone}](tel:+${data.phone})\nнаправление: ${data.service}`;
    sendMessageToTelegram(message);
  };

  const sendMessageToTelegram = async (message: string) => {
    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      console.log("Message sent successfully");
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section id="Hero" className={`${styles.hero} ${styles.background}`}>
      <div className={`${styles.container} container`}>
        <Form onSubmit={onSubmit} />
      </div>
      <div className={`${styles.success} ${success ? styles.active : ""}`}>
        <p className={styles.success_text}>Ваша заявка успешно отправлена!</p>
      </div>
    </section>
  );
};