"use client";
import { useState } from "react";
import styles from "./PaymentMethods.module.scss";
import { VideoItem } from "@/components/VideoItem/VideoItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper as SwiperType } from "swiper";
import { useTranslations } from "next-intl";

export const PaymentMethods = () => {
  const videos = [
    {
      videoId: "qgBWGQ_qBvU",
      imageLink: "/images/payment/mbank.webp",
    },
    {
      videoId: "t7Qw5VPvh4Y",
      imageLink: "/images/payment/mbank_onoi.webp",
    },
    {
      videoId: "SeaxTz_ODLk",
      imageLink: "/images/payment/megapay.webp",
    },
    {
      videoId: "gCw4ktgDwEY",
      imageLink: "/images/payment/mbank_umai.webp",
    },
    {
      videoId: "WHzNPDMAFvo",
      imageLink: "/images/payment/onoi.webp",
    },
    {
      videoId: "YTKSdzM2joQ",
      imageLink: "/images/payment/pay24.webp",
    },
    {
      videoId: "ez51Xbh2yU0",
      imageLink: "/images/payment/namba_one.webp",
    },
    {
      videoId: "SBWZ8wYDEAI",
      imageLink: "/images/payment/o_dengi.webp",
    },
    {
      videoId: "D6XrDCtRO9I",
      imageLink: "/images/payment/o_terminal.webp",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>();
  const [swiperRef, setSwiperRef] = useState<SwiperType>();
  const t = useTranslations();

  return (
    <section id="paymentMethods" className={styles.paymentMethods}>
      <div className={styles.paymentContainer}>
        <h2 className={styles.title}>{t("payment_methods")}</h2>
        <p className={styles.description}>{t("payment_methods_desc")}</p>

        <div className={styles.videoWrapper}>
          <Swiper
            cssMode={true}
            spaceBetween={20}
            slidesPerView={2.5}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Navigation]}
            className={styles.videosContainer}
            allowTouchMove={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => setSwiperRef(swiper)}
            breakpoints={{
              350: {
                slidesPerView: 1.18,
                spaceBetween: 20,
              },
              365: {
                slidesPerView: 1.22,
                spaceBetween: 20,
              },
              380: {
                slidesPerView: 1.28,
                spaceBetween: 20,
              },
              400: {
                slidesPerView: 1.33,
                spaceBetween: 20,
              },
              415: {
                slidesPerView: 1.38,
                spaceBetween: 20,
              },
              430: {
                slidesPerView: 1.42,
                spaceBetween: 20,
              },
              430.1: {
                slidesPerView: 1.15,
                spaceBetween: 20,
              },
              450: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              470: {
                slidesPerView: 1.25,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 1.33,
                spaceBetween: 20,
              },
              520: {
                slidesPerView: 1.37,
                spaceBetween: 20,
              },
              550: {
                slidesPerView: 1.45,
                spaceBetween: 20,
              },
              570: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 1.57,
                spaceBetween: 20,
              },
              625: {
                slidesPerView: 1.6,
                spaceBetween: 20,
              },
              650: {
                slidesPerView: 1.65,
                spaceBetween: 20,
              },
              675: {
                slidesPerView: 1.7,
                spaceBetween: 20,
              },
              700: {
                slidesPerView: 1.75,
                spaceBetween: 20,
              },
              725: {
                slidesPerView: 1.8,
                spaceBetween: 20,
              },
              750: {
                slidesPerView: 1.85,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 1.95,
                spaceBetween: 20,
              },
              834: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              835: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 1.64,
                spaceBetween: 20,
              },
              950: {
                slidesPerView: 1.7,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 1.75,
                spaceBetween: 20,
              },
              1050: {
                slidesPerView: 1.87,
                spaceBetween: 20,
              },
              1100: {
                slidesPerView: 1.9,
                spaceBetween: 20,
              },
              1150: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 2.15,
                spaceBetween: 20,
              },
              1250: {
                slidesPerView: 2.25,
                spaceBetween: 20,
              },
              1300: {
                slidesPerView: 2.3,
                spaceBetween: 20,
              },
              1350: {
                slidesPerView: 2.35,
                spaceBetween: 20,
              },
              1400: {
                slidesPerView: 2.45,
                spaceBetween: 20,
              },
              1470: {
                slidesPerView: 2.6,
                spaceBetween: 20,
              },
              1500: {
                slidesPerView: 2.6,
                spaceBetween: 20,
              },
              1550: {
                slidesPerView: 2.7,
                spaceBetween: 20,
              },
              1600: {
                slidesPerView: 2.8,
                spaceBetween: 20,
              },
              1650: {
                slidesPerView: 2.95,
                spaceBetween: 20,
              },
              1700: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1750: {
                slidesPerView: 3.1,
                spaceBetween: 20,
              },
              1800: {
                slidesPerView: 3.2,
                spaceBetween: 20,
              },
              1850: {
                slidesPerView: 3.25,
                spaceBetween: 20,
              },
              1900: {
                slidesPerView: 3.3,
                spaceBetween: 20,
              },
              1950: {
                slidesPerView: 3.4,
                spaceBetween: 20,
              },
            }}
          >
            {videos.map((video, index) => (
              <SwiperSlide
                key={index}
                className={styles.swiperSlider}
                onClick={() => swiperRef?.slideToLoop(index)}
              >
                <div className={styles.bg}></div>
                <VideoItem
                  videoId={video.videoId}
                  imageLink={video.imageLink}
                  isActive={swiperRef?.realIndex === index}
                />
              </SwiperSlide>
            ))}
            <div className={styles.customPagination}>
              {videos.map((_, index) => (
                <div
                  key={index}
                  className={`${styles.swiperPaginationBullet} ${
                    activeIndex === index
                      ? styles.swiperPaginationBulletActive
                      : ""
                  }`}
                  onClick={() => {
                    swiperRef?.slideToLoop(index);
                  }}
                />
              ))}
            </div>
          </Swiper>
        </div>
        <div className={styles.videoBorder}></div>
      </div>
    </section>
  );
};
