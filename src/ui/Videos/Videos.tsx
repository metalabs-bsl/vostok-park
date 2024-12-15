"use client";
import { type FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { VideoPlayer } from "./components/VideoPlayer";
import { Swiper as SwiperType } from "swiper";
import { useTranslations } from "next-intl";
import styles from "./Videos.module.scss";

const videoBox = [
  {
    videoId: "iFvFx2cHzC0",
    imageLink: "/images/video1.webp",
  },
  {
    videoId: "Iwco5F-8zY4",
    imageLink: "/images/video2.webp",
  },
  {
    videoId: "xbZHYHqD-ZU",
    imageLink: "/images/video3.webp",
  },
  {
    videoId: "qjbwFj4EKJM",
    imageLink: "/images/video4.webp",
  },
];

export const Videos: FC = () => {
  const t = useTranslations();

  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={styles.videosSection}>
      <p className={styles.title}>{t("videosTitle")}</p>
      <Swiper
        cssMode={false}
        slidesPerView={2.2}
        simulateTouch={false}
        spaceBetween={25}
        centeredSlides={true}
        touchRatio={0}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          setActiveVideo(null);
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        modules={[Navigation]}
        allowTouchMove={false}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
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
          <SwiperSlide
            key={index}
            className={`${styles.swiperSlide} ${
              activeIndex === index ? styles.activeSlide : ""
            }`}
            onClick={() => {
              if (activeIndex !== index) {
                swiperRef.current?.slideToLoop(index);
              } else {
                setActiveVideo(video.videoId);
              }
            }}
          >
            <VideoPlayer
              key={video.videoId}
              videoId={video.videoId}
              imageLink={video.imageLink}
              isActive={activeVideo === video.videoId}
              onPlay={() => {
                if (activeIndex === index) {
                  setActiveVideo(video.videoId);
                }
              }}
            />
          </SwiperSlide>
        ))}
        <div className={`${styles.swiperButtonNext} swiper-button-next`}></div>
        <div className={`${styles.swiperButtonPrev} swiper-button-prev`}></div>
      </Swiper>
      <div className={`${styles.customPagination}`}>
        {videoBox.map((_, index) => (
          <div
            key={index}
            className={`${styles.swiperPaginationBullet} ${
              activeIndex === index ? styles.swiperPaginationBulletActive : ""
            }`}
            onClick={() => swiperRef.current?.slideTo(index)}
          />
        ))}
      </div>
    </section>
  );
};
