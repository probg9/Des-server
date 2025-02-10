import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import { FaArrowLeft, FaUser, FaPhone, FaEnvelope, FaNotesMedical } from "react-icons/fa";
import { toast } from "react-toastify";

export const PatientDetails = () => {
  const { id } = useParams();
  const [patientData, setPatientData] = useState(null);
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        setLoading(true);
        // Fetch user data
        const userResponse = await fetch(`https://des-zeta.vercel.app/api/admin/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = await userResponse.json();

        // Fetch forms data for this user
        const formsResponse = await fetch(`https://des-zeta.vercel.app/api/admin/forms/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const formsData = await formsResponse.json();

        setPatientData(userData);
        setForms(formsData);
      } catch (error) {
        console.error("Error fetching patient data:", error);
        toast.error("Failed to load patient data");
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, [id, token]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!patientData) {
    return <div className="error">Patient not found</div>;
  }

  return (
    <div className="patient-details-container">
      <Link to="/admin/users" className="back-button">
        <FaArrowLeft /> Back to Users
      </Link>

      <div className="patient-header">
        <div className="patient-avatar">
          <FaUser />
        </div>
        <h1>{patientData.username}'s Profile</h1>
      </div>

      <div className="patient-info-grid">
        <div className="info-card">
          <div className="info-icon"><FaUser /></div>
          <div className="info-content">
            <h3>Basic Information</h3>
            <p><strong>Name:</strong> {patientData.username}</p>
            <p><strong>Patient ID:</strong> {patientData._id}</p>
            <p><strong>Joined:</strong> {new Date(patientData.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon"><FaEnvelope /></div>
          <div className="info-content">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> {patientData.email}</p>
            <p><strong>Phone:</strong> {patientData.phone || 'N/A'}</p>
          </div>
        </div>
      </div>

      <div className="medical-records-section">
        <h2><FaNotesMedical /> Medical Records</h2>
        
        {forms.length === 0 ? (
          <p className="no-records">No medical records found</p>
        ) : (
          <div className="records-timeline">
            {forms.map((form, index) => (
              <div key={form._id} className="record-card">
                <div className="record-date">
                  {new Date(form.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="record-content">
                  <h3>Visit #{forms.length - index}</h3>
                  <div className="record-details">
                    <p><strong>Chief Complaint:</strong> {form.Chief_Complaint}</p>
                    <p><strong>Age at Visit:</strong> {form.Age}</p>
                    <p><strong>Gender:</strong> {form.Gender}</p>
                    <p><strong>Contact:</strong> {form.Contact_no}</p>
                    <p><strong>Address:</strong> {form.Address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 