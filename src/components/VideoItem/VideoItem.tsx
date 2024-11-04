/* eslint-disable @next/next/no-img-element */
import { type FC, useEffect, useState } from "react";
import styles from "./VideoItem.module.scss";

interface VideoItemProps {
  videoId: string;
  imageLink: string;
  isActive: boolean;
}

export const VideoItem: FC<VideoItemProps> = ({ videoId, imageLink, isActive }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoLink = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    if (!isActive) {
      setIsPlaying(false);
    }
  }, [isActive]);

  return (
    <div className={`${styles.preview} ${isActive ? styles.active : ""}`}>
      {!isPlaying ? (
        <div className={styles.previewContainer}>
		{!isActive && <div className={styles.inActive}></div>}
          <img
            src={imageLink}
            alt="video preview"
            className={styles.image}
          />
          <div className={styles.playButton} onClick={handlePlay}>
            <svg
              className={styles.playIcon}
              viewBox="0 0 73 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M70.9111 7.82967C70.4981 6.31628 69.6925 4.93658 68.5744 3.82796C67.4564 2.71935 66.065 1.92051 64.5387 1.51099C58.9514 0 36.4636 0 36.4636 0C36.4636 0 13.9757 0.0457875 8.38841 1.55678C6.86217 1.96629 5.47076 2.76514 4.35273 3.87375C3.2347 4.98237 2.42908 6.36207 2.01609 7.87546C0.326034 17.7198 -0.329668 32.7198 2.06226 42.1703C2.47526 43.6837 3.28088 45.0634 4.39891 46.172C5.51693 47.2806 6.90835 48.0795 8.43459 48.489C14.0219 50 36.5098 50 36.5098 50C36.5098 50 58.9976 50 64.5849 48.489C66.1112 48.0795 67.5026 47.2806 68.6206 46.172C69.7386 45.0634 70.5442 43.6837 70.9572 42.1703C72.7396 32.3123 73.2891 17.3214 70.9111 7.82967Z"
                fill="#FF0000"
              />
              <path
                d="M29.3057 35.714L47.9609 24.9997L29.3057 14.2854V35.714Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      ) : (
        <iframe
          className={styles.video}
          src={videoLink}
          width="550"
          height="304"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};
