"use client";

import { FC, useState, useEffect, useRef } from 'react';
import styles from './CustomSelect.module.scss';
import { useTranslations } from 'next-intl';

export interface CustomSelectProps {
    onChange: (value: string) => void;
    value: string;
    className?: string;
    style?: React.CSSProperties;
    error?: boolean;
}

export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export const CustomSelect: FC<CustomSelectProps> = ({ onChange, value, className, style, error }) => {

    const t = useTranslations();

    const options: SelectOption[] = [
        { value: 'Такси', label: 'Такси' },
        { value: t("form_select_option"), label: t("form_select_option") },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement | null>(null);

    const handleToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(prev => !prev);
    };

    const handleOptionClick = (option: SelectOption) => {
        if (!option.disabled) {
            onChange(option.value);
            setIsOpen(false);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className={`${styles.custom_select} ${isOpen ? styles.open : ''} ${className} ${error ? styles.error : ''}`} style={style} ref={selectRef}>
            <div className={styles.selected_value} onClick={handleToggle}>
                {value || t("form_select_placeholder")}
                <div className={`${styles.arrow} ${isOpen ? styles.up : ''}`}></div>
            </div>
            <div className={`${styles.options} ${isOpen ? styles.show : ''}`}>
                {options.map(option => (
                    <div
                        key={option.value}
                        className={`${styles.option} ${option.disabled ? styles.disabled : ''}`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
            <select
                className={styles.hidden_select}
                onChange={(e) => onChange(e.target.value)}
                value={value}
                aria-label="Выберите опцию"
            >
                <option value="" disabled hidden>Такси или доставка</option>
                {options.map(option => (
                    <option
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
