"use client";

import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import styles from './Tariffs.module.scss';
import Image, { StaticImageData } from 'next/image';
import carsData from './data/carsData';
import { useTranslations } from 'next-intl';
import Link from "next-intl/link";

export interface Itarifs {
  name: string;
  image: StaticImageData;
}

export const Tariffs: FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const t = useTranslations();

  return (
    <section className={`${styles.tariffsContainer} container`} id='tariffs'>
      <h2 className={styles.sectionTittle}>{t('tariffs_title')}</h2>
      <div className={styles.blockSwiper}>
        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          navigation={true}
          className="mainSwiper"
          loop={true}
          loopPreventsSliding={false}
          effect='fade'
          fadeEffect={
            { crossFade: true }
          }
          speed={1000}
          modules={[Navigation, Thumbs, EffectFade]}
        >
          {carsData.map((el, index) => (
            <SwiperSlide key={index}>
              <div className={styles.tariffSlide}>
                <Image
                  src={el.img}
                  alt={el.title}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          //@ts-expect-error // нет типа в свайпере
          onSwiper={setThumbsSwiper}
          className="thumbSwiper"
          loop={true}
          slidesPerView={7}
          modules={[Navigation, Thumbs]}
          breakpoints={{
            1024: {
              slidesPerView: 7,
            },
            690: {
              slidesPerView: 6,
            },
            0: {
              slidesPerView: 3,
            },
          }}
        >
          {carsData.map((el, index) => (
            <SwiperSlide key={index}>
              <div className={styles.thumbSlide}><p>{el.title}</p></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Link href='/#header' className={styles.btnSub}>{t('tariffs_req')}</Link>
    </section>
  );
};
export default Tariffs;