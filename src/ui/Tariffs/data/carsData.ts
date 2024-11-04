import econom from '../images/Эконом.svg';
import miniven from '../images/Минивэн.svg';
import comfort from '../images/Комфорт.svg';
import comfotPlus from '../images/КомфортПлюс.svg';
import dostavka from '../images/Доставка.svg';
import gruz from '../images/Грузовой.svg';
import vmeste from '../images/Вместе.svg';
import bussines from '../images/Бизнес.svg';

import { StaticImageData } from 'next/image';

export interface ICard {
    img: StaticImageData;
    title: string;
}

export const carsData: ICard[] = [
    {
        img: econom, // Замените на путь к изображению
        title: 'Эконом'
    },
    {
        img: comfort, // Замените на путь к изображению
        title: 'Комфорт',

    },
    {
        img: comfotPlus, // Замените на путь к изображению
        title: 'Комфорт+',
    },
    {
        img: bussines, // Замените на путь к изображению
        title: 'Бизнес',

    },
    {
        img: miniven, // Замените на путь к изображению
        title: 'Минивен',
    },
    {
        img: dostavka, // Замените на путь к изображению
        title: 'Доставка',
    },
    {
        img: gruz, // Замените на путь к изображению
        title: 'Грузовой',
    },
    {
        img: vmeste, // Замените на путь к изображению
        title: 'Вместе',
    },
];

export default carsData;
