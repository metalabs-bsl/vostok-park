"use client";
import Image from "next/image";
import styles from "./StartWork.module.scss";
import line2 from "../../../public/images/background2.webp";
import { StartCard } from "./components";
import { useTranslations } from "next-intl";

const CardBox = [
  {
    descriptionKey: "startWork_description_1",
    imageLink: "/images/number1.svg",
  },
  {
    descriptionKey: "startWork_description_2",
    imageLink: "/images/number2.svg",
  },
  {
    descriptionKey: "startWork_description_3",
    imageLink: "/images/number3.svg",
  },
  {
    descriptionKey: "startWork_description_4",
    imageLink: "/images/number4.svg",
  },
];

export const StartWork = () => {
  const t = useTranslations();

  return (
    <section className={`${styles.StartWork} container`}>
      <div className={styles.background}>
        <Image src={line2} alt="line2" className={styles.line} />
      </div>
      <h2 className={styles.title}>{t("startWorkTitle")}</h2>
      <div className={styles.cards}>
        {CardBox.map((card, index) => (
          <StartCard
            key={index}
            imageLink={card.imageLink}
            descriptionKey={card.descriptionKey}
            t={t}
          />
        ))}
      </div>
    </section>
  );
};
