import { useContext, useState } from "react";
import Logo from "../assets/Logo.svg";
import Moon from "../assets/Moon.png";
import Sun from "../assets/Sun.png";
import LightLogo from "../assets/Light_logo.png";
import ThemeContext from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => setIsNavOpen(!isNavOpen);

  const navItems = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Resume", href: "projects" },
    { label: "Skills", href: "contact" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <header className="container py-3 px-3 bg-body">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img
              src={theme === "dark" ? LightLogo : Logo}
              alt="Logo"
              style={{ height: "40px" }}
              className="img-fluid"
            />
            <h1 className="ms-2 fs-6 fw-bold text-uppercase mb-0">
              ANISH KUMAR SINHA
            </h1>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={handleNavToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto mt-3 mt-md-0 d-flex align-items-center gap-md-3">
              {navItems.map((item) => (
                <li className="nav-item" key={item.label}>
                  <Link
                    to={item.href}
                    className={`nav-link fw-semibold ${
                      theme === "dark" ? "text-white" : "text-dark"
                    }`}
                    onClick={() => setIsNavOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="nav-item d-flex align-items-center">
                <button
                  type="button"
                  className="btn border-0 p-0"
                  onClick={toggleTheme}
                >
                  <img
                    src={theme === "dark" ? Sun : Moon}
                    alt="Theme Toggle"
                    className="img-fluid"
                    style={{ width: "30px", height: "30px" }}
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
