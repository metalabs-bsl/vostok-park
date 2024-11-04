"use client";
import styles from './LocaleSwitcher.module.scss';
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { ChangeEvent, useState } from "react";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [selectedOption, setSelectedOption] = useState<string>(locale);

  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    const newLocale = e.target.value;
    console.log(newLocale);
    router.replace(pathname, { locale: newLocale });
  };

  return (
      <div className={styles.translate}>
        <input
          type="radio"
          name="translate"
          id="RU"
          value="ru"
          checked={selectedOption === "ru"}
          onChange={handleOptionChange}
          className={styles.ru}
        />
        <label className={selectedOption === 'kg' ? "" : `${styles.language__kg}`} htmlFor="RU">
          RU
        </label>
        <input
          type="radio"
          name="translate"
          id="KG"
          value="kg"
          checked={selectedOption === "kg"}
          onChange={handleOptionChange}
        />
        <label className={selectedOption === 'ru' ? "" : `${styles.language__kg}`} htmlFor="KG">
          KG
        </label>
      </div>
  );
}
