import { Advantages } from "@/ui/Advantages";
import { Connect } from "@/ui/Connect";
import { Hero } from "@/ui/Hero";
import { PaymentMethods } from "@/ui/PaymentMethods";
import { Questions } from "@/ui/Questions";
import { Tariffs } from "@/ui/Tariffs";
import { Videos } from "@/ui/Videos";
import styles from "./Home.module.scss";
import background3 from "../../../public/images/background3.webp";
import Image from "next/image";
import { StartWork } from "@/ui/StartWork";

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <Connect />
      <StartWork />
      <Tariffs />
      <div className={`${styles.videoBox} container`}>
        <div className={styles.background}>
          <Image
            src={background3}
            alt="line3"
            className={styles.line}
          />
        </div>
        <PaymentMethods />
        <Videos />
      </div>
      <Questions />
    </>
  );
}
