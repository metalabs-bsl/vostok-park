"use client";
import { useEffect, useState, type FC } from "react";
import styles from "./Advantages.module.scss";
import { Boxes } from "./components/Boxes";
import background1 from "../../../public/images/background1.webp";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { listData } from "./data/listData";

interface Advantage {
  title: string;
  description: string;
  imageLink: string;
}

export const Advantages: FC = () => {
  const t = useTranslations();

  const [advantages, setAdvantages] = useState<Advantage[]>([]);

  useEffect(() => {
    const translatedData = listData.map(item => ({
      title: t(item.title),
      description: t(item.description),
      imageLink: item.imageLink,
    }));
    setAdvantages(translatedData);
  }, [t]);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 860);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="advantages" className={`${styles.advantages} container`}>
      <div className={styles.background}>
        <Image src={background1} alt="fon1" className={styles.line} />
      </div>
      <h2 className={styles.title}>{t("advantagesTitle")}</h2>
      <div className={styles.list}>
        {isMobile ? (
          <>
            <div className={styles.topList}>
              {advantages.slice(0, 2).map((box, index) => (
                <Boxes key={index} {...box} />
              ))}
            </div>
            <div className={styles.bottomList}>
              {advantages.slice(2).map((box, index) => (
                <Boxes key={index + 2} {...box} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className={styles.topList}>
              {advantages.slice(0, 3).map((box, index) => (
                <Boxes key={index} {...box} />
              ))}
            </div>
            <div className={styles.bottomList}>
              {advantages.slice(3).map((box, index) => (
                <Boxes key={index + 3} {...box} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
