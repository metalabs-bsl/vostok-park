import { type FC } from 'react'
import styles from './Boxes.module.scss'
import Image from 'next/image';


interface BoxesProps {
    imageLink: string,
    title: string,
    description: string
}

export const Boxes: FC<BoxesProps> = ({ imageLink, title, description}) => {
    return (
        <div className={styles.box}>
            <div className={styles.iconContainer}>
            <Image
            src={imageLink}
            alt='icon'
            className={styles.icon}
            fill
            />
            </div>
            <div className={styles.textBox}>
                <p className={styles.title}>{title}</p>
                <p className={styles.desc}>{description}</p>
            </div>
        </div>
    );
}