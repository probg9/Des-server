import { useState, useEffect } from "react";
import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaUsers, FaWpforms, FaMoneyBillWave, FaEnvelope, FaBars } from "react-icons/fa";
import "./a.css";
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!user.isAdmin) {
    return <Navigate to="/adminerror" replace />;
  }

  return (
    <div className="admin-layout">
      <div className={`admin-sidebar ${isMobile && isSidebarOpen ? 'mobile-open' : ''}`}>
        <h2 className="admin-title">Admin Dashboard</h2>
        <nav className={`${isMobile ? isSidebarOpen ? 'admin-nav' : 'admin-nav-active' : 'admin-nav'}`}>
          <NavLink to="/admin/users" className="admin-nav-link">
            <FaUsers /> <span>Users</span>
          </NavLink>
          <NavLink to="/admin/forms" className="admin-nav-link">
            <FaWpforms /> <span>Forms</span>
          </NavLink>
          <NavLink to="/admin/payments" className="admin-nav-link">
            <FaMoneyBillWave /> <span>Payments</span>
          </NavLink>
          <NavLink to="/admin/contacts" className="admin-nav-link">
            <FaEnvelope /> <span>Messages</span>
          </NavLink>
          <NavLink to="/admin/register" className="admin-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
          <FaUsers /><span >Register</span>
          </NavLink>
        </nav>
      </div>

      {isMobile && (
        <button
          className={`mobile-nav-toggle ${isSidebarOpen ? 'active' : ''}`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars />
        </button>
      )}

      <div className="admin-content" onClick={() => setIsSidebarOpen(false)}>
        <Outlet />
      </div>
    </div>
  );
};
