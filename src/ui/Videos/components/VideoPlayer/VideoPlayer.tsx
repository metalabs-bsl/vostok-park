import { type FC, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./VideoPlayer.module.scss";
import youtubeIcon from '../../../../../public/images/youtubeIcon.webp'

interface VideoItemProps {
  videoId: string;
  imageLink: string;
  isActive: boolean;
  onPlay: () => void;
}

export const VideoPlayer: FC<VideoItemProps> = ({ videoId, imageLink, isActive, onPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoLink = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1`;

  useEffect(() => {
    if (!isActive) {
      setIsPlaying(false)
    }
  },[isActive])

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
        <iframe
          className={styles.video}
          src={videoLink}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};