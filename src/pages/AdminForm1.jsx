// import React, { useEffect, useState } from "react";
// import { useAuth } from "../store/auth";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";
// import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

// export const AdminForm1 = () => {
//   const [forms, setForms] = useState([]);
//   const [selectedForm, setSelectedForm] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [formlimit, setformlimit] = useState(20);
//   const { token } = useAuth();

//   const getAllFormsData = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       const response = await fetch("https://des-zeta.vercel.app/api/admin/forms", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch forms");
//       }

//       const data = await response.json();
//       console.log("Forms data:", data);
      
//       if (data.success) {
//         setForms(data.forms);
//       } else {
//         throw new Error(data.message || "Failed to get forms data");
//       }
//     } catch (error) {
//       console.error("Error fetching forms:", error);
//       setError(error.message);
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getAllFormsData();
//   }, [token]);

//   const deleteForm = async (id) => {
//     if (window.confirm("Are you sure you want to delete this form?")) {
//     try {
//       const response = await fetch(
//         `https://des-zeta.vercel.app/api/admin/forms/delete/${id}`,
//         {
//           method: "DELETE",
//           headers: {
//               Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.ok) {
//           toast.success("Form deleted successfully");
//           getAllFormsData();
//       } else {
//           const data = await response.json();
//           throw new Error(data.message || "Failed to delete form");
//       }
//     } catch (error) {
//         console.error("Delete error:", error);
//         toast.error(error.message);
//       }
//     }
//   };

//   const handleViewDetails = (form) => {
//     setSelectedForm(form);
//   };

//   const closeDetails = () => {
//     setSelectedForm(null);
//   };

//   const filteredForms = forms.filter(form => {
//     const searchLower = searchTerm.toLowerCase();
//     return (
//       form._id.toString().toLowerCase().includes(searchLower) ||
//       (form.Name && form.Name.toLowerCase().includes(searchLower))
//     );
//   });

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//                 return (
//     <div className="admin-forms-container">
//       <h1 className="admin-forms-title">Patient Forms Data</h1>
      
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by ID or Name..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="search-input"
//         />
//       </div>

//       <div className="mobile-actions">
//         <select 
//           className="mobile-filter"
//           onChange={(e) => setSearchTerm(e.target.value)}
//         >
//           <option value="">All Records</option>
//           {Array.from(new Set(forms.map(form => form.Type_of_form))).map((type, index) => (
//             <option key={index} value={type}>{type}</option>
//           ))}
//         </select>
//       </div>

//       {selectedForm && (
//         <div className="patient-modal-overlay">
//           <div className="patient-modal">
//             <button className="close-button" onClick={closeDetails}>&times;</button>
//             <h2>Patient Details</h2>
//             <div className="patient-details-grid">
//               {/* Personal Information */}
//               <div className="detail-section">
//                 <h3>Personal Information</h3>
//                 <div className="detail-group">
//                   <label>Form Date & Time:</label>
//                   <span>{selectedForm.DateTime}</span>
//                               </div>
//                 <div className="detail-group">
//                   <label>Filled By:</label>
//                   <span>{selectedForm.FilledBy_Name}</span>
//                               </div>
//                 <div className="detail-group">
//                   <label>Type of Form:</label>
//                   <span>{selectedForm.Type_of_form}</span>
//                               </div>
//                 <div className="detail-group">
//                   <label>Type of Patient:</label>
//                   <span>{selectedForm.Type_of_paitent}</span>
//                               </div>
//                 <div className="detail-group">
//                   <label>Name:</label>
//                   <span>{selectedForm.Name}</span>
//                               </div>
//                 <div className="detail-group">
//                   <label>Aadhaar Number:</label>
//                   <span>{selectedForm.AadhaarNumber}</span>
//                               </div>
//                 <div className="detail-group">
//                   <label>Age:</label>
//                   <span>{selectedForm.Age}</span>
//                               </div>
//                 <div className="detail-group">
//                   <label>Gender:</label>
//                   <span>{selectedForm.Gender}</span>
//                               </div>
//                 <div className="detail-group">
//                   <label>Contact:</label>
//                   <span>{selectedForm.Contact_no}</span>
//                               </div>
//                 <div className="detail-group">
//                   <label>Address:</label>
//                   <span>{selectedForm.Address}</span>
//                             </div>
//                 <div className="detail-group">
//                   <label>Previous Occupation:</label>
//                   <span>{selectedForm.Previous_Occupation}</span>
//                 </div>
//               </div>

//               {/* Chief Complaints & History */}
//               <div className="detail-section full-width">
//                 <h3>Medical Information</h3>
//                 <div className="detail-group">
//                   <label>Chief Complaint:</label>
//                   <span>{selectedForm.Chief_Complaint}</span>
//                 </div>
//                 <div className="detail-group">
//                   <label>History of Present Illness:</label>
//                   <span>{selectedForm.HOPI}</span>
//                 </div>
//                 <div className="detail-group">
//                   <label>Site:</label>
//                   <span>{selectedForm.Site}</span>
//                 </div>
//                 <div className="detail-group">
//                   <label>Pain Site Left:</label>
//                   <span>{selectedForm.PainSiteLeft?.join(', ')}</span>
//                 </div>
//                 <div className="detail-group">
//                   <label>Pain Site Right:</label>
//                   <span>{selectedForm.PainSiteRight?.join(', ')}</span>
//                 </div>
//                 <div className="detail-group">
//                   <label>Type of Pain:</label>
//                   <span>{selectedForm.Type}</span>
//                 </div>
//                 <div className="detail-group">
//                   <label>Pain Indicators:</label>
//                   <span>{selectedForm.IndicatePain?.join(', ')}</span>
//                 </div>
//               </div>

//               {/* Pain Assessment */}
//               <div className="detail-section full-width">
//                 <h3>Pain Assessment</h3>
//                 <div className="detail-group">
//                   <label>Onset:</label>
//                   <span>{selectedForm.Onset}</span>
//                               </div>
//                 <div className="detail-group">
//                   <label>Duration:</label>
//                   <span>{selectedForm.Duration}</span>
//                 </div>
//                 <div className="detail-group">
//                   <label>Progression:</label>
//                   <span>{selectedForm.Progression}</span>
//                 </div>
//                 <div className="detail-group">
//                   <label>Aggravating Factors:</label>
//                   <span>{selectedForm.Aggravating_Factors}</span>
//                 </div>
//                 <div className="detail-group">
//                   <label>Relieving Factors:</label>
//                   <span>{selectedForm.Relieving_Factors}</span>
//                 </div>
//                 <div className="detail-group">
//                   <label>Diurnal Variation:</label>
//                   <span>{selectedForm.Diurnal_Variation}</span>
//                 </div>
//                 <div className="detail-group">
//                   <label>Irritability:</label>
//                   <span>{selectedForm.Irritability}</span>
//                 </div>
//                 <div className="detail-group">
//                   <label>VAS Score:</label>
//                   <span>{selectedForm.vas}</span>
//                 </div>
//               </div>

//               {/* NRS Scores */}
//               <div className="detail-section full-width">
//                 <h3>NRS Scores</h3>
//                 <div className="nrs-grid">
//                   <div className="detail-group">
//                     <label>Neck:</label>
//                     <span>{selectedForm.NRSNeck?.join(', ')}</span>
//                               </div>
//                   <div className="detail-group">
//                     <label>Upper Back:</label>
//                     <span>{selectedForm.NRSUpperBack?.join(', ')}</span>
//                   </div>
//                   <div className="detail-group">
//                     <label>Low Back:</label>
//                     <span>{selectedForm.NRSLowBack?.join(', ')}</span>
//                   </div>
//                   <div className="detail-group">
//                     <label>Hip:</label>
//                     <span>{selectedForm.NRSHip?.join(', ')}</span>
//                   </div>
//                   <div className="detail-group">
//                     <label>Knee:</label>
//                     <span>{selectedForm.NRSKnee?.join(', ')}</span>
//                   </div>
//                   <div className="detail-group">
//                     <label>Ankle & Foot:</label>
//                     <span>{selectedForm.NRSAnkleAndFoot?.join(', ')}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Medical History */}
//               <div className="detail-section full-width">
//                 <h3>Medical History</h3>
//                 <div className="detail-group">
//                   <label>Medical History:</label>
//                   <span>{selectedForm.Medical_History}</span>
//                               </div>
//                 <div className="detail-group">
//                   <label>Surgical History:</label>
//                   <span>{selectedForm.Surgical_History}</span>
//                               </div>
//                 <div className="detail-group">
//                   <label>Sleep:</label>
//                   <span>{selectedForm.Sleep}</span>
//                             </div>
//                 <div className="detail-group">
//                   <label>Appetite:</label>
//                   <span>{selectedForm.Appetite}</span>
//                 </div>
//                 <div className="detail-group">
//                   <label>Diet:</label>
//                   <span>{selectedForm.Diet}</span>
//                 </div>
//                 <div className="detail-group">
//                   <label>Bowel:</label>
//                   <span>{selectedForm.Bowel}</span>
//                 </div>
//                 <div className="detail-group">
//                   <label>Bladder:</label>
//                   <span>{selectedForm.Bladder}</span>
//                 </div>
//               </div>

//               {/* Measurements & Vitals */}
//               <div className="detail-section full-width">
//                 <h3>Measurements & Vitals</h3>
//                 <div className="vitals-grid">
//                   <div className="detail-group">
//                     <label>Height:</label>
//                     <span>{selectedForm.Height}</span>
//                   </div>
//                   <div className="detail-group">
//                     <label>Weight:</label>
//                     <span>{selectedForm.Weight}</span>
//                   </div>
//                   <div className="detail-group">
//                     <label>BMI:</label>
//                     <span>{selectedForm.BMI}</span>
//                   </div>
//                   <div className="detail-group">
//                     <label>Blood Pressure:</label>
//                     <span>{selectedForm.BP}</span>
//                   </div>
//                   <div className="detail-group">
//                     <label>Pulse Rate:</label>
//                     <span>{selectedForm.PR}</span>
//                   </div>
//                   <div className="detail-group">
//                     <label>Respiratory Rate:</label>
//                     <span>{selectedForm.RR}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Physical Examination */}
//               <div className="detail-section full-width">
//                 <h3>Physical Examination</h3>
//                 <div className="examination-grid">
//                   <div className="detail-group">
//                     <label>Pallor:</label>
//                     <span>{selectedForm.Pallor}</span>
//                               </div>
//                   <div className="detail-group">
//                     <label>Icterus:</label>
//                     <span>{selectedForm.Icterus}</span>
//                             </div>
//                   <div className="detail-group">
//                     <label>Cyanosis:</label>
//                     <span>{selectedForm.Cyanosis}</span>
//                   </div>
//                   <div className="detail-group">
//                     <label>Clubbing:</label>
//                     <span>{selectedForm.Clubbing}</span>
//                   </div>
//                   <div className="detail-group">
//                     <label>Erythema:</label>
//                     <span>{selectedForm.Erythema}</span>
//                   </div>
//                   <div className="detail-group">
//                     <label>Lymphadenopathy:</label>
//                     <span>{selectedForm.Lymphadenopathy}</span>
//                   </div>
//                   <div className="detail-group">
//                     <label>Oedema:</label>
//                     <span>{selectedForm.Oedema}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Assessment Scores */}
//               <div className="detail-section full-width">
//                 <h3>Assessment Scores</h3>
//                 <div className="scores-grid">
//                   <div className="detail-group">
//                     <label>Geriatric Depression Scale:</label>
//                     <span>{selectedForm.Geriatric_Depression_Scale}</span>
//                                 </div>
//                   <div className="detail-group">
//                     <label>SF-36 Score:</label>
//                     <span>{selectedForm.SF_36_Score}</span>
//                             </div>
//                   <div className="detail-group">
//                     <label>TUG Test:</label>
//                     <span>{selectedForm.TUG}</span>
//                                 </div>
//                   <div className="detail-group">
//                     <label>MOCA Scale Score:</label>
//                     <span>{selectedForm.Moca_Scale_Score}</span>
//                   </div>
//                   <div className="detail-group">
//                     <label>Six Minute Walk Test:</label>
//                     <span>{selectedForm.SixMinuteWalkTest}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Additional Information */}
//               <div className="detail-section full-width">
//                 <h3>Additional Information</h3>
//                 <div className="detail-group">
//                   <label>Additional Remarks:</label>
//                   <span>{selectedForm.Additional_remarks}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {filteredForms.length === 0 ? (
//         <p className="no-data">No matching forms found</p>
//       ) : (
//         <div className="table-responsive">
//           <table className="admin-forms-table">
//             <thead>
//               <tr>
//                 <th>Sr. No.</th>
//                 <th>Form ID</th>
//                 <th>Name</th>
//                 <th>Date & Time</th>
//                 <th>Age</th>
//                 <th>Gender</th>
//                 <th>Contact</th>
//                 <th>Chief Complaint</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody style={{overflowX:"hidden"}}>
//               {filteredForms.slice(0,formlimit).map((form, index) => (
//                 <tr key={form._id}>
//                   <td>{index + 1}</td>
//                   <td>
//                     <button 
//                       className="id-button"
//                       onClick={() => handleViewDetails(form)}
//                       title="Click to view details"
//                     >
//                       {form._id.toString().slice(16, )}
//                     </button>
//                   </td>
//                   <td>{form.Name ? form.Name.toUpperCase() : "N/A"}</td>
//                   <td>{new Date(form.createdAt).toLocaleString('en-US', {
//                     dateStyle: 'medium',
//                     timeStyle: 'short'
//                   })}</td>
//                   <td>{form.Age || "N/A"}</td>
//                   <td>{form.Gender || "N/A"}</td>
//                   <td>{form.Contact_no || "N/A"}</td>
//                   <td>{form.Chief_Complaint || "N/A"}</td>
//                   <td className="action-buttons">
//                     <Link 
//                       to={`/admin/forms/${form._id}/edit`}
//                       className="edit-button"
//                     >
//                       <FaEdit /> Edit
//                     </Link>
//                     <button 
//                       onClick={() => deleteForm(form._id)}
//                       className="delete-button"
//                     >
//                       <FaTrash /> Delete
//                     </button>
//                         </td>
//                       </tr>
//               ))}
//             </tbody>
//             </table>
//             {forms.length >= 20 && (
//             <button 
//               className="load-more-button"
//               onClick={() => setformlimit(formlimit + 20)}
//             >
//               Load More
//             </button>
//           )}
//           </div>
//       )}
//     </div>
//   );
// };
