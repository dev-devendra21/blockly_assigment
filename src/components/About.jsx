import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Vector_1 from "../assets/Vector_1.png";
import LeftArm from "../assets/left_arm.png";
import Vector_3 from "../assets/Vector_3.png";
import Vector_4 from "../assets/Vector_4.png";
import Vector_5 from "../assets/Vector_5.png";
import Facebook_dark from "../assets/facebook_dark.png";
import Instagram_dark from "../assets/instagram_dark.png";
import Twitter_dark from "../assets/twitter_dark.png";
import Github_dark from "../assets/github_dark.png";
import LinkedIn_dark from "../assets/linkedIn_dark.png";
import Telegram_dark from "../assets/telegram_dark.png";
import Koo_dark from "../assets/koo_dark.png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Twitter from "../assets/Twitter.png";
import Github from "../assets/Github.png";
import LinkedIn from "../assets/LinkedIn.png";
import Telegram from "../assets/Telegram.png";
import Koo from "../assets/Koo.png";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <main className="d-flex justify-content-between align-items-center position-relative pt-5">
      <section
        className="overlay bg-transparent"
        style={{
          height: "70vh",
          width: "100%",
          zIndex: "100",
          position: "absolute",
        }}
      >
        <ul
          className="list-unstyled d-flex gap-2 flex-column justify-content-end position-fixed "
          style={{ top: "50%", left: "2%" }}
        >
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
      </section>
      <section
        style={{
          height: "70vh",
          width: "100%",
          zIndex: "100",
          position: "absolute",
        }}
      >
        <p
          className="fs-6 position-fixed"
          style={{ transform: "rotate(270deg)", top: "70%", right: "0%" }}
        >
          sinhaanishkumar@outlook.com
        </p>
      </section>
      <section className="position-relative">
        <img
          src={Vector_1}
          alt="grey background"
          style={{ width: "100%", height: "70vh" }}
        />
        <img
          className="position-absolute"
          src={LeftArm}
          alt="left arm"
          style={{ width: "100%", top: "0%", left: "0%" }}
        />
      </section>
      <section
        className="align-self-start position-relative"
        style={{ width: "80%" }}
      >
        <h6 className="text-left about-us-heading">
          <span className="fs-1">T</span>his is it. ;)
          <span
            className={`d-inline-block ${
              theme === "dark" ? "bg-white" : "bg-black"
            }`}
            style={{ height: "1px", width: "80%", marginLeft: "30px" }}
          ></span>
        </h6>
        <p className="text-left about-us-text fw-light py-2">
          Anish Kr. Sinha is an Indian{" "}
          <b>UI/UX Designer & Front End Developer</b> with a passion for
          designing beautiful and fuctional user experiences. Typically, he’s
          Driven & permanently Curious. He’s obsessed with designing things and
          even more obsessed with designing cool & clean stuff for the web and
          mobile. He has been in the business of creating since he hung his
          first painting on the wall when he was 11. <br />
          He holds a <b>bachelor degree in Computer Applications.</b> During his
          graduation, he has been actively involved in the web design community
          for the last 3 years. he has designed websites for small businesses,
          events, nonprofits and more. Currently he’s based in Bihar,{" "}
          <b>India.</b>
          Where he’s working as an independent creative.
          <br /> His interests, however, extend beyond the web and he loves
          helping people with branding and print design. He even loves designing{" "}
          <b>3D floor plan.</b> <br />
          When he’s not designing, he’s probably hanging out with his
          girlfriend, watching series, sketching or messing around on something
          inspired by YouTube tutorials.
        </p>
        <p
          className={` ${theme === "dark" ? "bg-white" : "bg-black"} m-auto`}
          style={{ height: "1px", width: "200px" }}
        ></p>
        <img
          src={Vector_4}
          className="position-absolute"
          alt="small yellow background"
          style={{
            width: "200px",
            height: "200px",
            top: "90%",
            left: "-5%",
            zIndex: "-1",
          }}
        />
        <img
          src={Vector_5}
          className="position-absolute"
          alt="small white background "
          style={{
            width: "200px",
            height: "200px",
            top: "70%",
            right: "0%",
            zIndex: "-1",
          }}
        />
      </section>
      <section>
        <img
          src={Vector_3}
          alt="yellow background"
          style={{ width: "100%", height: "70vh" }}
        />
      </section>
    </main>
  );
};

export default About;
