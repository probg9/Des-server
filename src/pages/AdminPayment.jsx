import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from 'react-icons/fa';

export const AdminPayments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  const getAllPaymentsData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch("https://des-zeta.vercel.app/api/admin/payments", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log("Payments data:", data);
      
      // Check if data is an array directly
      if (Array.isArray(data)) {
        setPayments(data);
      } else if (data.payments && Array.isArray(data.payments)) {
        setPayments(data.payments);
      } else {
        throw new Error("Invalid payment data format");
      }
    } catch (error) {
      console.error("Error fetching payments:", error);
      setError(error.message);
      toast.error("Failed to load payments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPaymentsData();
  }, [token]);

  const deletePayment = async (id) => {
    if (window.confirm("Are you sure you want to delete this payment record?")) {
      try {
        const response = await fetch(
          `https://des-zeta.vercel.app/api/admin/payments/delete/${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          toast.success("Payment record deleted successfully");
          getAllPaymentsData();
        } else {
          const data = await response.json();
          throw new Error(data.message || "Failed to delete payment record");
        }
      } catch (error) {
        console.error("Delete error:", error);
        toast.error(error.message);
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="admin-forms-container">
      <h1 className="admin-forms-title">Payment Records</h1>
      
      {payments.length === 0 ? (
        <p className="no-data">No payment records available</p>
      ) : (
        <div className="table-responsive">
          <table className="admin-forms-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Date & Time</th>
                <th>Patient Name</th>
                <th>Contact</th>
                <th>Payment Method</th>
                <th>Amount (₹)</th>
                <th>Transaction ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <td>{index + 1}</td>
                  <td>{payment.payment_date.slice(0,10)} Time : {payment.payment_date.slice(11,19) || new Date(payment.createdAt).toLocaleString('en-US', {
                    dateStyle: 'medium',
                    timeStyle: 'short'
                  })}</td>
                  <td className="username-cell">{payment.name || "N/A"}</td>
                  <td>{payment.phone || "N/A"}</td>
                  <td>
                    <span className={`payment-method ${payment.payment_mode?.toLowerCase()}`}>
                      {payment.payment_mode || "N/A"}
                    </span>
                  </td>
                  <td className="amount">₹{payment.amount || "0"}</td>
                  <td>{payment.transaction_id || "N/A"}</td>
                  <td className="action-buttons">
                    <Link 
                      to={`/admin/payments/${payment._id}/edit`}
                      className="edit-button"
                    >
                      <FaEdit /> Edit
                    </Link>
                    <button 
                      onClick={() => deletePayment(payment._id)}
                      className="delete-button"
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
