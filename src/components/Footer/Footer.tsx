"use client";
import Image from "next/image";
import styles from "./Footer.module.css";
import appstore from "./images/appstore.png";
import googleplay from "./images/googleplay.png";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations();
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h4 className={styles.title}>{t("footer_title")}</h4>
          <nav className={styles.apps}>
            <a
              href="https://apps.apple.com/us/app/yandex-pro/id1496904594?platform=iphone"
              target="_blank"
              className={styles.app}
            >
              <Image src={appstore} alt="app store" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=ru.yandex.taximeter&hl=ru"
              target="_blank"
              className={styles.app}
            >
              <Image src={googleplay} alt="google play market" />
            </a>
          </nav>
        </div>
        <nav className={styles.nav}>
          <a
            target="_blank"
            href="https://wa.me/message/PNWRJKRHI5WJO1"
            className={`${styles.link} ${styles.link_warn}`}
          >
            <svg
              className={styles.icon_top}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 31.9999L2.24933 23.7826C0.861331 21.3773 0.132 18.6506 0.133333 15.8546C0.137333 7.11332 7.25065 0 15.9906 0C20.232 0.00133333 24.2133 1.65333 27.2079 4.65066C30.2013 7.64798 31.8493 11.632 31.8479 15.8693C31.8439 24.6119 24.7306 31.7253 15.9906 31.7253C13.3373 31.7239 10.7226 31.0586 8.40665 29.7946L0 31.9999ZM8.79598 26.9239C11.0306 28.2506 13.164 29.0453 15.9853 29.0466C23.2493 29.0466 29.1666 23.1346 29.1706 15.8666C29.1733 8.58398 23.2839 2.67999 15.996 2.67733C8.72665 2.67733 2.81333 8.58932 2.81066 15.856C2.80933 18.8226 3.67866 21.044 5.13866 23.3679L3.80666 28.2319L8.79598 26.9239ZM23.9786 19.6386C23.8799 19.4733 23.6159 19.3746 23.2186 19.176C22.8226 18.9773 20.8746 18.0186 20.5106 17.8866C20.148 17.7546 19.884 17.688 19.6186 18.0853C19.3546 18.4813 18.5946 19.3746 18.364 19.6386C18.1333 19.9026 17.9013 19.936 17.5053 19.7373C17.1093 19.5386 15.832 19.1213 14.3186 17.7706C13.1413 16.72 12.3453 15.4226 12.1146 15.0253C11.884 14.6293 12.0906 14.4146 12.288 14.2173C12.4666 14.04 12.684 13.7546 12.8826 13.5226C13.084 13.2933 13.1493 13.128 13.2826 12.8626C13.4146 12.5986 13.3493 12.3666 13.2493 12.168C13.1493 11.9706 12.3573 10.02 12.028 9.22665C11.7053 8.45465 11.3786 8.55865 11.136 8.54665L10.376 8.53331C10.112 8.53331 9.68264 8.63198 9.31998 9.02931C8.95731 9.42665 7.93332 10.384 7.93332 12.3346C7.93332 14.2853 9.35331 16.1693 9.55064 16.4333C9.74931 16.6973 12.344 20.7 16.3186 22.416C17.264 22.8239 18.0026 23.0679 18.5773 23.2506C19.5266 23.5519 20.3906 23.5093 21.0733 23.4079C21.8346 23.2946 23.4173 22.4493 23.7479 21.524C24.0786 20.5973 24.0786 19.804 23.9786 19.6386Z"
                fill="#1E1E1E"
              />
            </svg>
            <svg
              className={styles.icon_bottom}
              width="37"
              height="38"
              viewBox="0 0 37 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.6424 0.916682C24.1 1.13576 28.2536 2.97395 31.4261 6.14858C34.8102 9.53471 36.6728 14.0358 36.671 18.8225C36.6669 28.7002 28.6256 36.7372 18.7473 36.7372C15.0325 36.7372 12.0805 35.5959 10.1744 34.5567L0.672729 37.0479L3.21561 27.7644C1.64708 25.0476 0.821726 21.9658 0.823019 18.8082C0.826985 8.93074 8.86761 0.894531 18.747 0.894531L19.6424 0.916682ZM10.6146 31.3135L11.1587 31.6361C13.446 32.9928 16.0679 33.7106 18.7411 33.7117H18.7472C26.9584 33.7117 33.6414 27.0318 33.6446 18.8214C33.6462 14.8428 32.0981 11.1017 29.2854 8.28721C26.4726 5.47257 22.7323 3.92162 18.7531 3.92033C10.5356 3.92033 3.85256 10.5995 3.84928 18.8093C3.84816 21.6229 4.63574 24.363 6.12702 26.7336L6.48123 27.2971L4.97625 32.7918L10.6146 31.3135ZM27.7771 23.0826C27.6651 22.8957 27.3666 22.7838 26.9188 22.5597C26.4709 22.3356 24.2691 21.2527 23.8585 21.1032C23.448 20.954 23.1494 20.8794 22.8509 21.3274C22.5524 21.7754 21.6941 22.7838 21.4328 23.0826C21.1716 23.3813 20.9103 23.4187 20.4625 23.1946C20.0147 22.9706 18.5716 22.4978 16.861 20.9728C15.5296 19.7858 14.6308 18.32 14.3695 17.8719C14.1083 17.4238 14.3416 17.1815 14.5658 16.9583C14.7673 16.7577 15.0138 16.4355 15.2377 16.1741C15.4616 15.9128 15.5362 15.7259 15.6856 15.4273C15.8348 15.1285 15.7601 14.8672 15.6482 14.6431C15.5362 14.4189 14.6406 12.2156 14.2674 11.3193C13.9038 10.4465 13.5346 10.5647 13.2597 10.5509C12.9988 10.538 12.6999 10.5351 12.4014 10.5351C12.1028 10.5351 11.6176 10.6471 11.2071 11.0953C10.7966 11.5434 9.63959 12.6264 9.63959 14.8296C9.63959 17.033 11.2444 19.1614 11.4684 19.4602C11.6923 19.7591 14.6264 24.2802 19.119 26.2194C20.1875 26.6806 21.0217 26.956 21.6721 27.1623C22.745 27.503 23.7213 27.455 24.493 27.3397C25.3534 27.2112 27.1427 26.2568 27.5159 25.2113C27.8891 24.1655 27.8891 23.2692 27.7771 23.0826Z"
                fill="white"
              />
              <mask
                id="mask0_17412_506"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="3"
                y="3"
                width="31"
                height="31"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.6146 31.314L11.1587 31.6367C13.446 32.9934 16.0678 33.7112 18.7411 33.7122H18.7471C26.9583 33.7122 33.6413 27.0324 33.6446 18.822C33.6461 14.8434 32.0981 11.1023 29.2854 8.28778C26.4726 5.47314 22.7322 3.92219 18.7531 3.9209C10.5356 3.9209 3.85252 10.6001 3.84924 18.8098C3.84812 21.6235 4.63571 24.3636 6.12698 26.7342L6.48119 27.2976L4.97621 32.7923L10.6146 31.314ZM27.777 23.0831C27.6651 22.8963 27.3666 22.7843 26.9187 22.5603C26.4709 22.3362 24.269 21.2533 23.8585 21.1038C23.448 20.9546 23.1494 20.88 22.8509 21.3279C22.5524 21.776 21.6941 22.7843 21.4327 23.0831C21.1715 23.3818 20.9103 23.4193 20.4625 23.1952C20.0147 22.9712 18.5716 22.4984 16.861 20.9734C15.5295 19.7864 14.6307 18.3206 14.3695 17.8724C14.1083 17.4244 14.3416 17.182 14.5658 16.9589C14.7673 16.7583 15.0137 16.436 15.2377 16.1746C15.4616 15.9133 15.5362 15.7265 15.6855 15.4279C15.8348 15.1291 15.7601 14.8678 15.6482 14.6437C15.5362 14.4195 14.6406 12.2162 14.2674 11.3199C13.9038 10.4471 13.5345 10.5653 13.2596 10.5515C12.9987 10.5385 12.6999 10.5357 12.4014 10.5357C12.1028 10.5357 11.6176 10.6476 11.207 11.0959C10.7965 11.5439 9.63956 12.627 9.63956 14.8302C9.63956 17.0336 11.2444 19.162 11.4683 19.4608C11.6922 19.7597 14.6263 24.2808 19.1189 26.2199C20.1874 26.6812 21.0217 26.9565 21.6721 27.1629C22.745 27.5035 23.7212 27.4555 24.493 27.3402C25.3534 27.2117 27.1427 26.2573 27.5159 25.2119C27.889 24.166 27.889 23.2698 27.777 23.0831Z"
                  fill="black"
                />
              </mask>
              <g mask="url(#mask0_17412_506)">
                <path
                  d="M43.3598 -6H-7.00006V44.36H43.3598V-6Z"
                  fill="url(#paint0_linear_17412_506)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_17412_506"
                  x1="18.18"
                  y1="44.36"
                  x2="18.18"
                  y2="-6"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#25CF43" />
                  <stop offset="1" stopColor="#61FD7D" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a
            href="https://t.me/Vostok_park"
            target="_blank"
            className={styles.link}
          >
            <svg
              className={styles.icon_top}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17412_3027)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM16.5734 11.8119C15.0171 12.4592 11.9068 13.7989 7.24252 15.8311C6.48511 16.1323 6.08834 16.427 6.05222 16.7151C5.99118 17.202 6.60095 17.3937 7.43129 17.6548C7.54424 17.6903 7.66127 17.7271 7.78125 17.7661C8.59818 18.0317 9.6971 18.3424 10.2684 18.3547C10.7866 18.3659 11.365 18.1523 12.0035 17.7138C16.3615 14.772 18.6112 13.2851 18.7524 13.253C18.8521 13.2304 18.9901 13.202 19.0837 13.2851C19.1772 13.3683 19.168 13.5258 19.1581 13.568C19.0977 13.8255 16.7042 16.0508 15.4655 17.2024C15.0793 17.5614 14.8054 17.816 14.7494 17.8742C14.624 18.0045 14.4962 18.1277 14.3733 18.2461C13.6144 18.9778 13.0452 19.5264 14.4048 20.4224C15.0582 20.8529 15.581 21.209 16.1026 21.5642C16.6722 21.9521 17.2404 22.339 17.9755 22.8209C18.1628 22.9437 18.3416 23.0712 18.5159 23.1954C19.1788 23.668 19.7743 24.0926 20.5101 24.0248C20.9377 23.9855 21.3793 23.5835 21.6036 22.3845C22.1336 19.5509 23.1755 13.4113 23.4163 10.8813C23.4374 10.6596 23.4108 10.376 23.3895 10.2514C23.3682 10.1269 23.3237 9.94948 23.1618 9.81813C22.9701 9.66258 22.6742 9.62978 22.5418 9.63211C21.94 9.64271 21.0167 9.96376 16.5734 11.8119Z"
                  fill="#1E1E1E"
                />
              </g>
              <defs>
                <clipPath id="clip0_17412_3027">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              className={styles.icon_bottom}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17412_3030)">
                <path
                  d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                  fill="url(#paint0_linear_17412_3030)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.24248 15.8309C11.9068 13.7988 15.0171 12.459 16.5733 11.8117C21.0167 9.96359 21.94 9.64255 22.5418 9.63195C22.6741 9.62962 22.9701 9.66242 23.1618 9.81797C23.3236 9.94931 23.3682 10.1267 23.3895 10.2513C23.4108 10.3758 23.4373 10.6595 23.4163 10.8811C23.1755 13.4111 22.1336 19.5507 21.6035 22.3843C21.3792 23.5833 20.9376 23.9853 20.5101 24.0247C19.5809 24.1102 18.8754 23.4106 17.9754 22.8207C16.5672 21.8976 15.7717 21.323 14.4048 20.4222C12.8251 19.3812 13.8491 18.8091 14.7494 17.874C14.985 17.6293 19.0789 13.9056 19.1581 13.5678C19.168 13.5256 19.1772 13.3681 19.0836 13.285C18.9901 13.2018 18.852 13.2302 18.7524 13.2529C18.6111 13.2849 16.3615 14.7718 12.0035 17.7136C11.3649 18.1521 10.7866 18.3657 10.2683 18.3545C9.69706 18.3422 8.59814 18.0315 7.78121 17.766C6.77921 17.4403 5.98284 17.2681 6.05218 16.7149C6.0883 16.4268 6.48507 16.1321 7.24248 15.8309Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_17412_3030"
                  x1="16"
                  y1="0"
                  x2="16"
                  y2="31.7627"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2AABEE" />
                  <stop offset="1" stopColor="#229ED9" />
                </linearGradient>
                <clipPath id="clip0_17412_3030">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@vostokpark?_t=8q1jEcSNZDO&_r=1"
            target="_blank"
            className={styles.link}
          >
            <svg
              className={styles.icon_top}
              width="28"
              height="32"
              viewBox="0 0 28 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7634 0H15.3704V21.7971C15.3704 24.3942 13.2963 26.5276 10.715 26.5276C8.1338 26.5276 6.05961 24.3942 6.05961 21.7971C6.05961 19.2464 8.08771 17.1594 10.5768 17.0667V11.5942C5.09164 11.6869 0.666687 16.1855 0.666687 21.7971C0.666687 27.4551 5.18383 32 10.7612 32C16.3384 32 20.8555 27.4087 20.8555 21.7971V10.6203C22.8837 12.1044 25.3727 12.9855 28 13.0319V7.55942C23.9438 7.42029 20.7634 4.08116 20.7634 0Z"
                fill="#1E1E1E"
              />
            </svg>
            <svg
              className={styles.icon_bottom}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.9021 11.5516C24.9599 13.0278 27.4808 13.8964 30.2035 13.8964V8.63847C29.6882 8.63858 29.1742 8.58466 28.6701 8.47747V12.6162C25.9476 12.6162 23.4271 11.7476 21.3687 10.2715V21.0015C21.3687 26.3692 17.0328 30.7202 11.6845 30.7202C9.68898 30.7202 7.83418 30.1148 6.2934 29.0764C8.05195 30.8809 10.5044 32.0003 13.2176 32.0003C18.5662 32.0003 22.9023 27.6492 22.9023 22.2814V11.5516H22.9021ZM24.7936 6.24698C23.7419 5.09396 23.0515 3.60389 22.9021 1.95656V1.28027H21.449C21.8147 3.37403 23.0623 5.16282 24.7936 6.24698ZM9.67618 24.9574C9.08861 24.1842 8.77109 23.2385 8.77252 22.266C8.77252 19.811 10.7557 17.8205 13.2025 17.8205C13.6585 17.8204 14.1117 17.8904 14.5463 18.0288V12.6534C14.0384 12.5835 13.5259 12.5539 13.0136 12.5647V16.7487C12.5787 16.6104 12.1252 16.5401 11.6691 16.5405C9.22238 16.5405 7.23928 18.5308 7.23928 20.9861C7.23928 22.7222 8.23056 24.2252 9.67618 24.9574Z"
                fill="#FF004F"
              />
              <path
                d="M21.3686 10.2714C23.427 11.7475 25.9475 12.6161 28.67 12.6161V8.47736C27.1503 8.15251 25.805 7.35553 24.7935 6.24698C23.0621 5.16271 21.8147 3.37392 21.4489 1.28027H17.6321V22.2811C17.6235 24.7294 15.6437 26.7118 13.2022 26.7118C11.7634 26.7118 10.4853 26.0236 9.67577 24.9574C8.23025 24.2252 7.23897 22.7221 7.23897 20.9862C7.23897 18.5311 9.22207 16.5406 11.6688 16.5406C12.1376 16.5406 12.5894 16.6139 13.0133 16.7488V12.5648C7.75895 12.6738 3.5332 16.9823 3.5332 22.2812C3.5332 24.9264 4.58551 27.3244 6.29342 29.0765C7.8342 30.1148 9.689 30.7203 11.6846 30.7203C17.0329 30.7203 21.3687 26.3691 21.3687 21.0015V10.2714H21.3686Z"
                fill="black"
              />
              <path
                d="M28.6701 8.47707V7.35798C27.2997 7.36007 25.9562 6.97492 24.7935 6.24658C25.8228 7.37742 27.1781 8.15716 28.6701 8.47707ZM21.4489 1.27998C21.414 1.07988 21.3872 0.878468 21.3686 0.676285V0H16.0987V21.0011C16.0903 23.449 14.1106 25.4314 11.6688 25.4314C10.952 25.4314 10.2752 25.2606 9.6758 24.9572C10.4853 26.0233 11.7635 26.7114 13.2022 26.7114C15.6435 26.7114 17.6236 24.7292 17.6321 22.281V1.27998H21.4489ZM13.0135 12.5645V11.3732C12.5732 11.3128 12.1292 11.2825 11.6847 11.2827C6.33589 11.2826 2 15.6339 2 21.0011C2 24.366 3.70408 27.3316 6.29356 29.076C4.58565 27.324 3.53334 24.9259 3.53334 22.2808C3.53334 16.982 7.75898 12.6735 13.0135 12.5645Z"
                fill="#00F2EA"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/vostokpark?igsh=MXYwdWVld2M1cjlwOA%3D%3D&utm_source=qr"
            target="_blank"
            className={styles.link}
          >
            <svg
              className={styles.icon_top}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17412_3051)">
                <path
                  d="M16 2.88125C20.275 2.88125 20.7813 2.9 22.4625 2.975C24.025 3.04375 24.8688 3.30625 25.4313 3.525C26.175 3.8125 26.7125 4.1625 27.2688 4.71875C27.8313 5.28125 28.175 5.8125 28.4625 6.55625C28.6813 7.11875 28.9438 7.96875 29.0125 9.525C29.0875 11.2125 29.1063 11.7188 29.1063 15.9875C29.1063 20.2625 29.0875 20.7688 29.0125 22.45C28.9438 24.0125 28.6813 24.8563 28.4625 25.4188C28.175 26.1625 27.825 26.7 27.2688 27.2563C26.7063 27.8188 26.175 28.1625 25.4313 28.45C24.8688 28.6688 24.0188 28.9313 22.4625 29C20.775 29.075 20.2688 29.0938 16 29.0938C11.725 29.0938 11.2188 29.075 9.5375 29C7.975 28.9313 7.13125 28.6688 6.56875 28.45C5.825 28.1625 5.2875 27.8125 4.73125 27.2563C4.16875 26.6938 3.825 26.1625 3.5375 25.4188C3.31875 24.8563 3.05625 24.0063 2.9875 22.45C2.9125 20.7625 2.89375 20.2563 2.89375 15.9875C2.89375 11.7125 2.9125 11.2063 2.9875 9.525C3.05625 7.9625 3.31875 7.11875 3.5375 6.55625C3.825 5.8125 4.175 5.275 4.73125 4.71875C5.29375 4.15625 5.825 3.8125 6.56875 3.525C7.13125 3.30625 7.98125 3.04375 9.5375 2.975C11.2188 2.9 11.725 2.88125 16 2.88125ZM16 0C11.6563 0 11.1125 0.01875 9.40625 0.09375C7.70625 0.16875 6.5375 0.44375 5.525 0.8375C4.46875 1.25 3.575 1.79375 2.6875 2.6875C1.79375 3.575 1.25 4.46875 0.8375 5.51875C0.44375 6.5375 0.16875 7.7 0.09375 9.4C0.01875 11.1125 0 11.6562 0 16C0 20.3438 0.01875 20.8875 0.09375 22.5938C0.16875 24.2938 0.44375 25.4625 0.8375 26.475C1.25 27.5313 1.79375 28.425 2.6875 29.3125C3.575 30.2 4.46875 30.75 5.51875 31.1562C6.5375 31.55 7.7 31.825 9.4 31.9C11.1063 31.975 11.65 31.9937 15.9938 31.9937C20.3375 31.9937 20.8813 31.975 22.5875 31.9C24.2875 31.825 25.4563 31.55 26.4688 31.1562C27.5188 30.75 28.4125 30.2 29.3 29.3125C30.1875 28.425 30.7375 27.5313 31.1438 26.4813C31.5375 25.4625 31.8125 24.3 31.8875 22.6C31.9625 20.8938 31.9813 20.35 31.9813 16.0063C31.9813 11.6625 31.9625 11.1188 31.8875 9.4125C31.8125 7.7125 31.5375 6.54375 31.1438 5.53125C30.75 4.46875 30.2063 3.575 29.3125 2.6875C28.425 1.8 27.5313 1.25 26.4813 0.84375C25.4625 0.45 24.3 0.175 22.6 0.1C20.8875 0.01875 20.3438 0 16 0Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M16 7.78125C11.4625 7.78125 7.78125 11.4625 7.78125 16C7.78125 20.5375 11.4625 24.2188 16 24.2188C20.5375 24.2188 24.2188 20.5375 24.2188 16C24.2188 11.4625 20.5375 7.78125 16 7.78125ZM16 21.3312C13.0563 21.3312 10.6687 18.9438 10.6687 16C10.6687 13.0563 13.0563 10.6687 16 10.6687C18.9438 10.6687 21.3312 13.0563 21.3312 16C21.3312 18.9438 18.9438 21.3312 16 21.3312Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M26.4625 7.45586C26.4625 8.51836 25.6 9.37461 24.5438 9.37461C23.4813 9.37461 22.625 8.51211 22.625 7.45586C22.625 6.39336 23.4875 5.53711 24.5438 5.53711C25.6 5.53711 26.4625 6.39961 26.4625 7.45586Z"
                  fill="#1E1E1E"
                />
              </g>
              <defs>
                <clipPath id="clip0_17412_3051">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              className={styles.icon_bottom}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17412_3056)">
                <path
                  d="M0.0183105 10.7333C0.0183105 6.93673 0.0183105 5.03843 0.768888 3.5935C1.40139 2.37588 2.39419 1.38308 3.61181 0.750577C5.05674 0 6.95504 0 10.7516 0H21.285C25.0816 0 26.9799 0 28.4248 0.750577C29.6424 1.38308 30.6352 2.37588 31.2677 3.5935C32.0183 5.03843 32.0183 6.93673 32.0183 10.7333V21.2667C32.0183 25.0633 32.0183 26.9616 31.2677 28.4065C30.6352 29.6241 29.6424 30.6169 28.4248 31.2494C26.9799 32 25.0816 32 21.285 32H10.7516C6.95504 32 5.05674 32 3.61181 31.2494C2.39419 30.6169 1.40139 29.6241 0.768888 28.4065C0.0183105 26.9616 0.0183105 25.0633 0.0183105 21.2667V10.7333Z"
                  fill="url(#paint0_radial_17412_3056)"
                />
                <path
                  d="M0.0183105 10.7333C0.0183105 6.93673 0.0183105 5.03843 0.768888 3.5935C1.40139 2.37588 2.39419 1.38308 3.61181 0.750577C5.05674 0 6.95504 0 10.7516 0H21.285C25.0816 0 26.9799 0 28.4248 0.750577C29.6424 1.38308 30.6352 2.37588 31.2677 3.5935C32.0183 5.03843 32.0183 6.93673 32.0183 10.7333V21.2667C32.0183 25.0633 32.0183 26.9616 31.2677 28.4065C30.6352 29.6241 29.6424 30.6169 28.4248 31.2494C26.9799 32 25.0816 32 21.285 32H10.7516C6.95504 32 5.05674 32 3.61181 31.2494C2.39419 30.6169 1.40139 29.6241 0.768888 28.4065C0.0183105 26.9616 0.0183105 25.0633 0.0183105 21.2667V10.7333Z"
                  fill="url(#paint1_radial_17412_3056)"
                />
                <path
                  d="M16.0005 4.36328C12.8404 4.36328 12.4438 4.3771 11.2026 4.43358C9.96384 4.49031 9.11829 4.68643 8.37843 4.97419C7.61312 5.2714 6.96393 5.66898 6.31716 6.31601C5.66991 6.9628 5.27235 7.61201 4.97417 8.3771C4.6857 9.11722 4.48934 9.96304 4.43358 11.2013C4.37807 12.4426 4.36353 12.8394 4.36353 15.9996C4.36353 19.1599 4.37759 19.5553 4.43383 20.7965C4.49079 22.0353 4.68691 22.8809 4.97442 23.6207C5.27186 24.3861 5.66943 25.0353 6.31644 25.6821C6.96296 26.3293 7.61215 26.7279 8.37698 27.0251C9.11732 27.3129 9.96311 27.509 11.2016 27.5657C12.4428 27.6222 12.8391 27.636 15.9991 27.636C19.1594 27.636 19.5548 27.6222 20.796 27.5657C22.0347 27.509 22.8813 27.3129 23.6216 27.0251C24.3867 26.7279 25.0349 26.3293 25.6814 25.6821C26.3287 25.0353 26.7262 24.3861 27.0244 23.621C27.3105 22.8809 27.5068 22.035 27.565 20.7967C27.6208 19.5555 27.6353 19.1599 27.6353 15.9996C27.6353 12.8394 27.6208 12.4428 27.565 11.2016C27.5068 9.9628 27.3105 9.11722 27.0244 8.37734C26.7262 7.61201 26.3287 6.9628 25.6814 6.31601C25.0342 5.66874 24.3869 5.27116 23.6209 4.97419C22.8791 4.68643 22.0331 4.49031 20.7943 4.43358C19.5531 4.3771 19.158 4.36328 15.9969 4.36328H16.0005ZM14.9567 6.46025C15.2665 6.45977 15.6122 6.46025 16.0005 6.46025C19.1073 6.46025 19.4756 6.4714 20.7024 6.52716C21.8369 6.57904 22.4527 6.76861 22.8628 6.92789C23.4059 7.1388 23.793 7.39092 24.2 7.79819C24.6073 8.20546 24.8594 8.59334 25.0708 9.13637C25.23 9.54607 25.4199 10.1618 25.4715 11.2964C25.5272 12.523 25.5394 12.8915 25.5394 15.997C25.5394 19.1024 25.5272 19.4709 25.4715 20.6976C25.4196 21.8321 25.23 22.4479 25.0708 22.8576C24.8599 23.4006 24.6073 23.7873 24.2 24.1943C23.7928 24.6016 23.4061 24.8537 22.8628 25.0646C22.4532 25.2246 21.8369 25.4137 20.7024 25.4656C19.4758 25.5213 19.1073 25.5335 16.0005 25.5335C12.8934 25.5335 12.5252 25.5213 11.2986 25.4656C10.1641 25.4132 9.54834 25.2236 9.13793 25.0644C8.59491 24.8535 8.20705 24.6013 7.79978 24.1941C7.39252 23.7868 7.14041 23.3999 6.92902 22.8566C6.76976 22.4469 6.57994 21.8312 6.52831 20.6966C6.47255 19.4699 6.4614 19.1015 6.4614 15.9941C6.4614 12.8867 6.47255 12.5201 6.52831 11.2935C6.58019 10.1589 6.76976 9.54316 6.92902 9.13298C7.13993 8.58995 7.39252 8.20207 7.79978 7.7948C8.20705 7.38752 8.59491 7.1354 9.13793 6.92401C9.5481 6.76401 10.1641 6.57492 11.2986 6.5228C12.372 6.47431 12.788 6.45977 14.9567 6.45734V6.46025ZM22.2117 8.39237C21.4408 8.39237 20.8154 9.0171 20.8154 9.78825C20.8154 10.5592 21.4408 11.1846 22.2117 11.1846C22.9826 11.1846 23.608 10.5592 23.608 9.78825C23.608 9.01734 22.9826 8.39189 22.2117 8.39189V8.39237ZM16.0005 10.0239C12.7005 10.0239 10.0249 12.6995 10.0249 15.9996C10.0249 19.2998 12.7005 21.9742 16.0005 21.9742C19.3005 21.9742 21.9751 19.2998 21.9751 15.9996C21.9751 12.6995 19.3003 10.0239 16.0003 10.0239H16.0005ZM16.0005 12.1209C18.1425 12.1209 19.8792 13.8573 19.8792 15.9996C19.8792 18.1417 18.1425 19.8784 16.0005 19.8784C13.8583 19.8784 12.1218 18.1417 12.1218 15.9996C12.1218 13.8573 13.8583 12.1209 16.0005 12.1209Z"
                  fill="white"
                />
              </g>
              <defs>
                <radialGradient
                  id="paint0_radial_17412_3056"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(8.51835 34.4647) rotate(-90) scale(31.7144 29.4969)"
                >
                  <stop stopColor="#FFDD55" />
                  <stop offset="0.1" stopColor="#FFDD55" />
                  <stop offset="0.5" stopColor="#FF543E" />
                  <stop offset="1" stopColor="#C837AB" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_17412_3056"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(-5.34186 2.30523) rotate(78.6806) scale(14.1765 58.4359)"
                >
                  <stop stopColor="#3771C8" />
                  <stop offset="0.128" stopColor="#3771C8" />
                  <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
                </radialGradient>
                <clipPath id="clip0_17412_3056">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href="/"
            className={styles.btn}
            onClick={(e) => {
              e.preventDefault();
              if (window) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <span className={styles.hide}>{t("footer_button")}</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6L12.7071 5.29289L12 4.58579L11.2929 5.29289L12 6ZM11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18L11 18ZM16.7071 9.29289L12.7071 5.29289L11.2929 6.70711L15.2929 10.7071L16.7071 9.29289ZM11.2929 5.29289L7.29289 9.29289L8.70711 10.7071L12.7071 6.70711L11.2929 5.29289ZM11 6L11 18L13 18L13 6L11 6Z"
                fill="#1E1E1E"
              />
            </svg>
          </a>
        </nav>
      </div>
      <hr className={styles.line} />
      <div className={styles.bottom}>
        <p className={styles.desc}>{t("footer_desc_apple")}</p>
        <p className={styles.desc}>{t("footer_desc_google")}</p>
        <p className={`${styles.desc} ${styles.mt_30}`}>©2024 Восток Парк</p>
      </div>
    </footer>
  );
};