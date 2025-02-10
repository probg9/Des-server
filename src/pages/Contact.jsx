import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaUser, FaPhone, FaEnvelope, FaComments, FaPaperPlane } from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { user, token } = useAuth();
  const navigate = useNavigate();

  // Use useEffect to set initial form data from user
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        username: user.username || "",
        email: user.email || "",
        phone: user.phone || "",
      }));
    }
  }, [user]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to send message");
      }

      const data = await response.json();
      
      toast.success("Message sent successfully!");
      setFormData(prev => ({
        ...prev,
        message: ""
      }));

    } catch (error) {
      console.error("Contact Error:", error);
      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h1>Get in Touch</h1>
          <p>Have any questions? We'd love to hear from you.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p>+91 7350834608</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>ketakijadhav2003@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaComments className="contact-icon" />
              <div>
                <h3>Office Hours</h3>
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <label htmlFor="username">
                <FaUser /> Full Name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                required
                autoComplete="name"
                value={formData.username}
                onChange={handleInput}
                placeholder="Enter your name"
                disabled={isLoading}
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">
                <FaEnvelope /> Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleInput}
                placeholder="Enter your email"
                disabled={isLoading}
              />
            </div>

            <div className="input-group">
              <label htmlFor="phone">
                <FaPhone /> Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                autoComplete="tel"
                value={formData.phone}
                onChange={handleInput}
                placeholder="Enter your phone number"
                disabled={isLoading}
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">
                <FaComments /> Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                value={formData.message}
                onChange={handleInput}
                placeholder="Type your message here..."
                rows="5"
                disabled={isLoading}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isLoading}
            >
              <FaPaperPlane />
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
