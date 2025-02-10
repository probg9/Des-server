import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { FaEdit, FaTrash, FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  const getAllUsersData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("http://localhost:5500/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log("Users data:", data);

      // Check if data is an array directly
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        throw new Error("Invalid user data format");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError(error.message);
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, [token]);

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await fetch(
          `http://localhost:5500/api/admin/users/delete/${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          toast.success("User deleted successfully");
          getAllUsersData();
        } else {
          const data = await response.json();
          throw new Error(data.message || "Failed to delete user");
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
      <h1 className="admin-forms-title">User Management</h1>

      {users.length === 0 ? (
        <p className="no-data">No users available</p>
      ) : (
        <div className="table-responsive">
          <table className="admin-forms-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>User ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Joined Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user._id.toString().slice(-6)}</td>
                  <td className="username-cell">
                    <Link to={`/admin/patients/${user._id}`} className="user-link">
                      <span className="user-icon"><FaUser /></span>
                      {user.username}
                    </Link>
                  </td>
                  <td className="email-cell">{user.email}</td>
                  <td>{user.phone || "N/A"}</td>
                  <td>
                    <span className={`role-badge ${user.isAdmin ? 'admin' : 'user'}`}>
                      {user.isAdmin ? 'Admin' : 'User'}
                    </span>
                  </td>
                  <td>{new Date(user.createdAt).toLocaleString('en-US', {
                    dateStyle: 'medium',
                    timeStyle: 'short'
                  })}</td>
                  <td className="action-buttons">
                    <Link 
                      to={`/admin/users/${user._id}/edit`}
                      className="edit-button"
                    >
                      <FaEdit /> Edit
                    </Link>
                    <button 
                      onClick={() => deleteUser(user._id)}
                      className="delete-button"
                      disabled={user.isAdmin}
                      title={user.isAdmin ? "Admin users cannot be deleted" : "Delete user"}
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
