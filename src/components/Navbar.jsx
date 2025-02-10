import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { useState } from "react";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <header>
        <div className="container" >
          <div className="logo-brand">
            <NavLink className="navitem" to="/">
              <img
                src="/images/des.png"
                alt="we are always ready to help"
              />
              <h1 className="college" style={{position: "relative", left: "1vw", top: "-3px", fontFamily: "Arial, sans-serif", fontSize: "32px"}}>PhysioCare</h1>
            </NavLink>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={isMobileMenuOpen ? 'active' : ''}>
            <ul>
              <li>
                <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="color">Home</div>
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="color">Contact</div>
                </NavLink>
              </li>

              {isLoggedIn ? (
                <>
                  <li>
                    <NavLink to="/payment" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="color">Payment</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/form" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="color">Form</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="color">Register</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/logout" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="color">Logout</div>
                    </NavLink>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="color">Login</div>
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
