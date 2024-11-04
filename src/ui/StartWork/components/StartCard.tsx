import { type FC } from 'react'
import styles from './StartCard.module.scss'
import Image from 'next/image'

interface StartCardProps {
    descriptionKey: string,
    imageLink: string,
    t: (key: string) => string;
}

export const StartCard: FC<StartCardProps> = ({descriptionKey, imageLink, t}) => {
    return (
        <div className={styles.card}>
            <div className={styles.numberContainer}>
            <Image 
            src={imageLink}
            alt='cardNumber'
            className={styles.number}
            fill
            />
            </div>
            <p className={styles.desc}>{t(descriptionKey)}</p>
        </div>
    );
}