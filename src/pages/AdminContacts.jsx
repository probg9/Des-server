import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { FaTrash, FaEnvelope } from 'react-icons/fa';

export const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  const getAllContacts = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("http://localhost:5500/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log("Contacts data:", data);

      // Check if data is an array directly
      if (Array.isArray(data)) {
        setContacts(data);
      } else {
        throw new Error("Invalid contact data format");
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setError(error.message);
      toast.error("Failed to load contacts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, [token]);

  const deleteContact = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        const response = await fetch(
          `http://localhost:5500/api/admin/contacts/delete/${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          toast.success("Message deleted successfully");
          getAllContacts();
        } else {
          const data = await response.json();
          throw new Error(data.message || "Failed to delete message");
        }
      } catch (error) {
        console.error("Delete error:", error);
        toast.error(error.message);
      }
    }
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="admin-forms-container">
      <h1 className="admin-forms-title">Contact Messages</h1>

      {contacts.length === 0 ? (
        <p className="no-data">No messages available</p>
      ) : (
        <div className="table-responsive">
          <table className="admin-forms-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Date & Time</th>
                <th>Username</th>
                <th>Email</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={contact._id}>
                  <td>{index + 1}</td>
                  <td>{new Date(contact.createdAt).toLocaleString('en-US', {
                    dateStyle: 'medium',
                    timeStyle: 'short'
                  })}</td>
                  <td className="username-cell">{contact.username || "N/A"}</td>
                  <td className="email-cell">
                    <button 
                      className="email-button"
                      onClick={() => handleEmailClick(contact.email)}
                      title="Click to send email"
                    >
                      <FaEnvelope /> {contact.email}
                    </button>
                  </td>
                  <td className="message-cell">{contact.message || "N/A"}</td>
                  <td className="action-buttons">
                    <button 
                      onClick={() => deleteContact(contact._id)}
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
