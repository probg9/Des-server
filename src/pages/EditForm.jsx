import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const EditForm = () => {
  const [formData, setFormData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { authorizationToken } = useAuth();

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await fetch(`http://localhost:5500/api/admin/forms/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authorizationToken}`,
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Fetched form data:", data);
        setFormData(data);
      } catch (error) {
        console.error("Error fetching form:", error);
        toast.error("Failed to load form data");
      }
    };

    fetchFormData();
  }, [id, authorizationToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5500/api/admin/forms/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update form");
      }

      toast.success("Form updated successfully");
      navigate("/admin/forms");
    } catch (error) {
      console.error("Error updating form:", error);
      toast.error("Failed to update form");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!formData) return <div>Loading...</div>;

  return (
    <div className="edit-form-container">
      <h1>Edit Patient Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Patient Name:</label>
          <input
            type="text"
            name="Name"
            value={formData.Name || ""}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="text"
            name="Age"
            value={formData.Age || ""}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="text"
            name="Contact_no"
            value={formData.Contact_no || ""}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="Address"
            value={formData.Address || ""}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Chief Complaint:</label>
          <textarea
            name="Chief_Complaint"
            value={formData.Chief_Complaint || ""}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Medical History:</label>
          <textarea
            name="Medical_History"
            value={formData.Medical_History || ""}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="button-group">
          <button type="submit" className="save-btn">
            Save Changes
          </button>
          <button 
            type="button" 
            className="cancel-btn"
            onClick={() => navigate("/admin/forms")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}; 