'use client';
import { type FC, useRef, useState } from 'react';
import styles from './Videos.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { VideoPlayer } from './components/VideoPlayer';
import { Swiper as SwiperType } from 'swiper';
import { useTranslations } from "next-intl";



const videoBox = [
  {
    videoSrc: "https://metalabs.kg:8056//videos/video10.mp4",
    imageLink: "/images/video1.webp"
  },
  {
    videoSrc: "https://metalabs.kg:8056//videos/video11.mp4",
    imageLink: "/images/video2.webp"
  },
  {
    videoSrc: "https://metalabs.kg:8056//videos/video12.mp4",
    imageLink: "/images/video3.webp"
  },
  {
    videoSrc: "https://metalabs.kg:8056//videos/video13.mp4",
    imageLink: "/images/video4.webp"
  },
  {
    videoSrc: "https://metalabs.kg:8056//videos/video14.mp4",
    imageLink: "/images/video5.png"
  },
  {
    videoSrc: "https://metalabs.kg:8056//videos/video15.mp4",
    imageLink: "/images/video6.png"
  },
  {
    videoSrc: "https://metalabs.kg:8056//videos/video16.mp4",
    imageLink: "/images/video7.png"
  },
  {
    videoSrc: "https://metalabs.kg:8056//videos/video17.mp4",
    imageLink: "/images/video8.png"
  },
];

export const Videos: FC = () => {
  const t = useTranslations();

  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = () => {
    setActiveVideo(null); 
  };

  return (
    <section className={styles.videosSection}>
      <p className={styles.title}>{t('videosTitle')}</p>
      <Swiper
        cssMode={true}
        slidesPerView={2.2}
        spaceBetween={25}
        onSwiper={(swiper) => (swiperRef.current = swiper)} 
        onSlideChange={handleSlideChange} 
        modules={[Pagination, Navigation]}
        simulateTouch={true}  
        allowTouchMove={true}
        touchEventsTarget="container"
        breakpoints={{
          320: {
            slidesPerView: 1.0,
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
            key={video.videoSrc}
            videoId={video.videoSrc} 
            imageLink={video.imageLink}
            isActive={activeVideo === video.videoSrc}
            onPlay={() => setActiveVideo(video.videoSrc)}
            swiperRef={swiperRef}
            videoSrc={video.videoSrc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
