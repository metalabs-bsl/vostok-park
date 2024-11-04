'use client';
import { type FC, useRef, useState } from 'react';
import styles from './Videos.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { VideoPlayer } from './components/VideoPlayer';
import { Swiper as SwiperType } from 'swiper';
import { useTranslations } from 'next-intl';

const videoBox = [
  {
    videoId: "iFvFx2cHzC0",
    imageLink: "/images/video1.webp"
  },
  {
    videoId: "Iwco5F-8zY4",
    imageLink: "/images/video2.webp"
  },
  {
    videoId: "xbZHYHqD-ZU",
    imageLink: "/images/video3.webp"
  },
  {
    videoId: "qjbwFj4EKJM",
    imageLink: "/images/video4.webp"
  }
];

export const Videos: FC = () => {
  const t = useTranslations();

  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={styles.videosSection}>
      <p className={styles.title}>{t('videosTitle')}</p>
      <Swiper
        cssMode={true}
        slidesPerView={2.2}
        spaceBetween={25}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)} 
        modules={[Pagination, Navigation]}
        allowTouchMove={true}
        breakpoints={{
          320: {
            slidesPerView: 1.1,
            spaceBetween: 5,
          },
          431: {
            slidesPerView: 2.0,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 25,
          },
        }}
        className={styles.SwiperBox}
      >
        {videoBox.map((video, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <VideoPlayer
            key={video.videoId}
            videoId={video.videoId} 
            imageLink={video.imageLink}
            isActive={activeVideo === video.videoId}
            onPlay={() => setActiveVideo(video.videoId)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className={`${styles.customPagination}`}>
        {videoBox.map((_, index) => (
          <div
            key={index}
            className={`${styles.swiperPaginationBullet} ${activeIndex === index ? styles.swiperPaginationBulletActive : ''}`}
            onClick={() => swiperRef.current?.slideTo(index)}
          />
        ))}
      </div>
    </section>
  );
};
