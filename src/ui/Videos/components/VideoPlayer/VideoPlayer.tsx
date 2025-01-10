import { type FC, MutableRefObject, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./VideoPlayer.module.scss";
import youtubeIcon from '../../../../../public/images/youtubeIcon.webp'
import ReactPlayer from 'react-player';
import { Swiper as SwiperType } from 'swiper';


interface VideoItemProps {
  videoId: string;
  imageLink: string;
  isActive: boolean;
  onPlay: () => void;
  swiperRef?: MutableRefObject<SwiperType | null>;
  videoSrc: string
}

export const VideoPlayer: FC<VideoItemProps> = ({ imageLink, isActive, onPlay, swiperRef, videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setIsPlaying(false)
    }
    if (swiperRef?.current) {
      swiperRef.current.allowTouchMove = !isPlaying;
    }
  }, [isPlaying, isActive, swiperRef]);

  const handlePlay = () => {
    setIsPlaying(true);
    onPlay()
  };

  return (
    <div className={styles.preview}>
      {!isPlaying ? (
        <div className={styles.previewContainer} onClick={handlePlay}>
          <Image
            src={imageLink}
            alt="video preview"
            className={styles.image}
            fill
          />
          <div className={styles.playButton}>
            <Image
            className={styles.playIcon}
            src={youtubeIcon}
            alt="playicon"
            />
          </div>
        </div>
      ) : (
        <div className={`${styles.reactPlayerContainer}`}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        onTouchEnd={() => {
          if (swiperRef?.current) {
            swiperRef.current.allowTouchMove = true;
          }
        }}
        >
        <ReactPlayer
        url={videoSrc}
        playing={true}
        controls={true}
        width="100%"
        height="100%"
        className={styles.video}
        playsinline={true}
      />
      </div>
      )}
    </div>
  );
};