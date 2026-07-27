import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import avatar from "../../assets/avatar.png";

const NavBar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    { label: "🏠 Home", path: "/" },
    { label: "👤 About", path: "/about" },
    { label: "🎓 Academic", path: "/academic" },
    { label: "📝 Notes", path: "/notes" },
    { label: "📸 Moments", path: "/moments" },
    { label: "💬 Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <Link to="/" className="navbar-avatar-link">
            <div className="navbar-avatar">
              <img src={avatar} alt="Kuhn Avatar" />
            </div>
          </Link>
          <span className="navbar-logo">Kuhn</span>
        </div>
        <div className="navbar-menu">
          {navItems.map((item) => (
            <Link key={item.path} className="navbar-link" to={item.path}>
              {item.label}
            </Link>
          ))}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
