import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Wave from "../assets/Wave.svg";
import Github from "../assets/Github.png";
import LinkedIn from "../assets/LinkedIn.png";
import Twitter from "../assets/Twitter.png";
import Telegram from "../assets/Telegram.png";
import Instagram from "../assets/Instagram.png";
import Koo from "../assets/Koo.png";
import Facebook from "../assets/Facebook.png";
import HeroImage from "../assets/HeroImage.png";
import HeroBackground from "../assets/HeroBackground.svg";
import Facebook_dark from "../assets/Facebook_dark.png";
import Instagram_dark from "../assets/Instagram_dark.png";
import Twitter_dark from "../assets/Twitter_dark.png";
import Github_dark from "../assets/Github_dark.png";
import LinkedIn_dark from "../assets/LinkedIn_dark.png";
import Telegram_dark from "../assets/Telegram_dark.png";
import Koo_dark from "../assets/Koo_dark.png";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  return (
    <main>
      <div className="container d-flex justify-content-between pt-5">
        <div className="" style={{ height: "70vh", width: "10%" }}>
          <ul className="list-unstyled d-flex gap-2 flex-column justify-content-end h-100 ">
            <li>
              <img
                src={isDark ? Facebook_dark : Facebook}
                alt="facebook"
                className="social-icon cursor-pointer"
              />
            </li>
            <li>
              <img
                src={isDark ? Instagram_dark : Instagram}
                alt="instagram"
                className="social-icon cursor-pointer"
              />
            </li>
            <li>
              <img
                src={isDark ? Twitter_dark : Twitter}
                alt="twitter"
                className="social-icon cursor-pointer"
              />
            </li>
            <li>
              <img
                src={isDark ? Github_dark : Github}
                alt="github"
                className="social-icon cursor-pointer"
              />
            </li>
            <li>
              <img
                src={isDark ? LinkedIn_dark : LinkedIn}
                alt="linkedin"
                className="social-icon cursor-pointer"
              />
            </li>
            <li>
              <img
                src={isDark ? Telegram_dark : Telegram}
                alt="telegram"
                className="social-icon cursor-pointer"
              />
            </li>
            <li>
              <img
                src={isDark ? Koo_dark : Koo}
                alt="koo"
                className="social-icon cursor-pointer"
              />
            </li>
          </ul>
        </div>
        <div
          className="d-flex flex-column flex-md-row gap-md-5"
          style={{ height: "100vh", width: "80%" }}
        >
          <div className="w-100 w-md-60">
            <button type="button" className="custom-btn fw-bold">
              Hello!
            </button>
            <h1 className="fw-semibold fs-1 mt-1 mb-0">
              I’m <span className="name-color">Anish</span>
              <img
                src={Wave}
                alt="waves in hand"
                className="ms-2 mb-3"
                style={{ width: "30px", height: "30px" }}
              />
            </h1>
            <p className="fs-5 mt-1 fw-100">
              UI/UX Designer, Front-End Developer & Thinker. <br /> Based in
              India.
            </p>
            <section className="mt-4 d-flex gap-3 mt-5">
              <button className="download-btn fw-bold">Download CV</button>
              <button className="contact-btn fw-bold">Get in Touch!</button>
            </section>
          </div>
          <div className="d-flex justify-content-center align-items-start position-relative w-100 w-md-40">
            <img
              src={HeroBackground}
              alt="hero background"
              className="hero-background"
              style={{
                width: "270px",
                height: "250px",
                position: "absolute",
                top: "2%",
                left: "11%",
                zIndex: "-1",
              }}
            />
            <img
              src={HeroImage}
              alt="Anish's profile"
              className="profile-image position-absolute"
              style={{
                width: "200px",
                height: "210px",
                top: "5%",
                left: "15%",
              }}
            />
          </div>
        </div>
        <div
          className="d-flex flex-column justify-content-end"
          style={{ height: "70vh", width: "10%" }}
        >
          <p className="fs-6" style={{ transform: "rotate(270deg)" }}>
            sinhaanishkumar@outlook.com
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
