import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./Home.css";
import { useEffect } from "react";

export const Home = () => {
  const { isLoggedIn , user } = useAuth();
  

  return (
    <div className="home-container">
      <div className="home-content">
        <img src="/images/homep.png" className="home-image" alt="Home" />
        <div className="home-text">
          <h1 className="home-title">
            D.E. Society's Brijlal Jindal College of Physiotherapy, Pune
          </h1>
          <div className="home-buttons">
            

            {isLoggedIn ? (
              <>
                {user.isAdmin ? (<NavLink to="/admin">
              <button className="cta">
                <span className="hover-underline-animation">Admin Section</span>
              </button>
              </NavLink>) : (<><NavLink to="/forms">
                  <button className="cta">
                    <span className="hover-underline-animation">Records</span>
                  </button>
                </NavLink></>)}
                <NavLink to="/form">
                  <button className="cta">
                    <span className="hover-underline-animation">Enter Record</span>
                  </button>
                </NavLink>
                <NavLink to="/payment">
                  <button className="cta">
                    <span className="hover-underline-animation">Payment Form</span>
                  </button>
                </NavLink>
                
                
              </>
            ) : (
              <>
                <NavLink to="/contact">
                  <button className="cta">
                    <span className="hover-underline-animation">Registration </span>
                  </button>
                </NavLink>
                <NavLink to="/login">
                  <button className="cta">
                    <span className="hover-underline-animation">Enter Record</span>
                  </button>
                </NavLink>
                <NavLink to="/loginfirst">
                  <button className="cta">
                    <span className="hover-underline-animation">Payment Form</span>
                  </button>
                </NavLink>
                <NavLink to="/loginfirst">
                  <button className="cta">
                    <span className="hover-underline-animation">Records</span>
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
