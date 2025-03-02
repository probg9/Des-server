import { useState } from "react";
import { useAuth } from "../store/auth";
import "./Payment.css";
import "./Forms.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FaRupeeSign, FaCreditCard, FaUser, FaPhone, FaEnvelope } from "react-icons/fa";

const defaultPaymentFormData = {
  name: "",
  email: '',
  phone: '',
  amount: '',
  payment_purpose: '',
  payment_date: '',
  payment_mode: '',
  transaction_id: '',
  status: ''
};

export const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    payment_purpose: "",
    payment_date: new Date().toISOString().split('T')[0],
    payment_mode: "Cash",
    transaction_id: "",
    status: "completed"
  });

  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPaymentData({
      ...paymentData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate required fields
      if (!paymentData.name || !paymentData.phone || !paymentData.amount || !paymentData.payment_mode) {
        toast.error("Please fill in all required fields");
        return;
      }

      // Log the data being sent
      console.log("Sending payment data:", paymentData);

      // Make sure this URL matches your backend endpoint
      const response = await fetch(`http://localhost:5500/api/dataform/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(paymentData),
      });

      // Check if response is ok before trying to parse JSON
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        
        // Add more specific error handling based on status codes
        if (response.status === 404) {
          throw new Error('Payment endpoint not found. Please check the API endpoint.');
        } else if (response.status === 401) {
          throw new Error('Authentication failed. Please login again.');
        } else {
          throw new Error('Failed to record payment. Please try again.');
        }
      }

      const data = await response.json();
      toast.success(data.message || "Payment recorded successfully");
      
      // Reset form
      setPaymentData({
        name: "",
        email: "",
        phone: "",
        amount: "",
        payment_purpose: "",
        payment_date: new Date().toISOString().split('T')[0],
        payment_mode: "Cash",
        transaction_id: "",
        status: "Completed"
      });
      
      // Redirect after successful payment
      navigate("/");

    } catch (error) {
      console.error("Payment Error:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="back" style={{height:"88vh"}}>
      <div className="payment-container">
        <div className="payment-image"></div>
        <div className="payment-form-container">
          <h1 className="payment-title">
            <FaRupeeSign className="payment-icon" /> Payment Form
          </h1>
          
          <div className="payment-form">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                {/* Personal Information */}
                <div className="form-section">
                  <h2>Personal Information</h2>
                  <div className="input-group">
                    <label htmlFor="name">
                      <FaUser /> Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      autoComplete="name"
                      value={paymentData.name}
                      onChange={handleInput}
                      placeholder="Enter full name"
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
                      autoComplete="email"
                      value={paymentData.email}
                      onChange={handleInput}
                      placeholder="Enter email address"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="phone">
                      <FaPhone /> Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      autoComplete="tel"
                      value={paymentData.phone}
                      onChange={handleInput}
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                {/* Payment Details */}
                <div className="form-section">
                  <h2>Payment Details</h2>
                  <div className="input-group">
                    <label htmlFor="amount">
                      <FaRupeeSign /> Amount *
                    </label>
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      required
                      value={paymentData.amount}
                      onChange={handleInput}
                      placeholder="Enter amount"
                      min="0"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="payment_purpose">
                      <FaCreditCard /> Payment Purpose *
                    </label>
                    <select
                      name="payment_purpose"
                      id="payment_purpose"
                      required
                      value={paymentData.payment_purpose}
                      onChange={handleInput}
                    >
                      <option value="">Select purpose</option>
                      <option value="Consultation">Consultation</option>
                      <option value="Treatment">Treatment</option>
                      <option value="Medicine">Medicine</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label htmlFor="payment_date">Payment Date *</label>
                    <input
                      type="date"
                      name="payment_date"
                      id="payment_date"
                      required
                      value={paymentData.payment_date}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="payment_mode">Payment Mode *</label>
                    <select
                      name="payment_mode"
                      id="payment_mode"
                      required
                      value={paymentData.payment_mode}
                      onChange={handleInput}
                    >
                      <option value="Cash">Cash</option>
                      <option value="UPI">UPI</option>
                      <option value="Card">Card</option>
                      <option value="Net Banking">Net Banking</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label htmlFor="transaction_id">Transaction ID</label>
                    <input
                      type="text"
                      name="transaction_id"
                      id="transaction_id"
                      value={paymentData.transaction_id}
                      onChange={handleInput}
                      placeholder="Enter transaction ID (if applicable)"
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={loading}
              >
                <FaRupeeSign /> {loading ? "Processing..." : "Record Payment"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
