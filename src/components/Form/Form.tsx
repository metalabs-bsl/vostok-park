'use client'
import { FC, useEffect, useRef, useState } from "react";
import IMask from "imask";
import { CustomSelect } from "../CustomSelect";
import styles from "./Form.module.scss";
import { FormData } from "@/ui/Hero/Hero";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";

export interface FormProps {
  onSubmit: (data: FormData) => void;
}

export const Form: FC<FormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [secondClick, setSecondClick] = useState(false); // Новое состояние
  const t = useTranslations();

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [selectError, setSelectError] = useState(false);

  const phoneInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      const maskOptions = {
        mask: "+996(000)000-000",
        lazy: true,
        placeholderChar: "_",
      };
      const mask = IMask(phoneInputRef.current, maskOptions);

      mask.on("accept", () => {
        setPhone(mask.value);
      });

      return () => mask.destroy();
    }
  }, []);

  useEffect(() => {
    if (nameInputRef.current) {
      const maskOptions = {
        mask: /^[a-zA-Zа-яА-ЯёЁ\s]*$/,
        lazy: false,
        placeholderChar: "",
      };
      const nameMask = IMask(nameInputRef.current, maskOptions);

      nameMask.on("accept", () => {
        setName(nameMask.value);
      });

      return () => nameMask.destroy();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Проверка на первый или последующий клик
    if (!buttonClicked) {
      setButtonClicked(true);
    } else {
      setSecondClick(true); // Активация второго нажатия
    }

    const hasNameError = name === "";
    const hasPhoneError = phone === "";
    const hasCheckboxError = !agreed;
    const hasSelectError = service === "";

    setNameError(hasNameError);
    setPhoneError(hasPhoneError);
    setCheckboxError(hasCheckboxError);
    setSelectError(hasSelectError);

    // Проверка на наличие ошибок и отправка данных при отсутствии ошибок
    if (agreed && name && phone && service) {
      const cleanedPhone = phone.replace(/\D/g, "");
      onSubmit({ name, phone: cleanedPhone, service, agreed });

      // Сброс значений после успешной отправки
      setName("");
      setPhone("");
      setService("");
      setAgreed(false);
      setCheckboxError(false);
      setNameError(false);
      setPhoneError(false);
      setSelectError(false);
      setButtonClicked(false); // Сбрасываем первый клик
      setSecondClick(false); // Сбрасываем второй клик
    }
  };

  return (
    <div className={styles.form_container}>
      <form className={styles.form_content} onSubmit={handleSubmit}>
        <h1 className={styles.title}>{t("form_title")}</h1>
        <p
          className={`${styles.required} ${
            secondClick && (nameError || phoneError || selectError) ? styles.error : ""
          }`}
        >
          {t("form_required")}
        </p>
        <div className={styles.top_content}>
          <label className={styles.label} htmlFor="name">
            {t("form_input_name_label")}
          </label>
          <input
            className={`${styles.input_name} ${nameError ? styles.error : ""}`}
            type="text"
            id="name"
            ref={nameInputRef}
            placeholder={t("form_input_name_placeholder")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.middle_content}>
          <div className={styles.wrapper_inp}>
            <label className={styles.label} htmlFor="phone">
              {t("form_input_phone_label")}
            </label>
            <input
              className={`${styles.input_phone} ${
                phoneError ? styles.error : ""
              }`}
              type="tel"
              id="phone"
              ref={phoneInputRef}
              placeholder="+996(500)500-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.wrapper_inp}>
            <label className={styles.label} htmlFor="service_select">
              {t("form_select_label")}
            </label>
            <CustomSelect
              onChange={setService}
              value={service}
              className={selectError ? styles.error : ""}
              error={selectError}
            />
          </div>
        </div>
        <div className={styles.bottom_content}>
          <div className={styles.checkbox_container}>
            <input
              type="checkbox"
              id="terms"
              className={`${styles.custom_checkbox} ${
                checkboxError && !agreed ? styles.error : ""
              }`}
              checked={agreed}
              onChange={(e) => {
                setAgreed(e.target.checked);
                setCheckboxError(false);
              }}
            />
            <label
              className={`${styles.label_checkbox} ${
                checkboxError && !agreed ? styles.error : ""
              }`}
              htmlFor="terms"
            >
              {t("form_input_checkbox_part_1")}{" "}
              <Link className={styles.terms} href="/terms">
                {t("form_input_checkbox_part_2")}
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className={styles.submit_button}
            disabled={!agreed && buttonClicked}
          >
            {!agreed && buttonClicked
              ? t("form_button_disable")
              : t("form_button_submit")}
          </button>
        </div>
      </form>
    </div>
  );
};
