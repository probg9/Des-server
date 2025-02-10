import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css"; // Import a CSS file for custom styles

export const Register = () => {
  const [user1, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS, user, isLoading } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user1,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user1),
      });

      const res_data = await response.json();

      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        toast.success("Registration successful");
        navigate("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  if (!user.isAdmin) {
    // If user is not an admin, redirect them to an error page or display a message
    return <Navigate to="/adminerror" />;
  }

  return (
    <section className="register-section">
      <div className="register-container">
        <div className="registration-image">
          <img
            src="/images/register.png"
            alt="a nurse with a cute look"
            loading="lazy"
          />
        </div>
        
        <div className="registration-form">
          <h1 className="registration-title">Create an Account</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={user1.username}
                onChange={handleInput}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={user1.email}
                onChange={handleInput}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={user1.phone}
                onChange={handleInput}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={user1.password}
                onChange={handleInput}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="button-container">
              <button type="submit" className="button-pay">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
