"use client";
import styles from "./Connect.module.css";
import Image from "next/image";
import img from "./images/Connect.jpg";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";

export const Connect = () => {
  const t = useTranslations();
  return (
    <section className={styles.connect}>
      <div className={styles.image}>
        <Image src={img} alt="Подключение онлайн" />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{t("connectTitle")}</h4>
        <p className={styles.desc}>{t("connectDesc")}</p>
        <Link href="/#header" className={styles.btn}>
          {t("connectButton")}
        </Link>
      </div>
    </section>
  );
};
