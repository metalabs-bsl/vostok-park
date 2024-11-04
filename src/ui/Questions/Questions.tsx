"use client";

import { FC } from "react";
import Link from 'next-intl/link';
import styles from "./Questions.module.scss";
import { QuestionsItem } from "./QuestionsItem";
import { useTranslations } from "next-intl";


export const Questions: FC = () => {

  // const [check, setCheck] = useState(true);
  const t = useTranslations();

        // useEffect(() => {
        //   const getLocalStorage = localStorage.getItem("i18nextLng");
        //   switch (getLocalStorage) {
        //     case "kg":
        //       setCheck(false);
        //       break;
        //     case "ru":
        //       setCheck(true);
        //       break;
        //   }
        // }, []);

  return (
    <section
      className={`${styles.questionsSection} questionsCont`}
      id="questions-section"
    >
      <h2 className={styles.questionsSectionTitle}>
        {t("questions_section_title")}
      </h2>

      <ul className={styles.questionsList}>
        <QuestionsItem
          questionTitle={t("question_title_1")}
          questionText={t("question_text_1")}
        />
        <QuestionsItem
          questionTitle={t("question_title_2")}
          questionText={t("question_text_2")}
        />
        <QuestionsItem
          questionTitle={t("question_title_3")}
          questionText={t("question_text_3")}
        />
        <QuestionsItem
          questionTitle={t("question_title_4")}
          questionText={t("question_text_4")}
        />
        <QuestionsItem
          questionTitle={t("question_title_5")}
          questionText={t("question_text_5")}
        />
      </ul>

      <div className={styles.questionsAsk}>
        <p className={styles.reqText}>{t("request_text")}</p>

        <Link href="/#Hero" scroll={false}>
          <button
            type="button"
            className={styles.sendBtn}
            onClick={() =>
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 500)
            }
          >
            {t("btn_text")}
          </button>
        </Link>
      </div>
    </section>
  );
};
