import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Store token
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  // Remove token
  const LogoutUser = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  // Get user data
  const userAuthentication = async () => {
    try {
      setError(null);
      if (!token) {
        throw new Error("No token found");
      }

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error:", errorData);
        throw new Error(errorData.message || "Failed to fetch user data");
      }

      const data = await response.json();
      console.log("User data received:", data);

      // Check if the response contains the expected fields
      if (data.userData) {
        setUser({
          _id: data.userData._id,
          username: data.userData.username,
          email: data.userData.email,
          isAdmin: data.userData.isAdmin
        });
      } else {
        throw new Error(data.message || "Failed to get user data");
      }
    } catch (error) {
      console.error("Auth error:", error);
      setError(error.message);
      LogoutUser();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      userAuthentication();
    } else {
      setIsLoading(false);
    }
  }, [token]);

  const isLoggedIn = !!token;

  const contextValue = {
    token,
    user,
    isLoading,
    error,
    isLoggedIn,
    storeTokenInLS,
    LogoutUser
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
