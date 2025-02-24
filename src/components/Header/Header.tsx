"use client";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Backdrop, Box, Slide } from "@mui/material";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next-intl/link";
import burger from "../../../public/images/logo/menu.svg";
import closeIcon from "../../../public/images/logo/close.svg";
import yandexLogo from "../../../public/images/logo/логотипяндекс.svg";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

const style = {
  position: "fixed",
  top: "0%",
  left: "0%",
  width: "100%",
  border: 0,
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "130px 0px",
};

export const Header = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const t = useTranslations();

  const handleModalOpen = () => {
    setModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className={styles.header} id="header">
        <div className={styles.logo__navigation_container}>
          <div className={styles.header__logo}>
            <Link href="/">
              <svg
                width="95"
                height="47"
                viewBox="0 0 95 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="&#208;&#155;&#208;&#190;&#208;&#179;&#208;&#190;&#209;&#130;&#208;&#184;&#208;&#191;">
                  <g id="text45">
                    <path
                      d="M10.5117 42H7.66406V34.3096H4.13086V42H1.29199V32.2793H10.5117V42Z"
                      fill="#F3F0E7"
                    />
                    <path
                      d="M13.3594 32.8682C13.7988 32.6221 14.3848 32.4229 15.1172 32.2705C15.8555 32.1182 16.4854 32.042 17.0068 32.042C19.7256 32.042 21.085 33.4043 21.085 36.1289V42H18.3867V40.585H18.3516C17.6895 41.6865 16.7197 42.2373 15.4424 42.2373C14.5225 42.2373 13.7842 41.9766 13.2275 41.4551C12.6768 40.9277 12.4014 40.2129 12.4014 39.3105C12.4014 37.4473 13.5117 36.3633 15.7324 36.0586L18.4043 35.6982C18.4043 34.5674 17.8154 34.002 16.6377 34.002C15.4775 34.002 14.3848 34.3535 13.3594 35.0566V32.8682ZM16.5674 37.5967C15.542 37.7314 15.0293 38.1943 15.0293 38.9854C15.0293 39.3486 15.1523 39.6416 15.3984 39.8643C15.6504 40.0869 15.9873 40.1982 16.4092 40.1982C16.9893 40.1982 17.4668 39.9932 17.8418 39.583C18.2168 39.1729 18.4043 38.6631 18.4043 38.0537V37.3594L16.5674 37.5967Z"
                      fill="#F3F0E7"
                    />
                    <path
                      d="M26.3672 40.8311V46.4736H23.5283V32.2793H26.3672V33.7646H26.4023C27.1465 32.6162 28.1982 32.042 29.5576 32.042C30.7939 32.042 31.7607 32.4756 32.458 33.3428C33.1553 34.2041 33.5039 35.3789 33.5039 36.8672C33.5039 38.4902 33.0996 39.791 32.291 40.7695C31.4824 41.748 30.4219 42.2373 29.1094 42.2373C27.9199 42.2373 27.0176 41.7686 26.4023 40.8311H26.3672ZM26.3232 37.7021C26.3232 38.3936 26.5107 38.959 26.8857 39.3984C27.2607 39.8379 27.7471 40.0576 28.3447 40.0576C29.0537 40.0576 29.6045 39.7822 29.9971 39.2314C30.3955 38.6807 30.5947 37.9014 30.5947 36.8936C30.5947 35.1123 29.9004 34.2217 28.5117 34.2217C27.8672 34.2217 27.3398 34.4678 26.9297 34.96C26.5254 35.4521 26.3232 36.085 26.3232 36.8584V37.7021Z"
                      fill="#F3F0E7"
                    />
                    <path
                      d="M45.0703 42H41.625L38.3906 37.1924H38.3555V42H35.5166V32.2793H38.3555V36.7705H38.3906L41.4229 32.2793H44.8066L41.2031 36.8672L45.0703 42Z"
                      fill="#F3F0E7"
                    />
                  </g>
                  <g id="text49">
                    <path
                      d="M2.27246 26V6.33496H9.25488C11.3962 6.33496 13.0465 6.74121 14.2061 7.55371C15.3656 8.36621 15.9453 9.49186 15.9453 10.9307C15.9453 11.9971 15.5856 12.9323 14.8662 13.7363C14.1468 14.5404 13.2412 15.0947 12.1494 15.3994V15.4502C13.5205 15.6195 14.625 16.1273 15.4629 16.9736C16.3092 17.82 16.7324 18.8822 16.7324 20.1602C16.7324 21.946 16.0977 23.3678 14.8281 24.4258C13.5586 25.4753 11.8236 26 9.62305 26H2.27246ZM6.46191 9.45801V14.3203H8.45508C9.41146 14.3203 10.1647 14.0918 10.7148 13.6348C11.265 13.1777 11.54 12.5387 11.54 11.7178C11.54 10.2113 10.4398 9.45801 8.23926 9.45801H6.46191ZM6.46191 17.4814V22.877H8.9502C10.0081 22.877 10.8333 22.6315 11.4258 22.1406C12.0267 21.6497 12.3271 20.9684 12.3271 20.0967C12.3271 19.2673 12.0309 18.624 11.4385 18.167C10.846 17.71 10.0039 17.4814 8.91211 17.4814H6.46191Z"
                      fill="#EF4B35"
                    />
                    <path
                      d="M19.0618 19.043C19.0618 16.7324 19.7515 14.917 21.1311 13.5967C22.5191 12.2764 24.3811 11.6162 26.717 11.6162C28.9768 11.6162 30.7711 12.2679 32.0998 13.5713C33.4286 14.8662 34.093 16.6097 34.093 18.8018C34.093 21.1038 33.4117 22.9362 32.0491 24.2988C30.6864 25.6615 28.8414 26.3428 26.5139 26.3428C24.2288 26.3428 22.4133 25.6911 21.0676 24.3877C19.7304 23.0758 19.0618 21.2943 19.0618 19.043ZM23.2131 18.9922C23.2131 21.7936 24.3557 23.1943 26.6409 23.1943C28.8329 23.1943 29.9289 21.7555 29.9289 18.8779C29.9289 16.1357 28.8245 14.7646 26.6155 14.7646C25.5406 14.7646 24.7027 15.1328 24.1018 15.8691C23.5093 16.6055 23.2131 17.6465 23.2131 18.9922Z"
                      fill="white"
                    />
                    <path
                      d="M47.772 25.4795C46.7902 26.055 45.3937 26.3428 43.5825 26.3428C41.4412 26.3428 39.7104 25.6911 38.3901 24.3877C37.0698 23.0843 36.4096 21.3958 36.4096 19.3223C36.4096 16.9355 37.1206 15.0566 38.5425 13.6855C39.9643 12.306 41.8602 11.6162 44.23 11.6162C45.8296 11.6162 47.0145 11.8363 47.7846 12.2764V15.793C46.8452 15.1074 45.8211 14.7646 44.7124 14.7646C43.4598 14.7646 42.4526 15.1455 41.6909 15.9072C40.9376 16.6689 40.561 17.7142 40.561 19.043C40.561 20.3294 40.9207 21.3451 41.6401 22.0898C42.3595 22.8262 43.3371 23.1943 44.5727 23.1943C45.6645 23.1943 46.7309 22.8473 47.772 22.1533V25.4795Z"
                      fill="white"
                    />
                    <path
                      d="M61.2605 15.0947H57.4519V26H53.3386V15.0947H49.4919V11.959H61.2605V15.0947Z"
                      fill="white"
                    />
                    <path
                      d="M63.0058 19.043C63.0058 16.7324 63.6956 14.917 65.0752 13.5967C66.4632 12.2764 68.3252 11.6162 70.6611 11.6162C72.9209 11.6162 74.7151 12.2679 76.0439 13.5713C77.3727 14.8662 78.0371 16.6097 78.0371 18.8018C78.0371 21.1038 77.3558 22.9362 75.9931 24.2988C74.6305 25.6615 72.7854 26.3428 70.458 26.3428C68.1728 26.3428 66.3574 25.6911 65.0117 24.3877C63.6744 23.0758 63.0058 21.2943 63.0058 19.043ZM67.1572 18.9922C67.1572 21.7936 68.2998 23.1943 70.5849 23.1943C72.777 23.1943 73.873 21.7555 73.873 18.8779C73.873 16.1357 72.7685 14.7646 70.5595 14.7646C69.4847 14.7646 68.6468 15.1328 68.0459 15.8691C67.4534 16.6055 67.1572 17.6465 67.1572 18.9922Z"
                      fill="white"
                    />
                    <path
                      d="M94.9914 26H90.0148L85.343 19.0557H85.2922V26H81.1916V11.959H85.2922V18.4463H85.343L89.7229 11.959H94.6105L89.4055 18.5859L94.9914 26Z"
                      fill="white"
                    />
                  </g>
                </g>
              </svg>
            </Link>
            <div className={styles.yandex__Logo}>
              <Image src={yandexLogo} alt="yandex" />
            </div>
          </div>
          <nav className={styles.header__nav}>
            <ul>
              <li>
                <Link href="/#advantages">{t("advantages")}</Link>
              </li>
              <li>
                <Link href="/#tariffs">{t("tarifs")}</Link>
              </li>
              <li className={styles.tarifs}>
                <Link href="/#paymentMethods">{t("payment_methods")}</Link>
              </li>
              <li>
                <Link href="/#contacts">{t("contacts")}</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.gap__tablet_adaptive}>
          <div className={styles.contact__section}>
            <div className={styles.header__phone__number}>
              <div className={styles.phone__logo}></div>
              <span className={styles.phone__number}>{`+996(223)810-104`}</span>
            </div>
           <LocaleSwitcher />
          </div>
          <div className={styles.menu__button}>
            <Image src={burger} onClick={handleModalOpen} alt="burger__menu" />
          </div>
        </div>
      </header>
      <Modal
        open={modalOpen}
        onClose={handleModalOpen}
        disableScrollLock={true}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Slide direction="down" in={modalOpen} mountOnEnter unmountOnExit>
          <Box sx={style}>
            <Image
              onClick={handleModalOpen}
              className={styles.close__icon}
              src={closeIcon}
              alt="close"
            />
            <nav className={styles.modal__nav}>
              <ul>
                <li>
                  <Link href="/#advantages" onClick={handleModalOpen}>
                    {t("advantages")}
                  </Link>
                </li>
                <li>
                  <Link href="/#tariffs" onClick={handleModalOpen}>
                    {t("tarifs")}
                  </Link>
                </li>
                <li>
                  <Link href="/#paymentMethods" onClick={handleModalOpen}>
                    {t("payment_methods")}
                  </Link>
                </li>
                <li>
                  <Link href="/#contacts" onClick={handleModalOpen}>
                    {t("contacts")}
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles.contact__section_modal}>
              <div className={styles.header__phone__number}>
                <div className={styles.phone__logo}></div>
                <span
                  className={styles.phone__number__modal}
                >{`+996(223)810-104`}</span>
              </div>
             <LocaleSwitcher />
            </div>
          </Box>
        </Slide>
      </Modal>
    </>
  );
};
