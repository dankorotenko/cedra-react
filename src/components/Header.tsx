import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useModal } from "../hooks/useModal";

export const Header = () => {
  const { openModal } = useModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isBlogPost = pathname.startsWith("/blog/") && pathname !== "/blog";
  return (
    <header className={`header ${isBlogPost ? "header_onDark" : ""}`}>
      <div className="header__container">
        <Link to="/">
          <img src={isBlogPost ? "/images/logoWhite.svg" : logo} alt="logo" />
        </Link>
        <div
          className={`header__menu ${isMenuOpen ? "header__menu_active" : ""}`}
        >
          <div></div>
          <div className="header__menu_header">
            <button
              type="button"
              className="header__close"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="header__menu_wrapper">
            {/* <!-- <a className="header__menu_link" href="#">Home</a>
        <a className="header__menu_link" href="#">Protocol</a>
        <a className="header__menu_link" href="#">Builders</a>
        <a className="header__menu_link" href="#">Networks</a>
        <a className="header__menu_link" href="#">Ecosystem</a>
        <a className="header__menu_link" href="#">Resources</a> --> */}
            <img
              className="header__menu_wrapper_logo"
              src="/images/logoWhite.svg"
              alt="logo"
            />
            <div className="header__links">
              <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </Link>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <a
                href="https://docs.cedra.network/"
                target="_blank"
                rel="noreferrer"
              >
                Documentation
              </a>
              <a
                href="https://github.com/cedra-labs/move-contract-examples"
                target="_blank"
                rel="noreferrer"
              >
                Guides
              </a>
            </div>
            <div className="header__socials">
              <a
                href="https://x.com/cedranetwork"
                target="_blank"
                rel="noreferrer"
                className="header__menu_wrapper_link"
                aria-label="Cedra on X"
              >
                <span className="sr-only">X</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3.90146 4.5L10.1862 12.7733L3.8623 19.5H5.28596L10.823 13.6109L15.2964 19.5H20.1403L13.5023 10.7614L19.3888 4.5H17.9652L12.8664 9.92371L8.74628 4.5H3.9024H3.90146ZM5.99444 5.5323H8.21921L18.0454 18.4677H15.8206L5.99444 5.5323Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://t.me/cedranetworkchat"
                target="_blank"
                rel="noreferrer"
                className="header__menu_wrapper_link"
                aria-label="Cedra on Telegram"
              >
                <span className="sr-only">Telegram</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g clipPath="url(#clip0_596_180)">
                    <path
                      d="M4.06331 11.3995C4.1018 11.3805 4.1403 11.3625 4.17782 11.3455C4.83012 11.048 5.49109 10.7695 6.15109 10.491C6.18669 10.491 6.24632 10.4503 6.27999 10.437C6.33099 10.4152 6.38198 10.3944 6.43298 10.3726C6.53111 10.3309 6.62925 10.2902 6.72642 10.2485C6.92269 10.1661 7.11798 10.0837 7.31425 10.0012C7.70583 9.83642 8.0974 9.67159 8.48897 9.50581C9.27212 9.17615 10.0562 8.84552 10.8394 8.51587C11.6225 8.18621 12.4067 7.8556 13.1898 7.52594C13.973 7.19628 14.7571 6.86568 15.5402 6.53602C16.3234 6.20636 17.1075 5.87576 17.8906 5.5461C18.0648 5.47221 18.2533 5.36232 18.44 5.33011C18.5968 5.30264 18.7498 5.2496 18.9076 5.22023C19.2068 5.16434 19.5368 5.1416 19.8235 5.2638C19.9226 5.30643 20.014 5.3661 20.09 5.44094C20.4537 5.79523 20.4027 6.37688 20.3257 6.87516C19.7898 10.348 19.2539 13.8217 18.7171 17.2945C18.6439 17.771 18.5439 18.2939 18.1619 18.5951C17.8387 18.85 17.3788 18.8784 16.9795 18.7704C16.5802 18.6614 16.2281 18.4331 15.8827 18.2086C14.4502 17.2746 13.0166 16.3405 11.5841 15.4065C11.2435 15.1848 10.8644 14.895 10.8683 14.4924C10.8702 14.2499 11.0174 14.0339 11.1675 13.8416C12.4124 12.2425 14.2087 11.1437 15.545 9.61853C15.7336 9.4035 15.8818 9.01511 15.623 8.89101C15.469 8.81713 15.292 8.91752 15.1515 9.0132C13.3851 10.221 11.6197 11.4298 9.85325 12.6376C9.27695 13.0316 8.67275 13.4371 7.97811 13.5337C7.3566 13.6209 6.73124 13.4503 6.12992 13.276C5.62578 13.1302 5.12259 12.9805 4.62133 12.8261C4.35483 12.7446 4.07967 12.6565 3.87378 12.4718C3.66789 12.2871 3.54957 11.9764 3.67368 11.7301C3.75161 11.5757 3.90266 11.4781 4.06141 11.3985L4.06331 11.3995Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_596_180">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://discord.com/invite/cedranetwork"
                target="_blank"
                rel="noreferrer"
                className="header__menu_wrapper_link"
                aria-label="Cedra on Discord"
              >
                <span className="sr-only">Discord</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M18.7583 5.8931C17.515 5.33132 16.1828 4.91767 14.7891 4.68104C14.7635 4.67638 14.738 4.68757 14.7257 4.71086C14.5544 5.01084 14.3642 5.40306 14.2317 5.7105C12.733 5.4897 11.2418 5.4897 9.77331 5.7105C9.63989 5.39561 9.44308 5.01084 9.27087 4.71086C9.25763 4.6885 9.23209 4.67731 9.20749 4.68104C7.81469 4.91767 6.48152 5.33132 5.23822 5.8931C5.22781 5.89775 5.21835 5.90521 5.21173 5.91545C2.6835 9.63454 1.99087 13.2623 2.33056 16.8454C2.33245 16.8631 2.34191 16.8799 2.35611 16.8901C4.02424 18.0966 5.64035 18.8288 7.22617 19.3142C7.25172 19.3217 7.27821 19.3124 7.29429 19.2919C7.66898 18.7878 8.00394 18.2559 8.29063 17.696C8.30766 17.6634 8.29062 17.6242 8.25656 17.6112C7.72575 17.4127 7.22142 17.1715 6.73508 16.8976C6.69628 16.8752 6.69346 16.8212 6.72847 16.7951C6.83066 16.7196 6.93284 16.6414 7.0303 16.5622C7.04828 16.5473 7.07287 16.5445 7.09369 16.5538C10.2852 17.9885 13.7407 17.9885 16.8943 16.5538C16.9152 16.5435 16.9397 16.5473 16.9577 16.5612C17.0552 16.6404 17.1574 16.7196 17.2605 16.7951C17.2955 16.8212 17.2936 16.8752 17.2548 16.8976C16.7694 17.1771 16.2642 17.4137 15.7324 17.6112C15.6974 17.6242 15.6823 17.6634 15.6993 17.6969C15.9926 18.2559 16.3266 18.7869 16.6947 19.2919C16.7098 19.3133 16.7373 19.3226 16.7628 19.3151C18.3562 18.8298 19.9723 18.0975 21.6404 16.891C21.6546 16.8808 21.6641 16.864 21.666 16.8473C22.0728 12.7052 20.9847 9.10723 18.7829 5.91732C18.7773 5.90707 18.7687 5.89869 18.7574 5.89403L18.7583 5.8931ZM8.7656 14.6635C7.80427 14.6635 7.01328 13.7952 7.01328 12.7285C7.01328 11.6618 7.79008 10.7935 8.7656 10.7935C9.74112 10.7935 10.534 11.6702 10.5179 12.7285C10.5179 13.7952 9.74112 14.6635 8.7656 14.6635ZM15.2461 14.6635C14.2847 14.6635 13.4937 13.7952 13.4937 12.7285C13.4937 11.6618 14.2705 10.7935 15.2461 10.7935C16.2216 10.7935 17.0145 11.6702 16.9984 12.7285C16.9984 13.7952 16.2301 14.6635 15.2461 14.6635Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
            <button
              type="button"
              className="header__btn invitation"
              onClick={openModal}
            >
              <div>Join us</div>
            </button>
            <div className="header__menu_links">
              <a
                href="https://x.com/cedranetwork"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/x.svg" alt="x" />
              </a>
              <a
                href="https://t.me/cedranetworkchat"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/tg.svg" alt="tg" />
              </a>
              <a
                href="https://discord.com/invite/cedranetwork"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/discord.svg" alt="discord" />
              </a>
            </div>
          </div>
        </div>
        <div className="header__info">
          <button
            type="button"
            className="header__info_burger"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21M3 18H21M3 6H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* <button className="header__info_join promo__button">Join us</button> */}
        </div>
      </div>
    </header>
  );
};
