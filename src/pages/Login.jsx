import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Login attempt with:", { email: formData.email });
      
      // Use the environment variable
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Origin": window.location.origin,
        },
        mode: "cors", // Explicitly set CORS mode
        cache: "no-cache", // Disable caching
        body: JSON.stringify({
          email: formData.email.toLowerCase().trim(),
          password: formData.password
        })
      });

      // Check if response exists
      if (!response) {
        throw new Error("No response from server");
      }

      // Parse response
      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const textData = await response.text();
        try {
          data = JSON.parse(textData);
        } catch (e) {
          throw new Error(textData || "Invalid response format");
        }
      }

      // Handle different response statuses
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Invalid email or password");
        } else if (response.status === 404) {
          throw new Error("Server endpoint not found");
        } else if (response.status === 403) {
          throw new Error("Access denied");
        } else if (response.status === 504) {
          throw new Error("Server timeout");
        } else {
          throw new Error(data.message || "Server error occurred");
        }
      }

      // Handle successful login
      if (data.token) {
        storeTokenInLS(data.token);
        toast.success("Login successful!");
        navigate("/gohome");
      } else {
        throw new Error("No token received from server");
      }

    } catch (error) {
      console.error("Login error:", error);
      
      // Handle specific error cases
      if (error.message.includes("Invalid email or password")) {
        toast.error("Invalid email or password");
      } else if (error.message.includes("Failed to fetch") || error.message.includes("Network")) {
        toast.error("Unable to connect to server. Please check your internet connection.");
      } else if (error.message.includes("timeout")) {
        toast.error("Request timed out. Please try again.");
      } else if (error.message.includes("CORS")) {
        toast.error("Access denied. Please try again later.");
      } else {
        toast.error("Login failed. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="grid-two-cols">
          <div className="registration-image">
            <img
              src="/images/register.png"
              alt="a nurse with a cute look"
              loading="lazy"
            />
          </div>
          
          <div className="login-form">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="login-input"
                  value={formData.email}
                  onChange={handleInput}
                  placeholder="Enter your email"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="login-input"
                  value={formData.password}
                  onChange={handleInput}
                  placeholder="Enter your password"
                  required
                  disabled={isLoading}
                />
                <div className="password-toggle">
                  <input
                    type="checkbox"
                    id="showPassword"
                    onChange={() => setShowPassword(prev => !prev)}
                  />
                  <label htmlFor="showPassword">Show Password</label>
                </div>
              </div>

              <div className="button-container">
                <button 
                  type="submit" 
                  className="login-button"
                  disabled={isLoading}
                  
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
